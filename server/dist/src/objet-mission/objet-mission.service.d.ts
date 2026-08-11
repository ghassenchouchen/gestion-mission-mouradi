import { PrismaService } from '../prisma.service';
export declare class ObjetMissionService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        actif: boolean;
        id: number;
        libelle: string;
    }[]>;
    findOne(id: number): Promise<{
        actif: boolean;
        id: number;
        libelle: string;
    }>;
    create(data: {
        libelle: string;
    }): Promise<{
        actif: boolean;
        id: number;
        libelle: string;
    }>;
    update(id: number, data: {
        libelle?: string;
        actif?: boolean;
    }): Promise<{
        actif: boolean;
        id: number;
        libelle: string;
    }>;
    remove(id: number): Promise<{
        actif: boolean;
        id: number;
        libelle: string;
    }>;
}
