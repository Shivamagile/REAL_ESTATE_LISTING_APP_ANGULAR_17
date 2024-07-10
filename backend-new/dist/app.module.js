"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const throttler_1 = require("@nestjs/throttler");
const users_module_1 = require("./users/users.module");
const logger_module_1 = require("./common/logger/logger.module");
const auth_module_1 = require("./security/auth/auth.module");
const jwt_auth_guard_1 = require("./security/auth/guards/jwt-auth.guard");
const database_module_1 = require("./providers/database/database.module");
const throttle_module_1 = require("./security/throttle/throttle.module");
const transform_interceptor_1 = require("./common/interceptors/transform.interceptor");
const enquiries_module_1 = require("./enquiries/enquiries.module");
const properties_module_1 = require("./properties/properties.module");
const app_config_1 = require("./config/app.config");
const database_config_1 = require("./config/database.config");
const auth_config_1 = require("./config/auth.config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [app_config_1.default, database_config_1.default, auth_config_1.default],
                ignoreEnvFile: false,
                isGlobal: true,
            }),
            database_module_1.DatabaseModule,
            logger_module_1.LoggerModule,
            auth_module_1.AuthModule,
            throttle_module_1.ThrottleModule,
            properties_module_1.PropertiesModule,
            users_module_1.UsersModule,
            enquiries_module_1.EnquiriesModule,
        ],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: throttler_1.ThrottlerGuard,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: transform_interceptor_1.TransformInterceptor,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map