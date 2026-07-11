import { ChauffeurService } from './chauffeur.service';
export declare class ChauffeurController {
    private readonly chauffeurService;
    constructor(chauffeurService: ChauffeurService);
    findAll(): Promise<{
        id: number;
        nom: string;
        prenom: string;
        mle: string;
        telephone: string | null;
        disponible: boolean;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        nom: string;
        prenom: string;
        mle: string;
        telephone: string | null;
        disponible: boolean;
    }>;
    create(body: {
        mle: string;
        nom: string;
        prenom: string;
        telephone?: string;
    }): Promise<{
        id: number;
        nom: string;
        prenom: string;
        mle: string;
        telephone: string | null;
        disponible: boolean;
    }>;
    update(id: number, body: {
        mle?: string;
        nom?: string;
        prenom?: string;
        telephone?: string;
        disponible?: boolean;
    }): Promise<{
        id: number;
        nom: string;
        prenom: string;
        mle: string;
        telephone: string | null;
        disponible: boolean;
    }>;
    remove(id: number): Promise<{
        id: number;
        nom: string;
        prenom: string;
        mle: string;
        telephone: string | null;
        disponible: boolean;
    }>;
}
