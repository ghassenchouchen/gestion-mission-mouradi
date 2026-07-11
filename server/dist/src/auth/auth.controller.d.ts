import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(body: any): Promise<{
        access_token: string;
        user: {
            id: any;
            email: any;
            nom: any;
            prenom: any;
            role: any;
        };
    }>;
    getProfile(user: any): any;
}
