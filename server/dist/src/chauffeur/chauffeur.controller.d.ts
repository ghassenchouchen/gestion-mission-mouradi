import { ChauffeurService } from './chauffeur.service';
export declare class ChauffeurController {
    private readonly chauffeurService;
    constructor(chauffeurService: ChauffeurService);
    findAll(): Promise<({
        etablissement: {
            code: string;
            nom: string;
            ville: string;
            adresse: string | null;
            actif: boolean;
            createdAt: Date;
            id: number;
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
        nom: string;
        id: number;
        prenom: string;
        disponible: boolean;
        mle: string | null;
        telephone: string | null;
        vehiculeParDefautId: number | null;
        etablissementId: number | null;
    })[]>;
    findOne(id: number): Promise<{
        etablissement: {
            code: string;
            nom: string;
            ville: string;
            adresse: string | null;
            actif: boolean;
            createdAt: Date;
            id: number;
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
        nom: string;
        id: number;
        prenom: string;
        disponible: boolean;
        mle: string | null;
        telephone: string | null;
        vehiculeParDefautId: number | null;
        etablissementId: number | null;
    }>;
    create(body: {
        mle: string;
        nom: string;
        prenom: string;
        telephone?: string;
        vehiculeParDefautId?: number;
        etablissementId?: number;
    }): Promise<{
        etablissement: {
            code: string;
            nom: string;
            ville: string;
            adresse: string | null;
            actif: boolean;
            createdAt: Date;
            id: number;
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
        nom: string;
        id: number;
        prenom: string;
        disponible: boolean;
        mle: string | null;
        telephone: string | null;
        vehiculeParDefautId: number | null;
        etablissementId: number | null;
    }>;
    update(id: number, body: {
        mle?: string;
        nom?: string;
        prenom?: string;
        telephone?: string;
        disponible?: boolean;
        vehiculeParDefautId?: number | null;
        etablissementId?: number | null;
    }): Promise<{
        etablissement: {
            code: string;
            nom: string;
            ville: string;
            adresse: string | null;
            actif: boolean;
            createdAt: Date;
            id: number;
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
        nom: string;
        id: number;
        prenom: string;
        disponible: boolean;
        mle: string | null;
        telephone: string | null;
        vehiculeParDefautId: number | null;
        etablissementId: number | null;
    }>;
    remove(id: number): Promise<{
        nom: string;
        id: number;
        prenom: string;
        disponible: boolean;
        mle: string | null;
        telephone: string | null;
        vehiculeParDefautId: number | null;
        etablissementId: number | null;
    }>;
}
