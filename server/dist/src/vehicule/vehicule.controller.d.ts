import { VehiculeService } from './vehicule.service';
export declare class VehiculeController {
    private readonly vehiculeService;
    constructor(vehiculeService: VehiculeService);
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
    create(body: {
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
    update(id: number, body: {
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
