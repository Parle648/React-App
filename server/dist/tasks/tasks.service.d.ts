import { Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class TasksService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    logger: Logger;
    create(createTasksDto: {
        taskData: Prisma.TasksCreateInput;
        action: Prisma.TasksActivitiesCreateInput;
    }): Promise<[{
        activities: {
            id: number;
            activity_type: string;
            task_name: string;
            from: string;
            to: string;
            time: Date;
            task_id: number;
        }[];
    } & {
        id: number;
        list_id: number;
        name: string;
        status: string;
        deadline: Date;
        priority: string;
        description: string;
    }]>;
    findAll(): Prisma.PrismaPromise<{
        id: number;
        list_id: number;
        name: string;
        status: string;
        deadline: Date;
        priority: string;
        description: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        list_id: number;
        name: string;
        status: string;
        deadline: Date;
        priority: string;
        description: string;
    }>;
    update(id: number, updateTasksDto: any): Promise<{
        activities: {
            id: number;
            activity_type: string;
            task_name: string;
            from: string;
            to: string;
            time: Date;
            task_id: number;
        }[];
    } & {
        id: number;
        list_id: number;
        name: string;
        status: string;
        deadline: Date;
        priority: string;
        description: string;
    }>;
    remove(id: number): Prisma.Prisma__TasksClient<{
        id: number;
        list_id: number;
        name: string;
        status: string;
        deadline: Date;
        priority: string;
        description: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
