import { PrismaService } from '../prisma.service';
export declare class DestinationService {
    private prisma;
    constructor(prisma: PrismaService);
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
    create(data: {
        nom: string;
        ville: string;
    }): Promise<{
        id: number;
        nom: string;
        ville: string;
    }>;
    update(id: number, data: {
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
