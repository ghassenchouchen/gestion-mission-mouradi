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
exports.ObjetMissionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ObjetMissionService = class ObjetMissionService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.objetMission.findMany({
            orderBy: { libelle: 'asc' },
        });
    }
    async findOne(id) {
        const objet = await this.prisma.objetMission.findUnique({
            where: { id },
        });
        if (!objet) {
            throw new common_1.NotFoundException(`Objet de mission avec ID ${id} introuvable`);
        }
        return objet;
    }
    async create(data) {
        const existing = await this.prisma.objetMission.findUnique({
            where: { libelle: data.libelle },
        });
        if (existing) {
            throw new common_1.ConflictException(`Cet objet de mission "${data.libelle}" existe déjà`);
        }
        return this.prisma.objetMission.create({ data });
    }
    async update(id, data) {
        await this.findOne(id);
        if (data.libelle) {
            const existing = await this.prisma.objetMission.findFirst({
                where: { libelle: data.libelle, NOT: { id } },
            });
            if (existing) {
                throw new common_1.ConflictException(`Cet objet de mission "${data.libelle}" existe déjà`);
            }
        }
        return this.prisma.objetMission.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        await this.findOne(id);
        try {
            return await this.prisma.objetMission.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new common_1.ConflictException(`Impossible de supprimer cet objet car il est lié à des ordres de mission.`);
        }
    }
};
exports.ObjetMissionService = ObjetMissionService;
exports.ObjetMissionService = ObjetMissionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ObjetMissionService);
//# sourceMappingURL=objet-mission.service.js.map