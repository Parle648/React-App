import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class TasksService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createTasksDto: {
        taskData: Prisma.TasksCreateInput;
        action: Prisma.ActivitiesCreateInput;
    }): Promise<[{
        activities: {
            id: number;
            activity_type: string;
            from: string;
            to: string;
            time: Date;
            task_id: number;
        }[];
    } & {
        id: number;
        list_id: number;
        status: string;
        deadline: Date;
        priority: string;
        description: string;
    }]>;
    findAll(): Prisma.PrismaPromise<{
        id: number;
        list_id: number;
        status: string;
        deadline: Date;
        priority: string;
        description: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        list_id: number;
        status: string;
        deadline: Date;
        priority: string;
        description: string;
    }>;
    update(id: number, updateTasksDto: Prisma.TasksUpdateInput): Promise<{
        id: number;
        list_id: number;
        status: string;
        deadline: Date;
        priority: string;
        description: string;
    }>;
    remove(id: number): Prisma.Prisma__TasksClient<{
        id: number;
        list_id: number;
        status: string;
        deadline: Date;
        priority: string;
        description: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
