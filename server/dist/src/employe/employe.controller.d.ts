import { EmployeService } from './employe.service';
export declare class EmployeController {
    private readonly employeService;
    constructor(employeService: EmployeService);
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
    create(body: {
        mle: string;
        nom: string;
        prenom: string;
        fonction: string;
        hotelAffectation: string;
    }): Promise<{
        nom: string;
        actif: boolean;
        id: number;
        prenom: string;
        mle: string | null;
        fonction: string | null;
        hotelAffectation: string;
    }>;
    update(id: number, body: {
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
