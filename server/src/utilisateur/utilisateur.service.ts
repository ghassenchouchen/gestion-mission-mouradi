import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UtilisateurService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.utilisateur.findMany({
      select: {
        id: true,
        email: true,
        nom: true,
        prenom: true,
        role: true,
        createdAt: true,
      },
      orderBy: { nom: 'asc' },
    });
  }

  async findOne(id: number) {
    const user = await this.prisma.utilisateur.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        nom: true,
        prenom: true,
        role: true,
        createdAt: true,
      },
    });
    if (!user) {
      throw new NotFoundException(`Utilisateur avec ID ${id} introuvable`);
    }
    return user;
  }

  async create(data: { email: string; password?: string; nom: string; prenom: string; role: string }) {
    const existing = await this.prisma.utilisateur.findUnique({
      where: { email: data.email },
    });
    if (existing) {
      throw new ConflictException(`Un utilisateur avec l'email ${data.email} existe déjà`);
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(data.password || 'Mouradi2026!', salt);

    const { password, ...rest } = data;

    return this.prisma.utilisateur.create({
      data: {
        ...rest,
        passwordHash,
      },
      select: {
        id: true,
        email: true,
        nom: true,
        prenom: true,
        role: true,
        createdAt: true,
      },
    });
  }

  async update(id: number, data: { email?: string; password?: string; nom?: string; prenom?: string; role?: string }) {
    const user = await this.prisma.utilisateur.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException(`Utilisateur avec ID ${id} introuvable`);
    }

    if (data.email) {
      const existing = await this.prisma.utilisateur.findFirst({
        where: { email: data.email, NOT: { id } },
      });
      if (existing) {
        throw new ConflictException(`Un utilisateur avec l'email ${data.email} existe déjà`);
      }
    }

    const updateData: any = { ...data };
    delete updateData.password;

    if (data.password) {
      const salt = await bcrypt.genSalt(10);
      updateData.passwordHash = await bcrypt.hash(data.password, salt);
    }

    return this.prisma.utilisateur.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        email: true,
        nom: true,
        prenom: true,
        role: true,
        createdAt: true,
      },
    });
  }

  async remove(id: number) {
    const user = await this.prisma.utilisateur.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException(`Utilisateur avec ID ${id} introuvable`);
    }

    // Don't allow deleting the last ADMIN user
    if (user.role === 'ADMIN') {
      const adminCount = await this.prisma.utilisateur.count({
        where: { role: 'ADMIN' },
      });
      if (adminCount <= 1) {
        throw new ConflictException("Impossible de supprimer le dernier administrateur.");
      }
    }

    return this.prisma.utilisateur.delete({
      where: { id },
    });
  }
}
