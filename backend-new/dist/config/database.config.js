"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const enum_helper_1 = require("../common/helpers/enum.helper");
exports.default = (0, config_1.registerAs)("database", () => ({
    initialUser: {
        username: "Real Estate",
        email: "real.estate@yopmail.com",
        password: "User@123",
        role: enum_helper_1.UserType.Customer,
    },
    connectionString: process.env.CONNECTION_STRING,
}));
//# sourceMappingURL=database.config.js.map