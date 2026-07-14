import { PrismaService } from '../prisma.service';
export declare class ChauffeurService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
        vehiculeParDefaut: {
            id: number;
            immatriculation: string;
            marque: string;
            modele: string;
            type: string;
            disponible: boolean;
        } | null;
    } & {
        nom: string;
        prenom: string;
        id: number;
        disponible: boolean;
        mle: string | null;
        telephone: string | null;
        vehiculeParDefautId: number | null;
    })[]>;
    findOne(id: number): Promise<{
        vehiculeParDefaut: {
            id: number;
            immatriculation: string;
            marque: string;
            modele: string;
            type: string;
            disponible: boolean;
        } | null;
    } & {
        nom: string;
        prenom: string;
        id: number;
        disponible: boolean;
        mle: string | null;
        telephone: string | null;
        vehiculeParDefautId: number | null;
    }>;
    create(data: {
        mle?: string;
        nom: string;
        prenom: string;
        telephone?: string;
        vehiculeParDefautId?: number;
    }): Promise<{
        nom: string;
        prenom: string;
        id: number;
        disponible: boolean;
        mle: string | null;
        telephone: string | null;
        vehiculeParDefautId: number | null;
    }>;
    update(id: number, data: {
        mle?: string;
        nom?: string;
        prenom?: string;
        telephone?: string;
        disponible?: boolean;
        vehiculeParDefautId?: number | null;
    }): Promise<{
        nom: string;
        prenom: string;
        id: number;
        disponible: boolean;
        mle: string | null;
        telephone: string | null;
        vehiculeParDefautId: number | null;
    }>;
    remove(id: number): Promise<{
        nom: string;
        prenom: string;
        id: number;
        disponible: boolean;
        mle: string | null;
        telephone: string | null;
        vehiculeParDefautId: number | null;
    }>;
}
