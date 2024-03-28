import { ActivitiesService } from './activities.service';
import { Prisma } from '@prisma/client';
export declare class ActivitiesController {
    private readonly activitiesService;
    constructor(activitiesService: ActivitiesService);
    create(createActivityDto: Prisma.TasksActivitiesCreateInput): Promise<{
        id: number;
        activity_type: string;
        task_name: string;
        from: string;
        to: string;
        time: Date;
        task_property: string;
        task_id: number;
    }>;
    findAll(): Promise<[{
        id: number;
        activity_type: string;
        task_name: string;
        from: string;
        to: string;
        time: Date;
        task_property: string;
        task_id: number;
    }[], {
        id: number;
        activity_type: string;
        list_name: string;
        from: string;
        to: string;
        time: Date;
        list_id: number;
    }[]]>;
    findOne(id: string): Promise<{
        id: number;
        activity_type: string;
        task_name: string;
        from: string;
        to: string;
        time: Date;
        task_property: string;
        task_id: number;
    }[]>;
    update(id: string, updateActivityDto: Prisma.TasksActivitiesCreateInput): Promise<{
        id: number;
        activity_type: string;
        task_name: string;
        from: string;
        to: string;
        time: Date;
        task_property: string;
        task_id: number;
    }>;
    remove(id: string): Prisma.Prisma__TasksActivitiesClient<{
        id: number;
        activity_type: string;
        task_name: string;
        from: string;
        to: string;
        time: Date;
        task_property: string;
        task_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
