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
exports.EnquiriesController = void 0;
const enquiries_service_1 = require("./enquiries.service");
const create_enquiries_dto_1 = require("./dto/create-enquiries.dto");
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../security/auth/auth.decorator");
const swagger_1 = require("@nestjs/swagger");
let EnquiriesController = class EnquiriesController {
    constructor(enquiriesService) {
        this.enquiriesService = enquiriesService;
    }
    async signUp(createEquiryDto) {
        return await this.enquiriesService.addEquiry(createEquiryDto);
    }
};
__decorate([
    (0, common_1.Post)("create"),
    (0, auth_decorator_1.Public)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_enquiries_dto_1.CreateEquiryDto]),
    __metadata("design:returntype", Promise)
], EnquiriesController.prototype, "signUp", null);
EnquiriesController = __decorate([
    (0, common_1.Controller)("v1/enquiries"),
    (0, swagger_1.ApiTags)("Enquiries"),
    __metadata("design:paramtypes", [enquiries_service_1.EnquiriesService])
], EnquiriesController);
exports.EnquiriesController = EnquiriesController;
//# sourceMappingURL=enquiries.controller.js.map