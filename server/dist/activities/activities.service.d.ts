import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class ActivitiesService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
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
    findOne(id: number): Promise<{
        id: number;
        task_id: number;
        activity_type: string;
        from: string;
        to: string;
        time: Date;
    }>;
    update(id: number, updateActivityDto: Prisma.ActivitiesUpdateInput): Promise<{
        id: number;
        task_id: number;
        activity_type: string;
        from: string;
        to: string;
        time: Date;
    }>;
    remove(id: number): Prisma.Prisma__ActivitiesClient<{
        id: number;
        task_id: number;
        activity_type: string;
        from: string;
        to: string;
        time: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
