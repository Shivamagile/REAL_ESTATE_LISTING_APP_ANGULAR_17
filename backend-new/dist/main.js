"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const logger_service_1 = require("./common/logger/logger.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const appConfig = configService.get("express");
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle(appConfig.name)
        .setDescription(appConfig.description)
        .setVersion(appConfig.version)
        .addServer("/")
        .addServer("/realestate")
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup("/", app, document);
    app.useLogger(new logger_service_1.LoggerService());
    app.useGlobalPipes(new common_1.ValidationPipe());
    if (appConfig.enableCors) {
        app.enableCors();
    }
    await app.listen(appConfig.port);
}
bootstrap();
//# sourceMappingURL=main.js.map