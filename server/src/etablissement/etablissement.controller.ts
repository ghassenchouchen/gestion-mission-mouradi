import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, ParseIntPipe } from '@nestjs/common';
import { EtablissementService } from './etablissement.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('etablissements')
export class EtablissementController {
  constructor(private readonly service: EtablissementService) {}

  @Get()
  @Roles('ADMIN', 'HR', 'USER')
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @Roles('ADMIN', 'HR', 'USER')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Post()
  @Roles('ADMIN', 'USER')
  create(@Body() body: { code: string; nom: string; ville: string; adresse?: string; actif?: boolean }) {
    return this.service.create(body);
  }

  @Put(':id')
  @Roles('ADMIN', 'USER')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { code?: string; nom?: string; ville?: string; adresse?: string; actif?: boolean }
  ) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  @Roles('ADMIN', 'USER')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
