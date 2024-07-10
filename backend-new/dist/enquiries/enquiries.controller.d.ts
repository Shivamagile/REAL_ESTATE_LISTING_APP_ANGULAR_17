import { EnquiriesService } from "./enquiries.service";
import { CreateEquiryDto } from "./dto/create-enquiries.dto";
export declare class EnquiriesController {
    private readonly enquiriesService;
    constructor(enquiriesService: EnquiriesService);
    signUp(createEquiryDto: CreateEquiryDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: {};
    }>;
}
