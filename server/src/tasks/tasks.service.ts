import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TasksService {
  constructor (private readonly databaseService: DatabaseService) {}

  async create(createTasksDto: Prisma.TasksCreateInput) {
    return this.databaseService.tasks.create({ data: createTasksDto })
  }

  findAll() {
    return this.databaseService.tasks.findMany({})
  }

  async findOne(id: number) {
    return this.databaseService.tasks.findUnique({
      where: { id }
    })
  }

  async update(id: number, updateTasksDto: Prisma.TasksUpdateInput) {
    return this.databaseService.tasks.update({
      where: {
        id,
      },
      data: updateTasksDto
    })
  }

  remove(id: number) {
    return this.databaseService.tasks.delete({
      where: { id }
    })
  }
}
