import { EnquiryDocument } from "./schema/enquiries.schema";
import { Model } from "mongoose";
import { CreateEquiryDto } from "./dto/create-enquiries.dto";
export declare class EnquiriesService {
    private EnquiryModel;
    constructor(EnquiryModel: Model<EnquiryDocument>);
    addEquiry(body: CreateEquiryDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: {};
    }>;
}
