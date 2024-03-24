import { ActivitiesService } from './activities.service';
import { Prisma } from '@prisma/client';
export declare class ActivitiesController {
    private readonly activitiesService;
    constructor(activitiesService: ActivitiesService);
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
    findOne(id: string): Promise<{
        id: number;
        list_activities_id: number;
        activity_type: string;
        from: string;
        to: string;
        time: Date;
        task_id: number;
    }>;
    update(id: string, updateActivityDto: Prisma.ActivitiesUpdateInput): Promise<{
        id: number;
        list_activities_id: number;
        activity_type: string;
        from: string;
        to: string;
        time: Date;
        task_id: number;
    }>;
    remove(id: string): Prisma.Prisma__ActivitiesClient<{
        id: number;
        list_activities_id: number;
        activity_type: string;
        from: string;
        to: string;
        time: Date;
        task_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
