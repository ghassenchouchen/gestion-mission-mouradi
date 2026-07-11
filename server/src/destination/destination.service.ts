import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class DestinationService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.destination.findMany({
      orderBy: { nom: 'asc' },
    });
  }

  async findOne(id: number) {
    const destination = await this.prisma.destination.findUnique({
      where: { id },
    });
    if (!destination) {
      throw new NotFoundException(`Destination avec ID ${id} introuvable`);
    }
    return destination;
  }

  async create(data: { nom: string; ville: string }) {
    const existing = await this.prisma.destination.findUnique({
      where: { nom: data.nom },
    });
    if (existing) {
      throw new ConflictException(`Une destination nommée "${data.nom}" existe déjà`);
    }
    return this.prisma.destination.create({ data });
  }

  async update(id: number, data: { nom?: string; ville?: string }) {
    await this.findOne(id);
    if (data.nom) {
      const existing = await this.prisma.destination.findFirst({
        where: { nom: data.nom, NOT: { id } },
      });
      if (existing) {
        throw new ConflictException(`Une destination nommée "${data.nom}" existe déjà`);
      }
    }
    return this.prisma.destination.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    try {
      return await this.prisma.destination.delete({
        where: { id },
      });
    } catch (error) {
      throw new ConflictException(
        `Impossible de supprimer cette destination car elle est liée à des ordres de mission.`,
      );
    }
  }
}
