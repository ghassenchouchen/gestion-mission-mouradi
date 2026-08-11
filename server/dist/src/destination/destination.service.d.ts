import { PrismaService } from '../prisma.service';
export declare class DestinationService {
    private prisma;
    constructor(prisma: PrismaService);
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
    create(data: {
        nom: string;
        ville: string;
    }): Promise<{
        nom: string;
        ville: string;
        id: number;
    }>;
    update(id: number, data: {
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
