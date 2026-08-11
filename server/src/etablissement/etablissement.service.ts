import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class EtablissementService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.etablissement.findMany({
      orderBy: { nom: 'asc' },
    });
  }

  async findOne(id: number) {
    const item = await this.prisma.etablissement.findUnique({
      where: { id },
      include: {
        chauffeurs: true,
      },
    });
    if (!item) {
      throw new NotFoundException(`Établissement avec ID ${id} introuvable`);
    }
    return item;
  }

  async create(data: { code: string; nom: string; ville: string; adresse?: string; actif?: boolean }) {
    const existingCode = await this.prisma.etablissement.findUnique({
      where: { code: data.code },
    });
    if (existingCode) {
      throw new ConflictException(`Un établissement avec le code "${data.code}" existe déjà`);
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

  async update(id: number, data: { code?: string; nom?: string; ville?: string; adresse?: string; actif?: boolean }) {
    await this.findOne(id);

    if (data.code) {
      const existing = await this.prisma.etablissement.findFirst({
        where: { code: data.code, NOT: { id } },
      });
      if (existing) {
        throw new ConflictException(`Un établissement avec le code "${data.code}" existe déjà`);
      }
    }

    return this.prisma.etablissement.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    try {
      return await this.prisma.etablissement.delete({
        where: { id },
      });
    } catch (error) {
      throw new ConflictException(
        `Impossible de supprimer cet établissement car des chauffeurs y sont rattachés.`,
      );
    }
  }
}
