"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Public = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../common/constants");
const Public = () => (0, common_1.SetMetadata)(constants_1.AUTH_IS_PUBLIC_KEY, true);
exports.Public = Public;
//# sourceMappingURL=auth.decorator.js.map