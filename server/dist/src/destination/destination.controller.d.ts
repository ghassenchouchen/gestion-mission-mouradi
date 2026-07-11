import { DestinationService } from './destination.service';
export declare class DestinationController {
    private readonly destinationService;
    constructor(destinationService: DestinationService);
    findAll(): Promise<{
        id: number;
        nom: string;
        ville: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        nom: string;
        ville: string;
    }>;
    create(body: {
        nom: string;
        ville: string;
    }): Promise<{
        id: number;
        nom: string;
        ville: string;
    }>;
    update(id: number, body: {
        nom?: string;
        ville?: string;
    }): Promise<{
        id: number;
        nom: string;
        ville: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        nom: string;
        ville: string;
    }>;
}
