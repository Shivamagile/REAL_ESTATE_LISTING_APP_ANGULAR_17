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
exports.CreateEquiryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateEquiryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: "66619caf6f30d13246c024b0" }),
    __metadata("design:type", String)
], CreateEquiryDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "66727a0ad6eeec3d577fb94d" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEquiryDto.prototype, "properyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "i Want this can share deatils" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEquiryDto.prototype, "message", void 0);
exports.CreateEquiryDto = CreateEquiryDto;
//# sourceMappingURL=create-enquiries.dto.js.map