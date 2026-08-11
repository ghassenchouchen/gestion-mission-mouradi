import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ChauffeurService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.chauffeur.findMany({
      orderBy: { nom: 'asc' },
      include: { vehiculeParDefaut: true, etablissement: true },
    });
  }

  async findOne(id: number) {
    const chauffeur = await this.prisma.chauffeur.findUnique({
      where: { id },
      include: { vehiculeParDefaut: true, etablissement: true },
    });
    if (!chauffeur) {
      throw new NotFoundException(`Chauffeur avec ID ${id} introuvable`);
    }
    return chauffeur;
  }

  async create(data: { mle?: string; nom: string; prenom: string; telephone?: string; vehiculeParDefautId?: number; etablissementId?: number }) {
    if (data.mle) {
      const existing = await this.prisma.chauffeur.findUnique({
        where: { mle: data.mle },
      });
      if (existing) {
        throw new ConflictException(`Un chauffeur avec le matricule ${data.mle} existe déjà`);
      }
    }
    return this.prisma.chauffeur.create({
      data,
      include: { vehiculeParDefaut: true, etablissement: true },
    });
  }

  async update(id: number, data: { mle?: string; nom?: string; prenom?: string; telephone?: string; disponible?: boolean; vehiculeParDefautId?: number | null; etablissementId?: number | null }) {
    await this.findOne(id);
    if (data.mle) {
      const existing = await this.prisma.chauffeur.findFirst({
        where: { mle: data.mle, NOT: { id } },
      });
      if (existing) {
        throw new ConflictException(`Un chauffeur avec le matricule ${data.mle} existe déjà`);
      }
    }
    return this.prisma.chauffeur.update({
      where: { id },
      data,
      include: { vehiculeParDefaut: true, etablissement: true },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    try {
      return await this.prisma.chauffeur.delete({
        where: { id },
      });
    } catch (error) {
      throw new ConflictException(
        `Impossible de supprimer le chauffeur car il est lié à des ordres de mission.`,
      );
    }
  }
}
