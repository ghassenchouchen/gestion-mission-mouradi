import { PrismaService } from '../prisma.service';
export declare class ObjetMissionService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        libelle: string;
        actif: boolean;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        libelle: string;
        actif: boolean;
    }>;
    create(data: {
        libelle: string;
    }): Promise<{
        id: number;
        libelle: string;
        actif: boolean;
    }>;
    update(id: number, data: {
        libelle?: string;
        actif?: boolean;
    }): Promise<{
        id: number;
        libelle: string;
        actif: boolean;
    }>;
    remove(id: number): Promise<{
        id: number;
        libelle: string;
        actif: boolean;
    }>;
}
