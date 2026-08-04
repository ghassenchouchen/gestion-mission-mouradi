import { Module } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurController } from './utilisateur.controller';
import { PrismaModule } from '../prisma.module';
import { MailModule } from '../mail/mail.module';

@Module({
  imports: [PrismaModule, MailModule],
  controllers: [UtilisateurController],
  providers: [UtilisateurService],
  exports: [UtilisateurService],
})
export class UtilisateurModule {}
