import { PrismaService } from '../prisma.service';
export declare class EmployeService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        nom: string;
        actif: boolean;
        id: number;
        prenom: string;
        mle: string | null;
        fonction: string | null;
        hotelAffectation: string;
    }[]>;
    findOne(id: number): Promise<{
        nom: string;
        actif: boolean;
        id: number;
        prenom: string;
        mle: string | null;
        fonction: string | null;
        hotelAffectation: string;
    }>;
    create(data: {
        mle?: string;
        nom: string;
        prenom: string;
        fonction?: string;
        hotelAffectation?: string;
    }): Promise<{
        nom: string;
        actif: boolean;
        id: number;
        prenom: string;
        mle: string | null;
        fonction: string | null;
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
        actif: boolean;
        id: number;
        prenom: string;
        mle: string | null;
        fonction: string | null;
        hotelAffectation: string;
    }>;
    remove(id: number): Promise<{
        nom: string;
        actif: boolean;
        id: number;
        prenom: string;
        mle: string | null;
        fonction: string | null;
        hotelAffectation: string;
    }>;
}
