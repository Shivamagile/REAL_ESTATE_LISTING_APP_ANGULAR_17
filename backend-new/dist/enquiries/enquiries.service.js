"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnquiriesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const enquiries_schema_1 = require("./schema/enquiries.schema");
const mongoose_2 = require("mongoose");
const success_helper_1 = require("../common/helpers/responses/success.helper");
const exceptions_1 = require("../common/helpers/exceptions");
let EnquiriesService = class EnquiriesService {
    constructor(EnquiryModel) {
        this.EnquiryModel = EnquiryModel;
    }
    async addEquiry(body) {
        var _a;
        try {
            const enquiryObj = {
                userId: body.userId,
                properyId: body.properyId,
                message: body.message,
            };
            await this.EnquiryModel.create(enquiryObj);
            success_helper_1.sucessResponse.CREATE_ENQUIRY.data = enquiryObj;
            return success_helper_1.sucessResponse.CREATE_ENQUIRY;
        }
        catch (error) {
            console.log("error: ", error);
            if ((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.error) {
                throw error;
            }
            else {
                throw exceptions_1.CustomError.UnknownError(error === null || error === void 0 ? void 0 : error.message);
            }
        }
    }
};
EnquiriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(enquiries_schema_1.Enquiry.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EnquiriesService);
exports.EnquiriesService = EnquiriesService;
//# sourceMappingURL=enquiries.service.js.map