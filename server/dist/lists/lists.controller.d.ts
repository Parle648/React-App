import { ListsService } from './lists.service';
export declare class ListsController {
    private readonly listsService;
    constructor(listsService: ListsService);
    create(createListDto: any): Promise<{
        listActivities: {
            id: number;
            activity_type: string;
            list_name: string;
            from: string;
            to: string;
            time: Date;
            list_id: number;
        }[];
    } & {
        id: number;
        list_name: string;
    }>;
    findAll(): Promise<{
        id: number;
        list_name: string;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        list_name: string;
    }>;
    update(id: string, updateListDto: any): Promise<{
        listActivities: {
            id: number;
            activity_type: string;
            list_name: string;
            from: string;
            to: string;
            time: Date;
            list_id: number;
        }[];
    } & {
        id: number;
        list_name: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        list_name: string;
    }>;
}
