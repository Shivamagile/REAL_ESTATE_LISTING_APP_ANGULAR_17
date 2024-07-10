import { PropertiesService } from "./properties.service";
import { CreatePropertyDto } from "./dto/create-properties.dto";
export declare class PropertiesController {
    private readonly propertyService;
    constructor(propertyService: PropertiesService);
    findAll(): Promise<(import("./schema/properties.schema").Property & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<import("./schema/properties.schema").Property & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    signUp(CreatePropertyDto: CreatePropertyDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: {};
    }>;
    update(id: string, CreatePropertyDto: CreatePropertyDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: {};
    }>;
    delete(id: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: {};
    }>;
}
