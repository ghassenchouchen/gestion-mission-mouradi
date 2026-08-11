import { PrismaService } from '../prisma.service';
import { MailService } from '../mail/mail.service';
export declare class UtilisateurService {
    private prisma;
    private mailService;
    constructor(prisma: PrismaService, mailService: MailService);
    findAll(): Promise<{
        nom: string | null;
        createdAt: Date;
        id: number;
        email: string;
        prenom: string | null;
        role: string;
    }[]>;
    findOne(id: number): Promise<{
        nom: string | null;
        createdAt: Date;
        id: number;
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
        nom: string | null;
        createdAt: Date;
        id: number;
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
        nom: string | null;
        createdAt: Date;
        id: number;
        email: string;
        prenom: string | null;
        role: string;
    }>;
    remove(id: number): Promise<{
        nom: string | null;
        createdAt: Date;
        id: number;
        email: string;
        passwordHash: string;
        prenom: string | null;
        role: string;
    }>;
}
