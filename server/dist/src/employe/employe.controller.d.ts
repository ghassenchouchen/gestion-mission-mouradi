import { EmployeService } from './employe.service';
export declare class EmployeController {
    private readonly employeService;
    constructor(employeService: EmployeService);
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
    create(body: {
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
    update(id: number, body: {
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
