import { PrismaService } from '../prisma.service';
export declare class ChauffeurService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        nom: string;
        prenom: string;
        mle: string;
        telephone: string | null;
        disponible: boolean;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        nom: string;
        prenom: string;
        mle: string;
        telephone: string | null;
        disponible: boolean;
    }>;
    create(data: {
        mle: string;
        nom: string;
        prenom: string;
        telephone?: string;
    }): Promise<{
        id: number;
        nom: string;
        prenom: string;
        mle: string;
        telephone: string | null;
        disponible: boolean;
    }>;
    update(id: number, data: {
        mle?: string;
        nom?: string;
        prenom?: string;
        telephone?: string;
        disponible?: boolean;
    }): Promise<{
        id: number;
        nom: string;
        prenom: string;
        mle: string;
        telephone: string | null;
        disponible: boolean;
    }>;
    remove(id: number): Promise<{
        id: number;
        nom: string;
        prenom: string;
        mle: string;
        telephone: string | null;
        disponible: boolean;
    }>;
}
