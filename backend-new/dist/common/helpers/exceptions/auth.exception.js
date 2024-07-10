"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthExceptions = void 0;
const common_1 = require("@nestjs/common");
exports.AuthExceptions = {
    TokenExpired() {
        return new common_1.HttpException({ message: "Token Expired use RefreshToken", error: 'TokenExpiredError', statusCode: common_1.HttpStatus.FORBIDDEN }, common_1.HttpStatus.FORBIDDEN);
    },
    InvalidToken() {
        return new common_1.HttpException({ message: "Invalid Token", error: 'InvalidToken', statusCode: common_1.HttpStatus.FORBIDDEN }, common_1.HttpStatus.FORBIDDEN);
    },
    ForbiddenException() {
        return new common_1.HttpException({ message: "This resource is forbidden from this user", error: 'UnAuthorizedResourceError', statusCode: common_1.HttpStatus.FORBIDDEN }, common_1.HttpStatus.FORBIDDEN);
    },
    InvalidUserId() {
        return new common_1.HttpException({ message: "Invalid User Id", error: 'InvalidUserId', statusCode: common_1.HttpStatus.FORBIDDEN }, common_1.HttpStatus.FORBIDDEN);
    },
    InvalidIdPassword() {
        return new common_1.HttpException({ message: "Invalid Username or Password", error: 'InvalidIdPassword', statusCode: common_1.HttpStatus.UNAUTHORIZED }, common_1.HttpStatus.UNAUTHORIZED);
    },
    AccountNotexist() {
        return new common_1.HttpException({ message: "Account does not exist!", error: 'accountNotexist', statusCode: common_1.HttpStatus.FORBIDDEN }, common_1.HttpStatus.FORBIDDEN);
    },
    AccountNotActive() {
        return new common_1.HttpException({ message: "Account not active!", error: 'accountNotActive', statusCode: common_1.HttpStatus.UNAUTHORIZED }, common_1.HttpStatus.UNAUTHORIZED);
    }
};
//# sourceMappingURL=auth.exception.js.map