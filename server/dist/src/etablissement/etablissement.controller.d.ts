import { EtablissementService } from './etablissement.service';
export declare class EtablissementController {
    private readonly service;
    constructor(service: EtablissementService);
    findAll(): Promise<{
        id: number;
        code: string;
        nom: string;
        ville: string;
        adresse: string | null;
        actif: boolean;
        createdAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        chauffeurs: {
            id: number;
            nom: string;
            prenom: string;
            disponible: boolean;
            mle: string | null;
            vehiculeParDefautId: number | null;
            telephone: string | null;
            etablissementId: number | null;
        }[];
    } & {
        id: number;
        code: string;
        nom: string;
        ville: string;
        adresse: string | null;
        actif: boolean;
        createdAt: Date;
    }>;
    create(body: {
        code: string;
        nom: string;
        ville: string;
        adresse?: string;
        actif?: boolean;
    }): Promise<{
        id: number;
        code: string;
        nom: string;
        ville: string;
        adresse: string | null;
        actif: boolean;
        createdAt: Date;
    }>;
    update(id: number, body: {
        code?: string;
        nom?: string;
        ville?: string;
        adresse?: string;
        actif?: boolean;
    }): Promise<{
        id: number;
        code: string;
        nom: string;
        ville: string;
        adresse: string | null;
        actif: boolean;
        createdAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        code: string;
        nom: string;
        ville: string;
        adresse: string | null;
        actif: boolean;
        createdAt: Date;
    }>;
}
