import { Module } from '@nestjs/common';
import { ChauffeurService } from './chauffeur.service';
import { ChauffeurController } from './chauffeur.controller';

@Module({
  controllers: [ChauffeurController],
  providers: [ChauffeurService],
  exports: [ChauffeurService],
})
export class ChauffeurModule {}
