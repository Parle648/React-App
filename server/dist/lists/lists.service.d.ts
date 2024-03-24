import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class ListsService {
    private readonly dataBaseService;
    constructor(dataBaseService: DatabaseService);
    create(createListDto: Prisma.ListsCreateInput): Promise<{
        id: number;
        list_name: string;
    }>;
    findAll(): Promise<{
        id: number;
        list_name: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        list_name: string;
    }>;
    update(id: number, updateListDto: Prisma.ListsCreateInput): Promise<{
        id: number;
        list_name: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        list_name: string;
    }>;
}
