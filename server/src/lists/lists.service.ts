import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ListsService {
  constructor (private readonly dataBaseService: DatabaseService) {}

  async create(createListDto: {
    listData: Prisma.ListsCreateInput,
    action: Prisma.ListActivitiesCreateInput
  }) {
    const {listData, action} = createListDto;

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

    return this.dataBaseService.lists.update({
      where: {
        id,
      },
      // 
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
    return this.dataBaseService.lists.delete({
      where: {
        id,
      }
    })
  }
}
