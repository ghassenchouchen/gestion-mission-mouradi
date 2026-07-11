import { EmployeService } from './employe.service';
export declare class EmployeController {
    private readonly employeService;
    constructor(employeService: EmployeService);
    findAll(): Promise<{
        id: number;
        nom: string;
        prenom: string;
        mle: string;
        actif: boolean;
        fonction: string;
        hotelAffectation: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        nom: string;
        prenom: string;
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
        id: number;
        nom: string;
        prenom: string;
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
        id: number;
        nom: string;
        prenom: string;
        mle: string;
        actif: boolean;
        fonction: string;
        hotelAffectation: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        nom: string;
        prenom: string;
        mle: string;
        actif: boolean;
        fonction: string;
        hotelAffectation: string;
    }>;
}
