import { PrismaService } from '../prisma.service';
export declare class EmployeService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        nom: string;
        prenom: string;
        id: number;
        mle: string;
        actif: boolean;
        fonction: string;
        hotelAffectation: string;
    }[]>;
    findOne(id: number): Promise<{
        nom: string;
        prenom: string;
        id: number;
        mle: string;
        actif: boolean;
        fonction: string;
        hotelAffectation: string;
    }>;
    create(data: {
        mle: string;
        nom: string;
        prenom: string;
        fonction: string;
        hotelAffectation: string;
    }): Promise<{
        nom: string;
        prenom: string;
        id: number;
        mle: string;
        actif: boolean;
        fonction: string;
        hotelAffectation: string;
    }>;
    update(id: number, data: {
        mle?: string;
        nom?: string;
        prenom?: string;
        fonction?: string;
        hotelAffectation?: string;
        actif?: boolean;
    }): Promise<{
        nom: string;
        prenom: string;
        id: number;
        mle: string;
        actif: boolean;
        fonction: string;
        hotelAffectation: string;
    }>;
    remove(id: number): Promise<{
        nom: string;
        prenom: string;
        id: number;
        mle: string;
        actif: boolean;
        fonction: string;
        hotelAffectation: string;
    }>;
}
