import { PrismaService } from '../prisma.service';
export declare class VehiculeService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        immatriculation: string;
        marque: string;
        modele: string;
        type: string;
        disponible: boolean;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        immatriculation: string;
        marque: string;
        modele: string;
        type: string;
        disponible: boolean;
    }>;
    create(data: {
        immatriculation: string;
        marque: string;
        modele?: string;
        type: string;
    }): Promise<{
        id: number;
        immatriculation: string;
        marque: string;
        modele: string;
        type: string;
        disponible: boolean;
    }>;
    update(id: number, data: {
        immatriculation?: string;
        marque?: string;
        modele?: string;
        type?: string;
        disponible?: boolean;
    }): Promise<{
        id: number;
        immatriculation: string;
        marque: string;
        modele: string;
        type: string;
        disponible: boolean;
    }>;
    remove(id: number): Promise<{
        id: number;
        immatriculation: string;
        marque: string;
        modele: string;
        type: string;
        disponible: boolean;
    }>;
}
