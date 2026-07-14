import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, ParseIntPipe } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('utilisateurs')
export class UtilisateurController {
  constructor(private readonly utilisateurService: UtilisateurService) {}

  @Get()
  @Roles('ADMIN', 'HR')
  findAll() {
    return this.utilisateurService.findAll();
  }

  @Get(':id')
  @Roles('ADMIN', 'HR')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.utilisateurService.findOne(id);
  }

  @Post()
  @Roles('ADMIN')
  create(@Body() body: { email: string; password?: string; nom: string; prenom: string; role: string }) {
    return this.utilisateurService.create(body);
  }

  @Put(':id')
  @Roles('ADMIN')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { email?: string; password?: string; nom?: string; prenom?: string; role?: string },
  ) {
    return this.utilisateurService.update(id, body);
  }

  @Delete(':id')
  @Roles('ADMIN')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.utilisateurService.remove(id);
  }
}
