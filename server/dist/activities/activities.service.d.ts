import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class ActivitiesService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createActivityDto: Prisma.TasksActivitiesCreateInput): Promise<{
        id: number;
        activity_type: string;
        task_name: string;
        from: string;
        to: string;
        time: Date;
        task_id: number;
    }>;
    findAll(): Promise<[{
        id: number;
        activity_type: string;
        task_name: string;
        from: string;
        to: string;
        time: Date;
        task_id: number;
    }[], {
        id: number;
        activity_type: string;
        from: string;
        to: string;
        time: Date;
        list_id: number;
    }[]]>;
    findOne(id: number): Promise<{
        id: number;
        activity_type: string;
        task_name: string;
        from: string;
        to: string;
        time: Date;
        task_id: number;
    }[]>;
    update(id: number, updateActivityDto: Prisma.TasksActivitiesCreateInput): Promise<{
        id: number;
        activity_type: string;
        task_name: string;
        from: string;
        to: string;
        time: Date;
        task_id: number;
    }>;
    remove(id: number): Prisma.Prisma__TasksActivitiesClient<{
        id: number;
        activity_type: string;
        task_name: string;
        from: string;
        to: string;
        time: Date;
        task_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
