import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { Prisma } from '@prisma/client';
import { PublicGuard } from 'src/guards/publicGuard';

@UseGuards(PublicGuard) 
@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Post()
  create(@Body() createActivityDto: Prisma.TasksActivitiesCreateInput) {
    return this.activitiesService.create(createActivityDto);
  }

  @Get()
  findAll() {
    return this.activitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activitiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActivityDto: Prisma.TasksActivitiesCreateInput) {
    return this.activitiesService.update(+id, updateActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activitiesService.remove(+id);
  }
}
