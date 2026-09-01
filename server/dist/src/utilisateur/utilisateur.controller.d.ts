import { UtilisateurService } from './utilisateur.service';
export declare class UtilisateurController {
    private readonly utilisateurService;
    constructor(utilisateurService: UtilisateurService);
    findAll(): Promise<{
        id: number;
        nom: string | null;
        createdAt: Date;
        email: string;
        prenom: string | null;
        role: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        nom: string | null;
        createdAt: Date;
        email: string;
        prenom: string | null;
        role: string;
    }>;
    create(body: {
        email: string;
        password?: string;
        nom: string;
        prenom: string;
        role: string;
    }): Promise<{
        id: number;
        nom: string | null;
        createdAt: Date;
        email: string;
        prenom: string | null;
        role: string;
    }>;
    update(id: number, body: {
        email?: string;
        password?: string;
        nom?: string;
        prenom?: string;
        role?: string;
    }): Promise<{
        id: number;
        nom: string | null;
        createdAt: Date;
        email: string;
        prenom: string | null;
        role: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        nom: string | null;
        createdAt: Date;
        email: string;
        passwordHash: string;
        prenom: string | null;
        role: string;
    }>;
}
