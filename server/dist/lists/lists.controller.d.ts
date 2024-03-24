import { ListsService } from './lists.service';
import { Prisma } from '@prisma/client';
export declare class ListsController {
    private readonly listsService;
    constructor(listsService: ListsService);
    create(createListDto: Prisma.ListsCreateInput): Promise<{
        id: number;
        list_name: string;
    }>;
    findAll(): Promise<{
        id: number;
        list_name: string;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        list_name: string;
    }>;
    update(id: string, updateListDto: Prisma.ListsCreateInput): Promise<{
        id: number;
        list_name: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        list_name: string;
    }>;
}
