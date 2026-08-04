import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma.module';
import { AuthModule } from './auth/auth.module';
import { ChauffeurModule } from './chauffeur/chauffeur.module';
import { VehiculeModule } from './vehicule/vehicule.module';
import { ObjetMissionModule } from './objet-mission/objet-mission.module';
import { DestinationModule } from './destination/destination.module';
import { EmployeModule } from './employe/employe.module';
import { OrdreMissionModule } from './ordre-mission/ordre-mission.module';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    ChauffeurModule,
    VehiculeModule,
    ObjetMissionModule,
    DestinationModule,
    EmployeModule,
    OrdreMissionModule,
    UtilisateurModule,
    MailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


