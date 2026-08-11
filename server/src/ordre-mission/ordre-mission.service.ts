import { Injectable, NotFoundException, ConflictException, Logger, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class OrdreMissionService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(OrdreMissionService.name);
  private autoStartInterval: ReturnType<typeof setInterval>;

  constructor(private readonly prisma: PrismaService) {}

  onModuleInit() {
    this.logger.log('Auto-scheduler initialized — checking start/termination every 30 seconds');
    // Run immediately on startup, then every 30 seconds
    this.runSchedulerTasks();
    this.autoStartInterval = setInterval(() => {
      this.runSchedulerTasks();
    }, 30_000);
  }

  onModuleDestroy() {
    if (this.autoStartInterval) {
      clearInterval(this.autoStartInterval);
    }
  }

  private async runSchedulerTasks() {
    await this.autoStartMissions();
    await this.autoTerminateMissions();
  }

  /**
   * Background task: automatically transitions PLANIFIE missions to EN_COURS
   * when their scheduled dateDebut + heureDepart has been reached.
   *
   * dateDebut is stored as UTC midnight (e.g. 2026-07-20T00:00:00.000Z).
   * heureDepart is stored as "HH:mm" in local time.
   * We reconstruct the intended local start time and compare it to Date.now().
   */
  private async autoStartMissions() {
    try {
      const now = new Date();

      const planified = await this.prisma.ordreMission.findMany({
        where: { statut: 'PLANIFIE' },
        select: { id: true, reference: true, dateDebut: true, heureDepart: true },
      });

      for (const m of planified) {
        const d = new Date(m.dateDebut);
        const year  = d.getUTCFullYear();
        const month = d.getUTCMonth();
        const day   = d.getUTCDate();

        const [hours, minutes] = m.heureDepart.split(':').map(Number);

        const scheduledStart = new Date(year, month, day, hours, minutes, 0);

        if (now >= scheduledStart) {
          const result = await this.prisma.ordreMission.updateMany({
            where: { id: m.id, statut: 'PLANIFIE' },
            data: {
              statut: 'EN_COURS',
              departReel: now,          
            },
          });
          
          if (result.count > 0) {
            this.logger.log(`⏩ Mission ${m.reference} auto-started (scheduled ${m.heureDepart})`);
          }
        }
      }
    } catch (err) {
      this.logger.error('Auto-start check failed', err);
    }
  }

  /**
   * Background task: automatically transitions EN_COURS missions to TERMINE
   * when their scheduled dateFin + heureRetour has been reached.
   */
  private async autoTerminateMissions() {
    try {
      const now = new Date();

      const enCours = await this.prisma.ordreMission.findMany({
        where: { statut: 'EN_COURS' },
        select: { id: true, reference: true, dateFin: true, heureRetour: true },
      });

      for (const m of enCours) {
        if (!m.dateFin || !m.heureRetour) continue;

        const d = new Date(m.dateFin);
        const year  = d.getUTCFullYear();
        const month = d.getUTCMonth();
        const day   = d.getUTCDate();

        const [hours, minutes] = m.heureRetour.split(':').map(Number);

        const scheduledEnd = new Date(year, month, day, hours, minutes, 0);

        if (now >= scheduledEnd) {
          await this.update(m.id, {
            statut: 'TERMINE',
            retourReel: now.toISOString(),
          });
          this.logger.log(`🏁 Mission ${m.reference} auto-terminated (scheduled ${m.heureRetour})`);
        }
      }
    } catch (err) {
      this.logger.error('Auto-terminate check failed', err);
    }
  }

  async create(userId: number, dto: {
    employeId?: number;
    destinationId: number;
    chauffeurId: number;
    vehiculeId: number;
    objetMissionId: number;
    dateDebut: string;
    dateFin?: string;
    heureDepart: string;
    heureRetour?: string;
    itineraire?: string;
    fraisParticipation?: number;
    fraisMission?: number;
    notes?: string;
    accompagnateurs?: number[]; // Employee IDs
    statut?: string; // Default: PLANIFIE
  }) {
    const statut = dto.statut || 'PLANIFIE';

    return this.prisma.$transaction(async (tx) => {
      const year = new Date().getFullYear();
      const lastMission = await tx.ordreMission.findFirst({
        where: {
          reference: {
            startsWith: `OM-${year}-`
          }
        },
        orderBy: {
          id: 'desc'
        }
      });

      let nextNum = 1;
      if (lastMission) {
        const parts = lastMission.reference.split('-');
        const lastNum = parseInt(parts[parts.length - 1], 10);
        if (!isNaN(lastNum)) {
          nextNum = lastNum + 1;
        }
      }
      const reference = `OM-${year}-${String(nextNum).padStart(4, '0')}`;

      const order = await tx.ordreMission.create({
        data: {
          reference,
          employeId: dto.employeId || null,
          destinationId: dto.destinationId,
          chauffeurId: dto.chauffeurId,
          vehiculeId: dto.vehiculeId,
          objetMissionId: dto.objetMissionId,
          creeParId: userId,
          dateDebut: new Date(dto.dateDebut),
          dateFin: dto.dateFin ? new Date(dto.dateFin) : null,
          heureDepart: dto.heureDepart,
          heureRetour: dto.heureRetour || null,
          itineraire: dto.itineraire,
          fraisParticipation: dto.fraisParticipation || 0,
          fraisMission: dto.fraisMission || 0,
          notes: dto.notes,
          statut: statut
        }
      });

      if (dto.accompagnateurs && dto.accompagnateurs.length > 0) {
        await tx.accompagnateur.createMany({
          data: dto.accompagnateurs.map(empId => ({
            ordreMissionId: order.id,
            employeId: empId
          }))
        });
      }

      if (statut === 'PLANIFIE' || statut === 'EN_COURS') {
        const chauffeur = await tx.chauffeur.findUnique({ where: { id: dto.chauffeurId } });
        if (!chauffeur || !chauffeur.disponible) {
          throw new ConflictException("Le chauffeur sélectionné n'est pas disponible.");
        }
        const vehicule = await tx.vehicule.findUnique({ where: { id: dto.vehiculeId } });
        if (!vehicule || !vehicule.disponible) {
          throw new ConflictException("Le véhicule sélectionné n'est pas disponible.");
        }

        await tx.chauffeur.update({
          where: { id: dto.chauffeurId },
          data: { disponible: false }
        });
        await tx.vehicule.update({
          where: { id: dto.vehiculeId },
          data: { disponible: false }
        });
      }

      return order;
    });
  }

  async findAll() {
    return this.prisma.ordreMission.findMany({
      include: {
        employe: true,
        destination: true,
        chauffeur: true,
        vehicule: true,
        objetMission: true,
        creePar: {
          select: { id: true, email: true, nom: true, prenom: true }
        },
        accompagnateurs: {
          include: {
            employe: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
  }

  async findOne(id: number) {
    const order = await this.prisma.ordreMission.findUnique({
      where: { id },
      include: {
        employe: true,
        destination: true,
        chauffeur: true,
        vehicule: true,
        objetMission: true,
        creePar: {
          select: { id: true, email: true, nom: true, prenom: true }
        },
        accompagnateurs: {
          include: {
            employe: true
          }
        }
      }
    });
    if (!order) {
      throw new NotFoundException(`Ordre de mission #${id} introuvable`);
    }
    return order;
  }

  async update(id: number, dto: {
    employeId?: number;
    destinationId?: number;
    chauffeurId?: number;
    vehiculeId?: number;
    objetMissionId?: number;
    dateDebut?: string;
    dateFin?: string;
    heureDepart?: string;
    heureRetour?: string;
    itineraire?: string;
    fraisParticipation?: number;
    fraisMission?: number;
    notes?: string;
    statut?: string;
    departReel?: string;
    retourReel?: string;
    accompagnateurs?: number[];
  }) {
    return this.prisma.$transaction(async (tx) => {
      const current = await tx.ordreMission.findUnique({
        where: { id }
      });
      if (!current) {
        throw new NotFoundException(`Ordre de mission #${id} introuvable`);
      }

      if (current.statut === 'EN_COURS' || current.statut === 'TERMINE') {
        const detailsModified =
          dto.employeId !== undefined ||
          dto.destinationId !== undefined ||
          dto.chauffeurId !== undefined ||
          dto.vehiculeId !== undefined ||
          dto.objetMissionId !== undefined ||
          dto.dateDebut !== undefined ||
          dto.dateFin !== undefined ||
          dto.heureDepart !== undefined ||
          dto.heureRetour !== undefined ||
          dto.itineraire !== undefined ||
          dto.fraisParticipation !== undefined ||
          dto.fraisMission !== undefined ||
          dto.accompagnateurs !== undefined;

        if (detailsModified) {
          throw new ConflictException(
            "Impossible de modifier les détails d'une mission en cours ou terminée.",
          );
        }
      }

      // Build update payload
      const data: any = {};
      if (dto.employeId !== undefined) data.employeId = dto.employeId;
      if (dto.destinationId !== undefined) data.destinationId = dto.destinationId;
      if (dto.chauffeurId !== undefined) data.chauffeurId = dto.chauffeurId;
      if (dto.vehiculeId !== undefined) data.vehiculeId = dto.vehiculeId;
      if (dto.objetMissionId !== undefined) data.objetMissionId = dto.objetMissionId;
      if (dto.dateDebut !== undefined) data.dateDebut = new Date(dto.dateDebut);
      if (dto.dateFin !== undefined) data.dateFin = new Date(dto.dateFin);
      if (dto.heureDepart !== undefined) data.heureDepart = dto.heureDepart;
      if (dto.heureRetour !== undefined) data.heureRetour = dto.heureRetour;
      if (dto.itineraire !== undefined) data.itineraire = dto.itineraire;
      if (dto.fraisParticipation !== undefined) data.fraisParticipation = dto.fraisParticipation;
      if (dto.fraisMission !== undefined) data.fraisMission = dto.fraisMission;
      if (dto.notes !== undefined) data.notes = dto.notes;
      if (dto.statut !== undefined) data.statut = dto.statut;
      if (dto.departReel !== undefined) data.departReel = dto.departReel ? new Date(dto.departReel) : null;
      if (dto.retourReel !== undefined) data.retourReel = dto.retourReel ? new Date(dto.retourReel) : null;

      const updated = await tx.ordreMission.update({
        where: { id },
        data
      });

      if (dto.accompagnateurs !== undefined) {
        await tx.accompagnateur.deleteMany({
          where: { ordreMissionId: id }
        });
        if (dto.accompagnateurs.length > 0) {
          await tx.accompagnateur.createMany({
            data: dto.accompagnateurs.map(empId => ({
              ordreMissionId: id,
              employeId: empId
            }))
          });
        }
      }

      const oldStatut = current.statut;
      const newStatut = dto.statut !== undefined ? dto.statut : current.statut;

      const wasOldActive = oldStatut === 'PLANIFIE' || oldStatut === 'EN_COURS';
      const willNewActive = newStatut === 'PLANIFIE' || newStatut === 'EN_COURS';

      const oldChauffeurId = current.chauffeurId;
      const newChauffeurId = dto.chauffeurId !== undefined ? dto.chauffeurId : current.chauffeurId;

      if (oldChauffeurId !== newChauffeurId) {
        // Driver changed
        if (wasOldActive) {
          // Release old chauffeur
          await tx.chauffeur.update({ where: { id: oldChauffeurId }, data: { disponible: true } });
        }
        if (willNewActive) {
          // Book new chauffeur 
          const newChauffeur = await tx.chauffeur.findUnique({ where: { id: newChauffeurId } });
          if (!newChauffeur || !newChauffeur.disponible) {
            throw new ConflictException("Le chauffeur sélectionné n'est pas disponible.");
          }
          await tx.chauffeur.update({ where: { id: newChauffeurId }, data: { disponible: false } });
        }
      } else {
        // Driver remained same
        if (wasOldActive && !willNewActive) {
          // Mission became inactive: release driver
          await tx.chauffeur.update({ where: { id: oldChauffeurId }, data: { disponible: true } });
        } else if (!wasOldActive && willNewActive) {
          // Mission became active: book driver (check availability first)
          const newChauffeur = await tx.chauffeur.findUnique({ where: { id: oldChauffeurId } });
          if (!newChauffeur || !newChauffeur.disponible) {
            throw new ConflictException("Le chauffeur sélectionné n'est pas disponible.");
          }
          await tx.chauffeur.update({ where: { id: oldChauffeurId }, data: { disponible: false } });
        }
      }

      // Vehicule availability logic
      const oldVehiculeId = current.vehiculeId;
      const newVehiculeId = dto.vehiculeId !== undefined ? dto.vehiculeId : current.vehiculeId;

      if (oldVehiculeId !== newVehiculeId) {
        // Vehicle changed
        if (wasOldActive) {
          // Release old vehicle
          await tx.vehicule.update({ where: { id: oldVehiculeId }, data: { disponible: true } });
        }
        if (willNewActive) {
          // Book new vehicle (check availability first)
          const newVehicule = await tx.vehicule.findUnique({ where: { id: newVehiculeId } });
          if (!newVehicule || !newVehicule.disponible) {
            throw new ConflictException("Le véhicule sélectionné n'est pas disponible.");
          }
          await tx.vehicule.update({ where: { id: newVehiculeId }, data: { disponible: false } });
        }
      } else {
        // Vehicle remained same
        if (wasOldActive && !willNewActive) {
          // Mission became inactive: release vehicle
          await tx.vehicule.update({ where: { id: oldVehiculeId }, data: { disponible: true } });
        } else if (!wasOldActive && willNewActive) {
          // Mission became active: book vehicle (check availability first)
          const newVehicule = await tx.vehicule.findUnique({ where: { id: oldVehiculeId } });
          if (!newVehicule || !newVehicule.disponible) {
            throw new ConflictException("Le véhicule sélectionné n'est pas disponible.");
          }
          await tx.vehicule.update({ where: { id: oldVehiculeId }, data: { disponible: false } });
        }
      }

      return updated;
    });
  }

  async remove(id: number) {
    return this.prisma.$transaction(async (tx) => {
      const current = await tx.ordreMission.findUnique({
        where: { id }
      });
      if (!current) {
        throw new NotFoundException(`Ordre de mission #${id} introuvable`);
      }

      // If the deleted mission was active (PLANIFIE or EN_COURS), release the chauffeur and vehicle first
      if (current.statut === 'PLANIFIE' || current.statut === 'EN_COURS') {
        await tx.chauffeur.update({
          where: { id: current.chauffeurId },
          data: { disponible: true }
        });
        await tx.vehicule.update({
          where: { id: current.vehiculeId },
          data: { disponible: true }
        });
      }

      // Cascade deletes the Accompagnateurs due to schema configuration
      return tx.ordreMission.delete({
        where: { id }
      });
    });
  }
}
