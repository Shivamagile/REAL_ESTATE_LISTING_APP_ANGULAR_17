import { Property, PropertyDocument } from "./schema/properties.schema";
import mongoose, { Model } from "mongoose";
import { CreatePropertyDto } from "./dto/create-properties.dto";
export declare class PropertiesService {
    private PropertyModel;
    constructor(PropertyModel: Model<PropertyDocument>);
    findAllProperty(): Promise<(Property & mongoose.Document<any, any, any> & {
        _id: mongoose.Types.ObjectId;
    })[]>;
    findOneProperty(id: string): Promise<Property & mongoose.Document<any, any, any> & {
        _id: mongoose.Types.ObjectId;
    }>;
    createProperty(body: CreatePropertyDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: {};
    }>;
    updateProperty(id: string, body: CreatePropertyDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: {};
    }>;
    deleteProperty(id: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: {};
    }>;
    getAllPropertyByAgent(): Promise<void>;
}
