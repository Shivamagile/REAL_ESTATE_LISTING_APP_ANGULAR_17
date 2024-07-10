"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('auth', () => ({
    secret: process.env.JWT_TOKEN_SECRET,
    expiresIn: process.env.JWT_TONE_EXPIRY_TIME ? process.env.JWT_TONE_EXPIRY_TIME : '24h',
    ignoreTokenExpiration: false
}));
//# sourceMappingURL=auth.config.js.map