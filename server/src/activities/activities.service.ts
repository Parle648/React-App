import { Injectable, createParamDecorator } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ActivitiesService {
  constructor (private readonly databaseService: DatabaseService) {}

  async create(createActivityDto: Prisma.ActivitiesCreateInput) {
    return this.databaseService.activities.create({ data: createActivityDto })
  }

  findAll() {
    return this.databaseService.activities.findMany({})
  }

  async findOne(id: number) {
    return this.databaseService.activities.findUnique({
      where: { id }
    })
  }

  async update(id: number, updateActivityDto: Prisma.ActivitiesUpdateInput) {
    return this.databaseService.activities.update({
      where: {
        id,
      },
      data: updateActivityDto
    })
  }

  remove(id: number) {
    return this.databaseService.activities.delete({
      where: { id }
    })
  }
}
