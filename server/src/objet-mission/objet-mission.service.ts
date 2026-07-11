import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ObjetMissionService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.objetMission.findMany({
      orderBy: { libelle: 'asc' },
    });
  }

  async findOne(id: number) {
    const objet = await this.prisma.objetMission.findUnique({
      where: { id },
    });
    if (!objet) {
      throw new NotFoundException(`Objet de mission avec ID ${id} introuvable`);
    }
    return objet;
  }

  async create(data: { libelle: string }) {
    const existing = await this.prisma.objetMission.findUnique({
      where: { libelle: data.libelle },
    });
    if (existing) {
      throw new ConflictException(`Cet objet de mission "${data.libelle}" existe déjà`);
    }
    return this.prisma.objetMission.create({ data });
  }

  async update(id: number, data: { libelle?: string; actif?: boolean }) {
    await this.findOne(id);
    if (data.libelle) {
      const existing = await this.prisma.objetMission.findFirst({
        where: { libelle: data.libelle, NOT: { id } },
      });
      if (existing) {
        throw new ConflictException(`Cet objet de mission "${data.libelle}" existe déjà`);
      }
    }
    return this.prisma.objetMission.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    try {
      return await this.prisma.objetMission.delete({
        where: { id },
      });
    } catch (error) {
      throw new ConflictException(
        `Impossible de supprimer cet objet car il est lié à des ordres de mission.`,
      );
    }
  }
}
