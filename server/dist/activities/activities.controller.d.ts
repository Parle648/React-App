import { ActivitiesService } from './activities.service';
import { Prisma } from '@prisma/client';
export declare class ActivitiesController {
    private readonly activitiesService;
    constructor(activitiesService: ActivitiesService);
    create(createActivityDto: Prisma.ActivitiesCreateInput): Promise<{
        id: number;
        task_id: number;
        activity_type: string;
        from: string;
        to: string;
        time: Date;
    }>;
    findAll(): Prisma.PrismaPromise<{
        id: number;
        task_id: number;
        activity_type: string;
        from: string;
        to: string;
        time: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        task_id: number;
        activity_type: string;
        from: string;
        to: string;
        time: Date;
    }>;
    update(id: string, updateActivityDto: Prisma.ActivitiesUpdateInput): Promise<{
        id: number;
        task_id: number;
        activity_type: string;
        from: string;
        to: string;
        time: Date;
    }>;
    remove(id: string): Prisma.Prisma__ActivitiesClient<{
        id: number;
        task_id: number;
        activity_type: string;
        from: string;
        to: string;
        time: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
