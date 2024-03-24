import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ListsService {
  constructor (private readonly dataBaseService: DatabaseService) {}

  async create(createListDto: Prisma.ListsCreateInput) {
    return this.dataBaseService.lists.create({ data: createListDto })
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

  async update(id: number, updateListDto: Prisma.ListsCreateInput) {
    return this.dataBaseService.lists.update({
      where: {
        id,
      },
      data: updateListDto
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
