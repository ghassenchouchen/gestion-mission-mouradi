import { ObjetMissionService } from './objet-mission.service';
export declare class ObjetMissionController {
    private readonly objetMissionService;
    constructor(objetMissionService: ObjetMissionService);
    findAll(): Promise<{
        actif: boolean;
        id: number;
        libelle: string;
    }[]>;
    findOne(id: number): Promise<{
        actif: boolean;
        id: number;
        libelle: string;
    }>;
    create(body: {
        libelle: string;
    }): Promise<{
        actif: boolean;
        id: number;
        libelle: string;
    }>;
    update(id: number, body: {
        libelle?: string;
        actif?: boolean;
    }): Promise<{
        actif: boolean;
        id: number;
        libelle: string;
    }>;
    remove(id: number): Promise<{
        actif: boolean;
        id: number;
        libelle: string;
    }>;
}
