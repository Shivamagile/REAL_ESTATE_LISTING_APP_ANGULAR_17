"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseMessage = exports.ResponseMessageKey = void 0;
const common_1 = require("@nestjs/common");
exports.ResponseMessageKey = "ResponseMessageKey";
const ResponseMessage = (message) =>
  (0, common_1.SetMetadata)(exports.ResponseMessageKey, message);
exports.ResponseMessage = ResponseMessage;
//# sourceMappingURL=response.decorator.js.map
