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
exports.ChauffeurService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ChauffeurService = class ChauffeurService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.chauffeur.findMany({
            orderBy: { nom: 'asc' },
            include: { vehiculeParDefaut: true, etablissement: true },
        });
    }
    async findOne(id) {
        const chauffeur = await this.prisma.chauffeur.findUnique({
            where: { id },
            include: { vehiculeParDefaut: true, etablissement: true },
        });
        if (!chauffeur) {
            throw new common_1.NotFoundException(`Chauffeur avec ID ${id} introuvable`);
        }
        return chauffeur;
    }
    async create(data) {
        if (data.mle) {
            const existing = await this.prisma.chauffeur.findUnique({
                where: { mle: data.mle },
            });
            if (existing) {
                throw new common_1.ConflictException(`Un chauffeur avec le matricule ${data.mle} existe déjà`);
            }
        }
        return this.prisma.chauffeur.create({
            data,
            include: { vehiculeParDefaut: true, etablissement: true },
        });
    }
    async update(id, data) {
        await this.findOne(id);
        if (data.mle) {
            const existing = await this.prisma.chauffeur.findFirst({
                where: { mle: data.mle, NOT: { id } },
            });
            if (existing) {
                throw new common_1.ConflictException(`Un chauffeur avec le matricule ${data.mle} existe déjà`);
            }
        }
        return this.prisma.chauffeur.update({
            where: { id },
            data,
            include: { vehiculeParDefaut: true, etablissement: true },
        });
    }
    async remove(id) {
        await this.findOne(id);
        try {
            return await this.prisma.chauffeur.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new common_1.ConflictException(`Impossible de supprimer le chauffeur car il est lié à des ordres de mission.`);
        }
    }
};
exports.ChauffeurService = ChauffeurService;
exports.ChauffeurService = ChauffeurService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ChauffeurService);
//# sourceMappingURL=chauffeur.service.js.map