import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, ParseIntPipe } from '@nestjs/common';
import { EmployeService } from './employe.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('employes')
export class EmployeController {
  constructor(private readonly employeService: EmployeService) {}

  @Get()
  @Roles('ADMIN', 'HR', 'USER')
  findAll() {
    return this.employeService.findAll();
  }

  @Get(':id')
  @Roles('ADMIN', 'HR', 'USER')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.employeService.findOne(id);
  }

  @Post()
  @Roles('ADMIN', 'USER')
  create(
    @Body()
    body: {
      mle: string;
      nom: string;
      prenom: string;
      fonction: string;
      hotelAffectation: string;
    },
  ) {
    return this.employeService.create(body);
  }

  @Put(':id')
  @Roles('ADMIN', 'USER')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    body: {
      mle?: string;
      nom?: string;
      prenom?: string;
      fonction?: string;
      hotelAffectation?: string;
      actif?: boolean;
    },
  ) {
    return this.employeService.update(id, body);
  }

  @Delete(':id')
  @Roles('ADMIN', 'USER')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.employeService.remove(id);
  }
}
