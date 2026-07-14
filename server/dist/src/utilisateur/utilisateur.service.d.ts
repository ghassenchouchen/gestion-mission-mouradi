import { PrismaService } from '../prisma.service';
export declare class UtilisateurService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        email: string;
        nom: string;
        prenom: string;
        role: string;
        createdAt: Date;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        email: string;
        nom: string;
        prenom: string;
        role: string;
        createdAt: Date;
        id: number;
    }>;
    create(data: {
        email: string;
        password?: string;
        nom: string;
        prenom: string;
        role: string;
    }): Promise<{
        email: string;
        nom: string;
        prenom: string;
        role: string;
        createdAt: Date;
        id: number;
    }>;
    update(id: number, data: {
        email?: string;
        password?: string;
        nom?: string;
        prenom?: string;
        role?: string;
    }): Promise<{
        email: string;
        nom: string;
        prenom: string;
        role: string;
        createdAt: Date;
        id: number;
    }>;
    remove(id: number): Promise<{
        email: string;
        passwordHash: string;
        nom: string;
        prenom: string;
        role: string;
        createdAt: Date;
        id: number;
    }>;
}
