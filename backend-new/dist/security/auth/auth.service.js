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
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const logger_service_1 = require("../../common/logger/logger.service");
const users_service_1 = require("../../users/users.service");
let AuthService = AuthService_1 = class AuthService {
    constructor(userService, jwtService, myLogger) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.myLogger = myLogger;
        this.myLogger.setContext(AuthService_1.name);
    }
    async login(params) {
        let user = await this.userService.login(params);
        return user;
    }
    generateAuthToken(user) {
        const payload = {
            id: user._id,
            userId: user._id,
            email: user.email,
            userType: user.userType,
        };
        return this.jwtService.sign(payload);
    }
};
AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        logger_service_1.LoggerService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map