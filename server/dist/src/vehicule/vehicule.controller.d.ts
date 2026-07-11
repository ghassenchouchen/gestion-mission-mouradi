import { VehiculeService } from './vehicule.service';
export declare class VehiculeController {
    private readonly vehiculeService;
    constructor(vehiculeService: VehiculeService);
    findAll(): Promise<{
        id: number;
        disponible: boolean;
        immatriculation: string;
        marque: string;
        modele: string;
        type: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        disponible: boolean;
        immatriculation: string;
        marque: string;
        modele: string;
        type: string;
    }>;
    create(body: {
        immatriculation: string;
        marque: string;
        modele: string;
        type: string;
    }): Promise<{
        id: number;
        disponible: boolean;
        immatriculation: string;
        marque: string;
        modele: string;
        type: string;
    }>;
    update(id: number, body: {
        immatriculation?: string;
        marque?: string;
        modele?: string;
        type?: string;
        disponible?: boolean;
    }): Promise<{
        id: number;
        disponible: boolean;
        immatriculation: string;
        marque: string;
        modele: string;
        type: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        disponible: boolean;
        immatriculation: string;
        marque: string;
        modele: string;
        type: string;
    }>;
}
