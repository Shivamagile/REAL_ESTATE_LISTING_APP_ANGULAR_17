"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionExceptions = void 0;
const common_1 = require("@nestjs/common");
exports.ConnectionExceptions = {
    connectionException() {
        return new common_1.HttpException({ message: "Microservice Communcation error", error: 'ConnectionError', statusCode: common_1.HttpStatus.BAD_GATEWAY }, common_1.HttpStatus.BAD_GATEWAY);
    },
};
//# sourceMappingURL=connection.exception.js.map