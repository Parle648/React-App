import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class ActivitiesService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createActivityDto: Prisma.ActivitiesCreateInput): Promise<{
        id: number;
        list_activities_id: number;
        activity_type: string;
        from: string;
        to: string;
        time: Date;
        task_id: number;
    }>;
    findAll(): Prisma.PrismaPromise<{
        id: number;
        list_activities_id: number;
        activity_type: string;
        from: string;
        to: string;
        time: Date;
        task_id: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        list_activities_id: number;
        activity_type: string;
        from: string;
        to: string;
        time: Date;
        task_id: number;
    }>;
    update(id: number, updateActivityDto: Prisma.ActivitiesUpdateInput): Promise<{
        id: number;
        list_activities_id: number;
        activity_type: string;
        from: string;
        to: string;
        time: Date;
        task_id: number;
    }>;
    remove(id: number): Prisma.Prisma__ActivitiesClient<{
        id: number;
        list_activities_id: number;
        activity_type: string;
        from: string;
        to: string;
        time: Date;
        task_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
