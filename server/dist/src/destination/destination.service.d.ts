import { PrismaService } from '../prisma.service';
export declare class DestinationService {
    private prisma;
    constructor(prisma: PrismaService);
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
    create(data: {
        nom: string;
        ville: string;
    }): Promise<{
        nom: string;
        id: number;
        ville: string;
    }>;
    update(id: number, data: {
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
