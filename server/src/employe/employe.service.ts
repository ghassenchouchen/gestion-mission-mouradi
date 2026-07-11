import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class EmployeService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.employe.findMany({
      orderBy: { nom: 'asc' },
    });
  }

  async findOne(id: number) {
    const employe = await this.prisma.employe.findUnique({
      where: { id },
    });
    if (!employe) {
      throw new NotFoundException(`Employé avec ID ${id} introuvable`);
    }
    return employe;
  }

  async create(data: { mle: string; nom: string; prenom: string; fonction: string; hotelAffectation: string }) {
    const existing = await this.prisma.employe.findUnique({
      where: { mle: data.mle },
    });
    if (existing) {
      throw new ConflictException(`Un employé avec le matricule ${data.mle} existe déjà`);
    }
    return this.prisma.employe.create({ data });
  }

  async update(
    id: number,
    data: {
      mle?: string;
      nom?: string;
      prenom?: string;
      fonction?: string;
      hotelAffectation?: string;
      actif?: boolean;
    },
  ) {
    await this.findOne(id);
    if (data.mle) {
      const existing = await this.prisma.employe.findFirst({
        where: { mle: data.mle, NOT: { id } },
      });
      if (existing) {
        throw new ConflictException(`Un employé avec le matricule ${data.mle} existe déjà`);
      }
    }
    return this.prisma.employe.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    try {
      return await this.prisma.employe.delete({
        where: { id },
      });
    } catch (error) {
      throw new ConflictException(
        `Impossible de supprimer cet employé car il est lié à des ordres de mission (en tant que demandeur ou accompagnateur).`,
      );
    }
  }
}
