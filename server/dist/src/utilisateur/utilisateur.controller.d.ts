import { UtilisateurService } from './utilisateur.service';
export declare class UtilisateurController {
    private readonly utilisateurService;
    constructor(utilisateurService: UtilisateurService);
    findAll(): Promise<{
        email: string;
        nom: string;
        prenom: string;
        role: string;
        createdAt: Date;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        email: string;
        nom: string;
        prenom: string;
        role: string;
        createdAt: Date;
        id: number;
    }>;
    create(body: {
        email: string;
        password?: string;
        nom: string;
        prenom: string;
        role: string;
    }): Promise<{
        email: string;
        nom: string;
        prenom: string;
        role: string;
        createdAt: Date;
        id: number;
    }>;
    update(id: number, body: {
        email?: string;
        password?: string;
        nom?: string;
        prenom?: string;
        role?: string;
    }): Promise<{
        email: string;
        nom: string;
        prenom: string;
        role: string;
        createdAt: Date;
        id: number;
    }>;
    remove(id: number): Promise<{
        email: string;
        passwordHash: string;
        nom: string;
        prenom: string;
        role: string;
        createdAt: Date;
        id: number;
    }>;
}
