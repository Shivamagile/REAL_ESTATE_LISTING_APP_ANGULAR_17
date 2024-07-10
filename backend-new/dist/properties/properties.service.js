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
exports.PropertiesService = void 0;
const common_1 = require("@nestjs/common");
const properties_schema_1 = require("./schema/properties.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const response_constant_1 = require("../common/constants/response.constant");
const exceptions_1 = require("../common/helpers/exceptions");
const success_helper_1 = require("../common/helpers/responses/success.helper");
let PropertiesService = class PropertiesService {
    constructor(PropertyModel) {
        this.PropertyModel = PropertyModel;
    }
    async findAllProperty() {
        return this.PropertyModel.find().exec();
    }
    async findOneProperty(id) {
        return this.PropertyModel.findById(id).exec();
    }
    async createProperty(body) {
        try {
            const propertiesObj = {
                title: body.title,
                description: body.description,
                address: body.address,
                city: body.city,
                state: body.state,
                pincode: body.pincode,
                propertytype: body.propertytype,
                price: body.price,
                image: body.image,
            };
            const createdJob = await this.PropertyModel.create(propertiesObj);
            if (createdJob) {
                success_helper_1.sucessResponse.CREATE_PPROPERTIES.data = propertiesObj;
                return success_helper_1.sucessResponse.CREATE_PPROPERTIES;
            }
            else {
                throw exceptions_1.CustomError.UnknownError(response_constant_1.SOMETHING_WENT_WRNG);
            }
        }
        catch (error) {
            throw error.response ? error : exceptions_1.TypeExceptions.SomethingWentWrong();
        }
    }
    async updateProperty(id, body) {
        try {
            const existingProperty = await this.PropertyModel.findByIdAndUpdate(id, body, { new: true }).exec();
            if (!existingProperty) {
                throw exceptions_1.CustomError.UnknownError(response_constant_1.PROPERTY_NOT_FOUND);
            }
            success_helper_1.sucessResponse.PROPERTY_UPDATE.data = existingProperty;
            return success_helper_1.sucessResponse.PROPERTY_UPDATE;
        }
        catch (error) {
            throw error.response ? error : exceptions_1.TypeExceptions.SomethingWentWrong();
        }
    }
    async deleteProperty(id) {
        try {
            const propertyData = await this.PropertyModel.findByIdAndDelete(id).exec();
            if (!propertyData) {
                throw exceptions_1.CustomError.UnknownError(response_constant_1.PROPERTY_NOT_FOUND);
            }
            return success_helper_1.sucessResponse.PROPERTY_DELETE;
        }
        catch (error) {
            throw error.response ? error : exceptions_1.TypeExceptions.SomethingWentWrong();
        }
    }
    async getAllPropertyByAgent() { }
};
PropertiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(properties_schema_1.Property.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PropertiesService);
exports.PropertiesService = PropertiesService;
//# sourceMappingURL=properties.service.js.map