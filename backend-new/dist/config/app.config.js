"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)("express", () => ({
    env: process.env.APP_ENV || "dev",
    version: process.env.APP_VERSION || "v1",
    name: process.env.APP_NAME || "Real Estate",
    description: `Please follow the below instructions. 
  
  1). Each and every API endpoint should be different and meaningful.
  
  2). Please use proper tag name and also it should be meaningful. 

  3). Every module have saperate tag.

    eg: If we are listing a user management module APIs of the admin panel then tag name should be **AP - User Management**

  4). Add proper summery into each and every API.
  
  5). Add proper request & response parameters.

  6). API respose format should be same for whole application like below. **data** key should be always object
  
    {

      status_code: 200,
      
      message: "Success/Failure",
      
      data: {}
      
    }

  7). Please make sure disabled swagger while you are deploying our application to staging OR production.

  8). Please use camelcase in key name if you are using is NOSQL database.
  
    eg: firstName
  
  9). Please use underscore in key name if you are using is SQL database.
  
    eg: first_name
  `,
    url: process.env.APP_URL,
    port: process.env.APP_PORT || 3000,
    enableCors: process.env.APP_ENABLE_CORS ? process.env.APP_ENABLE_CORS : true,
    throttler: {
        ttlTime: process.env.APP_THROTTLER_TTL_TIME
            ? process.env.APP_THROTTLER_TTL_TIME
            : 60,
        requestCount: process.env.APP_THROTTLER_REQUEST_COUNT
            ? process.env.APP_THROTTLER_REQUEST_COUNT
            : 10,
    },
}));
//# sourceMappingURL=app.config.js.map