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
exports.DestinationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let DestinationService = class DestinationService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.destination.findMany({
            orderBy: { nom: 'asc' },
        });
    }
    async findOne(id) {
        const destination = await this.prisma.destination.findUnique({
            where: { id },
        });
        if (!destination) {
            throw new common_1.NotFoundException(`Destination avec ID ${id} introuvable`);
        }
        return destination;
    }
    async create(data) {
        const existing = await this.prisma.destination.findUnique({
            where: { nom: data.nom },
        });
        if (existing) {
            throw new common_1.ConflictException(`Une destination nommée "${data.nom}" existe déjà`);
        }
        return this.prisma.destination.create({ data });
    }
    async update(id, data) {
        await this.findOne(id);
        if (data.nom) {
            const existing = await this.prisma.destination.findFirst({
                where: { nom: data.nom, NOT: { id } },
            });
            if (existing) {
                throw new common_1.ConflictException(`Une destination nommée "${data.nom}" existe déjà`);
            }
        }
        return this.prisma.destination.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        await this.findOne(id);
        try {
            return await this.prisma.destination.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new common_1.ConflictException(`Impossible de supprimer cette destination car elle est liée à des ordres de mission.`);
        }
    }
};
exports.DestinationService = DestinationService;
exports.DestinationService = DestinationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DestinationService);
//# sourceMappingURL=destination.service.js.map