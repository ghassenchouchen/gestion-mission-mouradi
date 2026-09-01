import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ObjetMissionService } from './objet-mission.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('objets-mission')
export class ObjetMissionController {
  constructor(private readonly objetMissionService: ObjetMissionService) {}

  @Get()
  @Roles('ADMIN', 'HR', 'USER')
  findAll() {
    return this.objetMissionService.findAll();
  }

  @Get(':id')
  @Roles('ADMIN', 'HR', 'USER')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.objetMissionService.findOne(id);
  }

  @Post()
  @Roles('ADMIN', 'USER')
  create(@Body() body: { libelle: string }) {
    return this.objetMissionService.create(body);
  }

  @Put(':id')
  @Roles('ADMIN', 'USER')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: { libelle?: string; actif?: boolean }) {
    return this.objetMissionService.update(id, body);
  }

  @Delete(':id')
  @Roles('ADMIN', 'USER')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.objetMissionService.remove(id);
  }
}
