import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TasksService {
  constructor (private readonly databaseService: DatabaseService) {}

  logger = new Logger('TasksService')

  async create(createTasksDto: {
    taskData: Prisma.TasksCreateInput,
    action: Prisma.TasksActivitiesCreateInput,
  }) {
    const {taskData, action} = createTasksDto;

    this.logger.log(`User create task with name - "${action.task_name}". DTO is ${JSON.stringify(createTasksDto)}`)

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
    this.logger.log(`User get all tasks`)
    return this.databaseService.tasks.findMany({})
  }

  async findOne(id: number) {
    this.logger.log(`User get specific task which id = ${id}`)
    return this.databaseService.tasks.findUnique({
      where: { id }
    })
  }

  async update(id: number, updateTasksDto) {
    const { taskData, action } = updateTasksDto;
    
    this.logger.log(`User update task with name - "${action.task_name}". DTO is ${JSON.stringify(updateTasksDto)}`)

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
    this.logger.log(`User delete task which id = ${id}`)
    
    return this.databaseService.tasks.delete({
      where: { id },

    })
  }
}
