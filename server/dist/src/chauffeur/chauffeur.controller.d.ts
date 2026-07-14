import { ChauffeurService } from './chauffeur.service';
export declare class ChauffeurController {
    private readonly chauffeurService;
    constructor(chauffeurService: ChauffeurService);
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
    create(body: {
        mle: string;
        nom: string;
        prenom: string;
        telephone?: string;
    }): Promise<{
        nom: string;
        prenom: string;
        id: number;
        disponible: boolean;
        mle: string | null;
        telephone: string | null;
        vehiculeParDefautId: number | null;
    }>;
    update(id: number, body: {
        mle?: string;
        nom?: string;
        prenom?: string;
        telephone?: string;
        disponible?: boolean;
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
