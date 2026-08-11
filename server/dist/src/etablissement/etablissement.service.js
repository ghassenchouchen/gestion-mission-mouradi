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
exports.EtablissementService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let EtablissementService = class EtablissementService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.etablissement.findMany({
            orderBy: { nom: 'asc' },
        });
    }
    async findOne(id) {
        const item = await this.prisma.etablissement.findUnique({
            where: { id },
            include: {
                chauffeurs: true,
            },
        });
        if (!item) {
            throw new common_1.NotFoundException(`Établissement avec ID ${id} introuvable`);
        }
        return item;
    }
    async create(data) {
        const existingCode = await this.prisma.etablissement.findUnique({
            where: { code: data.code },
        });
        if (existingCode) {
            throw new common_1.ConflictException(`Un établissement avec le code "${data.code}" existe déjà`);
        }
        return this.prisma.etablissement.create({
            data: {
                code: data.code,
                nom: data.nom,
                ville: data.ville,
                adresse: data.adresse,
                actif: data.actif ?? true,
            },
        });
    }
    async update(id, data) {
        await this.findOne(id);
        if (data.code) {
            const existing = await this.prisma.etablissement.findFirst({
                where: { code: data.code, NOT: { id } },
            });
            if (existing) {
                throw new common_1.ConflictException(`Un établissement avec le code "${data.code}" existe déjà`);
            }
        }
        return this.prisma.etablissement.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        await this.findOne(id);
        try {
            return await this.prisma.etablissement.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new common_1.ConflictException(`Impossible de supprimer cet établissement car des chauffeurs y sont rattachés.`);
        }
    }
};
exports.EtablissementService = EtablissementService;
exports.EtablissementService = EtablissementService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EtablissementService);
//# sourceMappingURL=etablissement.service.js.map