import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  private transporter: nodemailer.Transporter;

  constructor() {
    const host = process.env.SMTP_HOST || 'ssl0.ovh.net';
    const port = parseInt(process.env.SMTP_PORT || '465', 10);
    const secure = process.env.SMTP_SECURE !== 'false';
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure, // true for port 465 SSL
      auth: user && pass ? { user, pass } : undefined,
      tls: {
        rejectUnauthorized: false, // allow corporate self-signed or custom certs if any
      },
    });
  }

  /**
   * Sends a formal Welcome & Account Activation Notice to a newly created user.
   */
  async sendWelcomeEmail(user: { email: string; nom?: string | null; prenom?: string | null; role: string }) {
    const appUrl = process.env.APP_URL || 'http://192.168.70.12:4200';
    const from = process.env.SMTP_FROM || 'Direction Générale El Mouradi <noreply@elmouradi.com>';
    const roleLabel = user.role === 'ADMIN' ? 'Administrateur' : user.role === 'HR' ? 'Ressources Humaines (RH)' : 'Utilisateur';
    const fullName = `${user.prenom || ''} ${user.nom || ''}`.trim() || user.email;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f6f9; color: #1b1f2a; margin: 0; padding: 20px; }
          .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border: 1px solid #e5e7eb; }
          .header { background-color: #1b1f2a; padding: 25px; text-align: center; border-bottom: 3px solid #8B7D3C; }
          .header h1 { color: #ffffff; font-size: 20px; margin: 0; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; }
          .header p { color: #8B7D3C; margin: 5px 0 0 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; }
          .body { padding: 30px; line-height: 1.6; }
          .greeting { font-size: 18px; font-weight: 700; color: #1b1f2a; margin-bottom: 15px; }
          .info-box { background-color: #f8fafc; border-left: 4px solid #8B7D3C; padding: 15px 20px; margin: 20px 0; border-radius: 4px; }
          .info-row { margin-bottom: 8px; font-size: 14px; }
          .info-row strong { color: #4b5563; }
          .btn-container { text-align: center; margin: 30px 0; }
          .btn { background-color: #8B7D3C; color: #ffffff !important; padding: 14px 28px; text-decoration: none; font-weight: 700; font-size: 14px; border-radius: 8px; display: inline-block; box-shadow: 0 2px 8px rgba(139, 125, 60, 0.3); }
          .footer { background-color: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; }
          .footer a { color: #8B7D3C; text-decoration: none; font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <h1>El Mouradi Hotels</h1>
            <p>Plateforme de Gestion des Ordres de Mission</p>
          </div>
          <div class="body">
            <div class="greeting">Bonjour ${fullName},</div>
            <p>Votre compte d'accès à la plateforme informatique de gestion des ordres de mission d'<strong>El Mouradi Hotels</strong> a été créé avec succès par le service informatique (IT).</p>
            
            <div class="info-box">
              <div class="info-row"><strong>Identifiant (Email) :</strong> ${user.email}</div>
              <div class="info-row"><strong>Rôle attribué :</strong> ${roleLabel}</div>
              <div class="info-row"><strong>Statut du compte :</strong> <span style="color: #16a34a; font-weight: 700;">Actif</span></div>
            </div>

            <p>Vos identifiants de connexion vous ont été communiqués par votre administrateur IT. Vous pouvez désormais vous connecter directement à l'application.</p>

            <div class="btn-container">
              <a href="${appUrl}/login" class="btn" target="_blank">Accéder à l'application</a>
            </div>

            <p style="font-size: 13px; color: #6b7280;"><em>Note : En cas d'oubli de vos accès ou pour toute demande d'assistance, veuillez vous adresser directement au service informatique.</em></p>
          </div>
          <div class="footer">
            <strong>Direction Générale - El Mouradi HOTELS</strong><br>
            B.P 48 El Kantaoui 4089 Port El Kantaoui – TUNISIE<br>
            <a href="http://www.elmouradi.com" target="_blank">www.elmouradi.com</a>
          </div>
        </div>
      </body>
      </html>
    `;

    try {
      this.logger.log(`Attempting to send welcome email to ${user.email} via ${process.env.SMTP_HOST || 'ssl0.ovh.net'}...`);
      const info = await this.transporter.sendMail({
        from,
        to: user.email,
        subject: 'Accès à la plateforme Gestion des Missions - El Mouradi Hotels',
        html: htmlContent,
      });
      this.logger.log(` Welcome email sent successfully to ${user.email} (MessageID: ${info.messageId})`);
      return true;
    } catch (error) {
      this.logger.warn(` Could not send welcome email to ${user.email}: ${error.message}`);
      return false;
    }
  }
}
