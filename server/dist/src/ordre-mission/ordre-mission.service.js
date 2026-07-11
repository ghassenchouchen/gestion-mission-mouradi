"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdreMissionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let OrdreMissionService = class OrdreMissionService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId, dto) {
        const year = new Date().getFullYear();
        const count = await this.prisma.ordreMission.count({
            where: {
                reference: {
                    startsWith: `OM-${year}-`
                }
            }
        });
        const refNum = String(count + 1).padStart(4, '0');
        const reference = `OM-${year}-${refNum}`;
        const statut = dto.statut || 'PLANIFIE';
        return this.prisma.$transaction(async (tx) => {
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
            if (dto.accompagnateurs && dto.accompagnateurs.length > 0) {
                await tx.accompagnateur.createMany({
                    data: dto.accompagnateurs.map(empId => ({
                        ordreMissionId: order.id,
                        employeId: empId
                    }))
                });
            }
            if (statut === 'EN_COURS') {
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
    async findOne(id) {
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
            throw new common_1.NotFoundException(`Ordre de mission #${id} introuvable`);
        }
        return order;
    }
    async update(id, dto) {
        const current = await this.findOne(id);
        if (current.statut === 'EN_COURS' || current.statut === 'TERMINE') {
            const detailsModified = dto.employeId !== undefined ||
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
                throw new common_1.ConflictException("Impossible de modifier les détails d'une mission en cours ou terminée.");
            }
        }
        return this.prisma.$transaction(async (tx) => {
            const data = {};
            if (dto.employeId !== undefined)
                data.employeId = dto.employeId;
            if (dto.destinationId !== undefined)
                data.destinationId = dto.destinationId;
            if (dto.chauffeurId !== undefined)
                data.chauffeurId = dto.chauffeurId;
            if (dto.vehiculeId !== undefined)
                data.vehiculeId = dto.vehiculeId;
            if (dto.objetMissionId !== undefined)
                data.objetMissionId = dto.objetMissionId;
            if (dto.dateDebut !== undefined)
                data.dateDebut = new Date(dto.dateDebut);
            if (dto.dateFin !== undefined)
                data.dateFin = new Date(dto.dateFin);
            if (dto.heureDepart !== undefined)
                data.heureDepart = dto.heureDepart;
            if (dto.heureRetour !== undefined)
                data.heureRetour = dto.heureRetour;
            if (dto.itineraire !== undefined)
                data.itineraire = dto.itineraire;
            if (dto.fraisParticipation !== undefined)
                data.fraisParticipation = dto.fraisParticipation;
            if (dto.fraisMission !== undefined)
                data.fraisMission = dto.fraisMission;
            if (dto.notes !== undefined)
                data.notes = dto.notes;
            if (dto.statut !== undefined)
                data.statut = dto.statut;
            if (dto.departReel !== undefined)
                data.departReel = dto.departReel ? new Date(dto.departReel) : null;
            if (dto.retourReel !== undefined)
                data.retourReel = dto.retourReel ? new Date(dto.retourReel) : null;
            const updated = await tx.ordreMission.update({
                where: { id },
                data
            });
            const oldStatut = current.statut;
            const newStatut = dto.statut;
            if (newStatut && oldStatut !== newStatut) {
                const cId = dto.chauffeurId || current.chauffeurId;
                const vId = dto.vehiculeId || current.vehiculeId;
                if (newStatut === 'EN_COURS') {
                    await tx.chauffeur.update({ where: { id: cId }, data: { disponible: false } });
                    await tx.vehicule.update({ where: { id: vId }, data: { disponible: false } });
                }
                else if (newStatut === 'TERMINE' || newStatut === 'ANNULE') {
                    await tx.chauffeur.update({ where: { id: cId }, data: { disponible: true } });
                    await tx.vehicule.update({ where: { id: vId }, data: { disponible: true } });
                }
                else if (oldStatut === 'EN_COURS' && newStatut === 'PLANIFIE') {
                    await tx.chauffeur.update({ where: { id: cId }, data: { disponible: true } });
                    await tx.vehicule.update({ where: { id: vId }, data: { disponible: true } });
                }
            }
            return updated;
        });
    }
    async remove(id) {
        const current = await this.findOne(id);
        return this.prisma.$transaction(async (tx) => {
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
            return tx.ordreMission.delete({
                where: { id }
            });
        });
    }
};
exports.OrdreMissionService = OrdreMissionService;
exports.OrdreMissionService = OrdreMissionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrdreMissionService);
//# sourceMappingURL=ordre-mission.service.js.map