import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, ParseIntPipe } from '@nestjs/common';
import { VehiculeService } from './vehicule.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('vehicules')
export class VehiculeController {
  constructor(private readonly vehiculeService: VehiculeService) {}

  @Get()
  @Roles('ADMIN', 'HR', 'USER')
  findAll() {
    return this.vehiculeService.findAll();
  }

  @Get(':id')
  @Roles('ADMIN', 'HR', 'USER')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.vehiculeService.findOne(id);
  }

  @Post()
  @Roles('ADMIN', 'USER')
  create(@Body() body: { immatriculation: string; marque: string; modele?: string; type: string }) {
    return this.vehiculeService.create(body);
  }

  @Put(':id')
  @Roles('ADMIN', 'USER')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: {
      immatriculation?: string;
      marque?: string;
      modele?: string;
      type?: string;
      disponible?: boolean;
    },
  ) {
    return this.vehiculeService.update(id, body);
  }

  @Delete(':id')
  @Roles('ADMIN', 'USER')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.vehiculeService.remove(id);
  }
}
