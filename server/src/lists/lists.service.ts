import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ListsService {
  constructor (private readonly dataBaseService: DatabaseService) {}

  logger = new Logger('ListsService')

  async create(createListDto: {
    listData: Prisma.ListsCreateInput,
    action: Prisma.ListActivitiesCreateInput
  }) {
    const {listData, action} = createListDto;

    this.logger.log(`User create list "${action.list_name}". DTO = ${JSON.stringify(createListDto)}`)

    const createList = await this.dataBaseService.lists.create({
      data: {
        list_name: listData.list_name,
        listActivities: {
          create: [
            action
          ]
        }
      },
      include: {
        listActivities: true
      }
    })

    return createList
  }

  async findAll() {
    this.logger.log(`User get all lists`)
    return this.dataBaseService.lists.findMany();
  }

  async findOne(id: number) {
    return this.dataBaseService.lists.findUnique({
      where: {
        id,
      }
    })
  }

  async update(id: number, updateListDto: {
    listData: Prisma.ListsCreateInput,
    action: Prisma.ListActivitiesCreateInput
  }) {

    const {listData, action} = updateListDto;

    this.logger.log(`User update list "${action.list_name}". DTO = ${JSON.stringify(updateListDto)}`)

    return this.dataBaseService.lists.update({
      where: {
        id,
      },
      data: {
        list_name: listData.list_name,
        listActivities: {
          create: [
            action
          ]
        }
      },
      include: {
        listActivities: true
      }
    })
  }

  async remove(id: number) {
    this.logger.log(`User delete list which id = ${id}`)
    return this.dataBaseService.lists.delete({
      where: {
        id,
      }
    })
  }
}
