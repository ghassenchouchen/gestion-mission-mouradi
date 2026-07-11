import { Module } from '@nestjs/common';
import { ObjetMissionService } from './objet-mission.service';
import { ObjetMissionController } from './objet-mission.controller';

@Module({
  controllers: [ObjetMissionController],
  providers: [ObjetMissionService],
  exports: [ObjetMissionService],
})
export class ObjetMissionModule {}
