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
exports.EmployeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let EmployeService = class EmployeService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.employe.findMany({
            orderBy: { nom: 'asc' },
        });
    }
    async findOne(id) {
        const employe = await this.prisma.employe.findUnique({
            where: { id },
        });
        if (!employe) {
            throw new common_1.NotFoundException(`Employé avec ID ${id} introuvable`);
        }
        return employe;
    }
    async create(data) {
        const existing = await this.prisma.employe.findUnique({
            where: { mle: data.mle },
        });
        if (existing) {
            throw new common_1.ConflictException(`Un employé avec le matricule ${data.mle} existe déjà`);
        }
        return this.prisma.employe.create({ data });
    }
    async update(id, data) {
        await this.findOne(id);
        if (data.mle) {
            const existing = await this.prisma.employe.findFirst({
                where: { mle: data.mle, NOT: { id } },
            });
            if (existing) {
                throw new common_1.ConflictException(`Un employé avec le matricule ${data.mle} existe déjà`);
            }
        }
        return this.prisma.employe.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        await this.findOne(id);
        try {
            return await this.prisma.employe.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new common_1.ConflictException(`Impossible de supprimer cet employé car il est lié à des ordres de mission (en tant que demandeur ou accompagnateur).`);
        }
    }
};
exports.EmployeService = EmployeService;
exports.EmployeService = EmployeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EmployeService);
//# sourceMappingURL=employe.service.js.map