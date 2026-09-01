import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ChauffeurService } from './chauffeur.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('chauffeurs')
export class ChauffeurController {
  constructor(private readonly chauffeurService: ChauffeurService) {}

  @Get()
  @Roles('ADMIN', 'HR', 'USER')
  findAll() {
    return this.chauffeurService.findAll();
  }

  
  @Get(':id')
  @Roles('ADMIN', 'HR', 'USER')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.chauffeurService.findOne(id);
  }

  @Post()
  @Roles('ADMIN', 'USER')
  create(@Body() body: { mle: string; nom: string; prenom: string; telephone?: string; vehiculeParDefautId?: number; etablissementId?: number }) {
    return this.chauffeurService.create(body);
  }

  @Put(':id')
  @Roles('ADMIN', 'USER')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { mle?: string; nom?: string; prenom?: string; telephone?: string; disponible?: boolean; vehiculeParDefautId?: number | null; etablissementId?: number | null },
  ) {
    return this.chauffeurService.update(id, body);
  }

  @Delete(':id')
  @Roles('ADMIN', 'USER')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.chauffeurService.remove(id);
  }
}
