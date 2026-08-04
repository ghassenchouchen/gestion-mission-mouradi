export declare class MailService {
    private readonly logger;
    private transporter;
    constructor();
    sendWelcomeEmail(user: {
        email: string;
        nom?: string | null;
        prenom?: string | null;
        role: string;
    }): Promise<boolean>;
}
