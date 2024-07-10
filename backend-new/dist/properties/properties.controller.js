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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertiesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const properties_service_1 = require("./properties.service");
const auth_decorator_1 = require("../security/auth/auth.decorator");
const create_properties_dto_1 = require("./dto/create-properties.dto");
let PropertiesController = class PropertiesController {
    constructor(propertyService) {
        this.propertyService = propertyService;
    }
    async findAll() {
        return this.propertyService.findAllProperty();
    }
    async findOne(id) {
        return this.propertyService.findOneProperty(id);
    }
    async signUp(CreatePropertyDto) {
        return await this.propertyService.createProperty(CreatePropertyDto);
    }
    async update(id, CreatePropertyDto) {
        return await this.propertyService.updateProperty(id, CreatePropertyDto);
    }
    async delete(id) {
        return this.propertyService.deleteProperty(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, auth_decorator_1.Public)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PropertiesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, auth_decorator_1.Public)(),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PropertiesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)("create"),
    (0, auth_decorator_1.Public)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_properties_dto_1.CreatePropertyDto]),
    __metadata("design:returntype", Promise)
], PropertiesController.prototype, "signUp", null);
__decorate([
    (0, common_1.Put)("update/:id"),
    (0, auth_decorator_1.Public)(),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_properties_dto_1.CreatePropertyDto]),
    __metadata("design:returntype", Promise)
], PropertiesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)("delete/:id"),
    (0, auth_decorator_1.Public)(),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PropertiesController.prototype, "delete", null);
PropertiesController = __decorate([
    (0, common_1.Controller)("v1/properties"),
    (0, swagger_1.ApiTags)("Property"),
    __metadata("design:paramtypes", [properties_service_1.PropertiesService])
], PropertiesController);
exports.PropertiesController = PropertiesController;
//# sourceMappingURL=properties.controller.js.map