import { ObjetMissionService } from './objet-mission.service';
export declare class ObjetMissionController {
    private readonly objetMissionService;
    constructor(objetMissionService: ObjetMissionService);
    findAll(): Promise<{
        id: number;
        libelle: string;
        actif: boolean;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        libelle: string;
        actif: boolean;
    }>;
    create(body: {
        libelle: string;
    }): Promise<{
        id: number;
        libelle: string;
        actif: boolean;
    }>;
    update(id: number, body: {
        libelle?: string;
        actif?: boolean;
    }): Promise<{
        id: number;
        libelle: string;
        actif: boolean;
    }>;
    remove(id: number): Promise<{
        id: number;
        libelle: string;
        actif: boolean;
    }>;
}
