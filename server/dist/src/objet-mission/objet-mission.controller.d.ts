import { ObjetMissionService } from './objet-mission.service';
export declare class ObjetMissionController {
    private readonly objetMissionService;
    constructor(objetMissionService: ObjetMissionService);
    findAll(): Promise<{
        id: number;
        actif: boolean;
        libelle: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        actif: boolean;
        libelle: string;
    }>;
    create(body: {
        libelle: string;
    }): Promise<{
        id: number;
        actif: boolean;
        libelle: string;
    }>;
    update(id: number, body: {
        libelle?: string;
        actif?: boolean;
    }): Promise<{
        id: number;
        actif: boolean;
        libelle: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        actif: boolean;
        libelle: string;
    }>;
}
