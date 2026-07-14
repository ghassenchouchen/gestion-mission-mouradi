import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class OrdreMissionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: number, dto: {
    employeId: number;
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
      // Safe unique reference generation (e.g. OM-2026-0001)
      const year = new Date().getFullYear();
      const lastMission = await tx.ordreMission.findFirst({
        where: {
          reference: {
            startsWith: `OM-${year}-`
          }
        },
        orderBy: {
          reference: 'desc'
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
          employeId: dto.employeId,
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

      // Add Accompagnateurs
      if (dto.accompagnateurs && dto.accompagnateurs.length > 0) {
        await tx.accompagnateur.createMany({
          data: dto.accompagnateurs.map(empId => ({
            ordreMissionId: order.id,
            employeId: empId
          }))
        });
      }

      // If status is EN_COURS, check availability and mark chauffeur and vehicle as unavailable
      if (statut === 'EN_COURS') {
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
  }) {
    const current = await this.findOne(id);

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
        dto.fraisMission !== undefined;

      if (detailsModified) {
        throw new ConflictException(
          "Impossible de modifier les détails d'une mission en cours ou terminée.",
        );
      }
    }

    return this.prisma.$transaction(async (tx) => {
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

      // Handle chauffeur/vehicule availability modifications based on status transitions
      const oldStatut = current.statut;
      const newStatut = dto.statut;

      if (newStatut && oldStatut !== newStatut) {
        const cId = dto.chauffeurId || current.chauffeurId;
        const vId = dto.vehiculeId || current.vehiculeId;

        if (newStatut === 'EN_COURS') {
          // Check availability before marking as unavailable
          const chauffeur = await tx.chauffeur.findUnique({ where: { id: cId } });
          if (!chauffeur || !chauffeur.disponible) {
            throw new ConflictException("Le chauffeur sélectionné n'est pas disponible.");
          }
          const vehicule = await tx.vehicule.findUnique({ where: { id: vId } });
          if (!vehicule || !vehicule.disponible) {
            throw new ConflictException("Le véhicule sélectionné n'est pas disponible.");
          }

          // Mark as unavailable
          await tx.chauffeur.update({ where: { id: cId }, data: { disponible: false } });
          await tx.vehicule.update({ where: { id: vId }, data: { disponible: false } });
        } else if (newStatut === 'TERMINE' || newStatut === 'ANNULE') {
          // Release
          await tx.chauffeur.update({ where: { id: cId }, data: { disponible: true } });
          await tx.vehicule.update({ where: { id: vId }, data: { disponible: true } });
        } else if (oldStatut === 'EN_COURS' && newStatut === 'PLANIFIE') {
          // Rollback to planned: release chauffeur/vehicle
          await tx.chauffeur.update({ where: { id: cId }, data: { disponible: true } });
          await tx.vehicule.update({ where: { id: vId }, data: { disponible: true } });
        }
      }

      return updated;
    });
  }

  async remove(id: number) {
    const current = await this.findOne(id);

    return this.prisma.$transaction(async (tx) => {
      // If the deleted mission was active/in-progress, release the chauffeur and vehicle first
      if (current.statut === 'EN_COURS') {
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
