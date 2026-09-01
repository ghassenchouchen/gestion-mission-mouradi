import { PrismaService } from '../prisma.service';
export declare class ChauffeurService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
        etablissement: {
            id: number;
            code: string;
            nom: string;
            ville: string;
            adresse: string | null;
            actif: boolean;
            createdAt: Date;
        } | null;
        vehiculeParDefaut: {
            id: number;
            immatriculation: string;
            marque: string;
            modele: string;
            type: string;
            disponible: boolean;
        } | null;
    } & {
        id: number;
        nom: string;
        prenom: string;
        disponible: boolean;
        mle: string | null;
        vehiculeParDefautId: number | null;
        telephone: string | null;
        etablissementId: number | null;
    })[]>;
    findOne(id: number): Promise<{
        etablissement: {
            id: number;
            code: string;
            nom: string;
            ville: string;
            adresse: string | null;
            actif: boolean;
            createdAt: Date;
        } | null;
        vehiculeParDefaut: {
            id: number;
            immatriculation: string;
            marque: string;
            modele: string;
            type: string;
            disponible: boolean;
        } | null;
    } & {
        id: number;
        nom: string;
        prenom: string;
        disponible: boolean;
        mle: string | null;
        vehiculeParDefautId: number | null;
        telephone: string | null;
        etablissementId: number | null;
    }>;
    create(data: {
        mle?: string;
        nom: string;
        prenom: string;
        telephone?: string;
        vehiculeParDefautId?: number;
        etablissementId?: number;
    }): Promise<{
        etablissement: {
            id: number;
            code: string;
            nom: string;
            ville: string;
            adresse: string | null;
            actif: boolean;
            createdAt: Date;
        } | null;
        vehiculeParDefaut: {
            id: number;
            immatriculation: string;
            marque: string;
            modele: string;
            type: string;
            disponible: boolean;
        } | null;
    } & {
        id: number;
        nom: string;
        prenom: string;
        disponible: boolean;
        mle: string | null;
        vehiculeParDefautId: number | null;
        telephone: string | null;
        etablissementId: number | null;
    }>;
    update(id: number, data: {
        mle?: string;
        nom?: string;
        prenom?: string;
        telephone?: string;
        disponible?: boolean;
        vehiculeParDefautId?: number | null;
        etablissementId?: number | null;
    }): Promise<{
        etablissement: {
            id: number;
            code: string;
            nom: string;
            ville: string;
            adresse: string | null;
            actif: boolean;
            createdAt: Date;
        } | null;
        vehiculeParDefaut: {
            id: number;
            immatriculation: string;
            marque: string;
            modele: string;
            type: string;
            disponible: boolean;
        } | null;
    } & {
        id: number;
        nom: string;
        prenom: string;
        disponible: boolean;
        mle: string | null;
        vehiculeParDefautId: number | null;
        telephone: string | null;
        etablissementId: number | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        nom: string;
        prenom: string;
        disponible: boolean;
        mle: string | null;
        vehiculeParDefautId: number | null;
        telephone: string | null;
        etablissementId: number | null;
    }>;
}
