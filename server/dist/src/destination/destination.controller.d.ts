import { DestinationService } from './destination.service';
export declare class DestinationController {
    private readonly destinationService;
    constructor(destinationService: DestinationService);
    findAll(): Promise<{
        nom: string;
        id: number;
        ville: string;
    }[]>;
    findOne(id: number): Promise<{
        nom: string;
        id: number;
        ville: string;
    }>;
    create(body: {
        nom: string;
        ville: string;
    }): Promise<{
        nom: string;
        id: number;
        ville: string;
    }>;
    update(id: number, body: {
        nom?: string;
        ville?: string;
    }): Promise<{
        nom: string;
        id: number;
        ville: string;
    }>;
    remove(id: number): Promise<{
        nom: string;
        id: number;
        ville: string;
    }>;
}
