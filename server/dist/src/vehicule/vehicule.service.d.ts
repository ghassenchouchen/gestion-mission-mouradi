import { PrismaService } from '../prisma.service';
export declare class VehiculeService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        disponible: boolean;
        immatriculation: string;
        marque: string;
        modele: string;
        type: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        disponible: boolean;
        immatriculation: string;
        marque: string;
        modele: string;
        type: string;
    }>;
    create(data: {
        immatriculation: string;
        marque: string;
        modele: string;
        type: string;
    }): Promise<{
        id: number;
        disponible: boolean;
        immatriculation: string;
        marque: string;
        modele: string;
        type: string;
    }>;
    update(id: number, data: {
        immatriculation?: string;
        marque?: string;
        modele?: string;
        type?: string;
        disponible?: boolean;
    }): Promise<{
        id: number;
        disponible: boolean;
        immatriculation: string;
        marque: string;
        modele: string;
        type: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        disponible: boolean;
        immatriculation: string;
        marque: string;
        modele: string;
        type: string;
    }>;
}
