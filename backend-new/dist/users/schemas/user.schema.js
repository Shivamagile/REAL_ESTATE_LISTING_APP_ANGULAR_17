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
exports.UsersSchema = exports.Users = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const enum_helper_1 = require("../../common/helpers/enum.helper");
let Users = class Users {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Users.prototype, "username", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Users.prototype, "resetPassToken", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true, index: true }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: enum_helper_1.UserType.Customer }),
    __metadata("design:type", String)
], Users.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: true }),
    __metadata("design:type", Boolean)
], Users.prototype, "isActive", void 0);
Users = __decorate([
    (0, mongoose_1.Schema)({ collection: "users", timestamps: true })
], Users);
exports.Users = Users;
exports.UsersSchema = mongoose_1.SchemaFactory.createForClass(Users);
//# sourceMappingURL=user.schema.js.map