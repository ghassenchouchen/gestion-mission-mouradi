import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class VehiculeService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.vehicule.findMany({
      orderBy: { immatriculation: 'asc' },
    });
  }

  async findOne(id: number) {
    const vehicule = await this.prisma.vehicule.findUnique({
      where: { id },
    });
    if (!vehicule) {
      throw new NotFoundException(`Véhicule avec ID ${id} introuvable`);
    }
    return vehicule;
  }

  async create(data: { immatriculation: string; marque: string; modele?: string; type: string }) {
    const existing = await this.prisma.vehicule.findUnique({
      where: { immatriculation: data.immatriculation },
    });
    if (existing) {
      throw new ConflictException(
        `Un véhicule avec l'immatriculation ${data.immatriculation} existe déjà`,
      );
    }
    return this.prisma.vehicule.create({
      data: {
        ...data,
        modele: data.modele || '',
      },
    });
  }

  async update(
    id: number,
    data: {
      immatriculation?: string;
      marque?: string;
      modele?: string;
      type?: string;
      disponible?: boolean;
    },
  ) {
    await this.findOne(id);
    if (data.immatriculation) {
      const existing = await this.prisma.vehicule.findFirst({
        where: { immatriculation: data.immatriculation, NOT: { id } },
      });
      if (existing) {
        throw new ConflictException(
          `Un véhicule avec l'immatriculation ${data.immatriculation} existe déjà`,
        );
      }
    }
    return this.prisma.vehicule.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    try {
      return await this.prisma.vehicule.delete({
        where: { id },
      });
    } catch (error) {
      throw new ConflictException(
        `Impossible de supprimer le véhicule car il est lié à des ordres de mission.`,
      );
    }
  }
}
