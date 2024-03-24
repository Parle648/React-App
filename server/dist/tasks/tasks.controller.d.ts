import { TasksService } from './tasks.service';
import { Prisma } from '@prisma/client';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(createTasksDto: any): Promise<[{
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
    findOne(id: string): Promise<{
        id: number;
        list_id: number;
        status: string;
        deadline: Date;
        priority: string;
        description: string;
    }>;
    update(id: string, updateTaskDto: Prisma.TasksUpdateInput): Promise<{
        id: number;
        list_id: number;
        status: string;
        deadline: Date;
        priority: string;
        description: string;
    }>;
    remove(id: string): Prisma.Prisma__TasksClient<{
        id: number;
        list_id: number;
        status: string;
        deadline: Date;
        priority: string;
        description: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
