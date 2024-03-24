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
exports.ActivitiesService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let ActivitiesService = class ActivitiesService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async create(createActivityDto) {
        return this.databaseService.activities.create({ data: createActivityDto });
    }
    findAll() {
        return this.databaseService.activities.findMany({});
    }
    async findOne(id) {
        return this.databaseService.activities.findUnique({
            where: { id }
        });
    }
    async update(id, updateActivityDto) {
        return this.databaseService.activities.update({
            where: {
                id,
            },
            data: updateActivityDto
        });
    }
    remove(id) {
        return this.databaseService.activities.delete({
            where: { id }
        });
    }
};
exports.ActivitiesService = ActivitiesService;
exports.ActivitiesService = ActivitiesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], ActivitiesService);
//# sourceMappingURL=activities.service.js.map