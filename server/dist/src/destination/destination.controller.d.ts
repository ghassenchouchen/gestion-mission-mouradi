import { DestinationService } from './destination.service';
export declare class DestinationController {
    private readonly destinationService;
    constructor(destinationService: DestinationService);
    findAll(): Promise<{
        nom: string;
        ville: string;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        nom: string;
        ville: string;
        id: number;
    }>;
    create(body: {
        nom: string;
        ville: string;
    }): Promise<{
        nom: string;
        ville: string;
        id: number;
    }>;
    update(id: number, body: {
        nom?: string;
        ville?: string;
    }): Promise<{
        nom: string;
        ville: string;
        id: number;
    }>;
    remove(id: number): Promise<{
        nom: string;
        ville: string;
        id: number;
    }>;
}
