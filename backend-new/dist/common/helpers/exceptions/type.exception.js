"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeExceptions = void 0;
const common_1 = require("@nestjs/common");
exports.TypeExceptions = {
    UserNotFound() {
        return new common_1.HttpException({
            message: "User not found",
            error: "Not Found",
            statusCode: common_1.HttpStatus.NOT_FOUND,
        }, common_1.HttpStatus.NOT_FOUND);
    },
    PropertyNotFound() {
        return new common_1.HttpException({
            message: "Property not found",
            error: "PropertyNotFound",
            statusCode: common_1.HttpStatus.NOT_FOUND,
        }, common_1.HttpStatus.NOT_FOUND);
    },
    UserAlreadyExists() {
        return new common_1.HttpException({
            message: "User already exists",
            error: "UserAlreadyExists",
            statusCode: common_1.HttpStatus.CONFLICT,
        }, common_1.HttpStatus.CONFLICT);
    },
    InvalidFile() {
        return new common_1.HttpException({
            message: "Uploaded file is invalid",
            error: "InvalidFile",
            statusCode: common_1.HttpStatus.BAD_REQUEST,
        }, common_1.HttpStatus.BAD_REQUEST);
    },
    SomethingWentWrong() {
        return new common_1.HttpException({
            statusCode: common_1.HttpStatus.BAD_REQUEST,
            message: "Something went wrong",
            data: {},
        }, common_1.HttpStatus.BAD_REQUEST);
    },
};
//# sourceMappingURL=type.exception.js.map