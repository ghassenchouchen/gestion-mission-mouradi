import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, ParseIntPipe } from '@nestjs/common';
import { OrdreMissionService } from './ordre-mission.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { CurrentUser } from '../auth/current-user.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('ordre-missions')
export class OrdreMissionController {
  constructor(private readonly service: OrdreMissionService) {}

  @Post()
  @Roles('ADMIN')
  create(
    @CurrentUser() user: any,
    @Body() body: {
      employeId: number;
      destinationId: number;
      chauffeurId: number;
      vehiculeId: number;
      objetMissionId: number;
      dateDebut: string;
      dateFin?: string;
      heureDepart: string;
      heureRetour?: string;
      itineraire?: string;
      fraisParticipation?: number;
      fraisMission?: number;
      notes?: string;
      accompagnateurs?: number[];
      statut?: string;
    }
  ) {
    return this.service.create(user.id, body);
  }

  @Get()
  @Roles('ADMIN', 'HR')
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @Roles('ADMIN', 'HR')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Put(':id')
  @Roles('ADMIN')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: {
      employeId?: number;
      destinationId?: number;
      chauffeurId?: number;
      vehiculeId?: number;
      objetMissionId?: number;
      dateDebut?: string;
      dateFin?: string;
      heureDepart?: string;
      heureRetour?: string;
      itineraire?: string;
      fraisParticipation?: number;
      fraisMission?: number;
      notes?: string;
      statut?: string;
      departReel?: string;
      retourReel?: string;
    }
  ) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  @Roles('ADMIN')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
