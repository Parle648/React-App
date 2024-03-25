import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TasksService {
  constructor (private readonly databaseService: DatabaseService) {}

  async create(createTasksDto: {
    taskData: Prisma.TasksCreateInput,
    action: Prisma.TasksActivitiesCreateInput,
  }) {
    const {taskData, action} = createTasksDto;

    const taskInit = this.databaseService.tasks.create({
      data: {
        ...taskData,
        activities: {
          create: [
            action
          ]
        }
      },
      include: {
        activities: true
      }
    });

    return this.databaseService.$transaction
    ([taskInit])
  }

  findAll() {
    return this.databaseService.tasks.findMany({})
  }

  async findOne(id: number) {
    return this.databaseService.tasks.findUnique({
      where: { id }
    })
  }

  async update(id: number, updateTasksDto) {
    const { taskData, action } = updateTasksDto;
        return this.databaseService.tasks.update({
            where: {
                id,
            },
            data: {
                ...taskData,
                activities: {
                    create: [
                        action
                    ]
                }
            },
            include: {
                activities: true
            }
        });
  }

  remove(id: number) {
    console.log(id);
    
    return this.databaseService.tasks.delete({
      where: { id },

    })
  }
}
