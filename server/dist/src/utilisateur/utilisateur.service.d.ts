import { PrismaService } from '../prisma.service';
import { MailService } from '../mail/mail.service';
export declare class UtilisateurService {
    private prisma;
    private mailService;
    constructor(prisma: PrismaService, mailService: MailService);
    findAll(): Promise<{
        id: number;
        nom: string | null;
        createdAt: Date;
        email: string;
        prenom: string | null;
        role: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        nom: string | null;
        createdAt: Date;
        email: string;
        prenom: string | null;
        role: string;
    }>;
    create(data: {
        email: string;
        password?: string;
        nom: string;
        prenom: string;
        role: string;
    }): Promise<{
        id: number;
        nom: string | null;
        createdAt: Date;
        email: string;
        prenom: string | null;
        role: string;
    }>;
    update(id: number, data: {
        email?: string;
        password?: string;
        nom?: string;
        prenom?: string;
        role?: string;
    }): Promise<{
        id: number;
        nom: string | null;
        createdAt: Date;
        email: string;
        prenom: string | null;
        role: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        nom: string | null;
        createdAt: Date;
        email: string;
        passwordHash: string;
        prenom: string | null;
        role: string;
    }>;
}
