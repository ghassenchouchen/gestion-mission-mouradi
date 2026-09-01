import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, ParseIntPipe } from '@nestjs/common';
import { DestinationService } from './destination.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('destinations')
export class DestinationController {
  constructor(private readonly destinationService: DestinationService) {}

  @Get()
  @Roles('ADMIN', 'HR', 'USER')
  findAll() {
    return this.destinationService.findAll();
  }

  @Get(':id')
  @Roles('ADMIN', 'HR', 'USER')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.destinationService.findOne(id);
  }

  @Post()
  @Roles('ADMIN', 'USER')
  create(@Body() body: { nom: string; ville: string }) {
    return this.destinationService.create(body);
  }

  @Put(':id')
  @Roles('ADMIN', 'USER')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: { nom?: string; ville?: string }) {
    return this.destinationService.update(id, body);
  }

  @Delete(':id')
  @Roles('ADMIN', 'USER')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.destinationService.remove(id);
  }
}
