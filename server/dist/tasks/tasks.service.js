"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let TasksService = class TasksService {
    constructor(databaseService) {
        this.databaseService = databaseService;
        this.logger = new common_1.Logger('TasksService');
    }
    async create(createTasksDto) {
        const { taskData, action } = createTasksDto;
        this.logger.log(`User create task with name - "${action.task_name}". DTO is ${JSON.stringify(createTasksDto)}`);
        const taskInit = this.databaseService.tasks.create({
            data: {
                ...taskData,
                activities: {
                    create: [
                        action
                    ]
                }
            },
            include: {
                activities: true
            }
        });
        return this.databaseService.$transaction([taskInit]);
    }
    findAll() {
        this.logger.log(`User get all tasks`);
        return this.databaseService.tasks.findMany({});
    }
    async findOne(id) {
        this.logger.log(`User get specific task which id = ${id}`);
        return this.databaseService.tasks.findUnique({
            where: { id }
        });
    }
    async update(id, updateTasksDto) {
        const { taskData, action } = updateTasksDto;
        this.logger.log(`User update task with name - "${action.task_name}". DTO is ${JSON.stringify(updateTasksDto)}`);
        return this.databaseService.tasks.update({
            where: {
                id,
            },
            data: {
                ...taskData,
                activities: {
                    create: [
                        action
                    ]
                }
            },
            include: {
                activities: true
            }
        });
    }
    remove(id) {
        this.logger.log(`User delete task which id = ${id}`);
        return this.databaseService.tasks.delete({
            where: { id },
        });
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], TasksService);
//# sourceMappingURL=tasks.service.js.map