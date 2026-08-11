import { EtablissementService } from './etablissement.service';
export declare class EtablissementController {
    private readonly service;
    constructor(service: EtablissementService);
    findAll(): Promise<{
        code: string;
        nom: string;
        ville: string;
        adresse: string | null;
        actif: boolean;
        createdAt: Date;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        chauffeurs: {
            nom: string;
            id: number;
            prenom: string;
            disponible: boolean;
            mle: string | null;
            telephone: string | null;
            vehiculeParDefautId: number | null;
            etablissementId: number | null;
        }[];
    } & {
        code: string;
        nom: string;
        ville: string;
        adresse: string | null;
        actif: boolean;
        createdAt: Date;
        id: number;
    }>;
    create(body: {
        code: string;
        nom: string;
        ville: string;
        adresse?: string;
        actif?: boolean;
    }): Promise<{
        code: string;
        nom: string;
        ville: string;
        adresse: string | null;
        actif: boolean;
        createdAt: Date;
        id: number;
    }>;
    update(id: number, body: {
        code?: string;
        nom?: string;
        ville?: string;
        adresse?: string;
        actif?: boolean;
    }): Promise<{
        code: string;
        nom: string;
        ville: string;
        adresse: string | null;
        actif: boolean;
        createdAt: Date;
        id: number;
    }>;
    remove(id: number): Promise<{
        code: string;
        nom: string;
        ville: string;
        adresse: string | null;
        actif: boolean;
        createdAt: Date;
        id: number;
    }>;
}
