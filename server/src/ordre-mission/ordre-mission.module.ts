import { Module } from '@nestjs/common';
import { OrdreMissionService } from './ordre-mission.service';
import { OrdreMissionController } from './ordre-mission.controller';

@Module({
  controllers: [OrdreMissionController],
  providers: [OrdreMissionService],
  exports: [OrdreMissionService]
})
export class OrdreMissionModule {}
