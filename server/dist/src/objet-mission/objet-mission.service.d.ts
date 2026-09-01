import { PrismaService } from '../prisma.service';
export declare class ObjetMissionService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        actif: boolean;
        libelle: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        actif: boolean;
        libelle: string;
    }>;
    create(data: {
        libelle: string;
    }): Promise<{
        id: number;
        actif: boolean;
        libelle: string;
    }>;
    update(id: number, data: {
        libelle?: string;
        actif?: boolean;
    }): Promise<{
        id: number;
        actif: boolean;
        libelle: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        actif: boolean;
        libelle: string;
    }>;
}
