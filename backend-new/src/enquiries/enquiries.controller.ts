import { EnquiriesService } from "./enquiries.service";
import { CreateEquiryDto } from "./dto/create-enquiries.dto";
import { Body, Controller, Post } from "@nestjs/common";
import { Public } from "src/security/auth/auth.decorator";
import { ApiTags } from "@nestjs/swagger";

@Controller("v1/enquiries")
@ApiTags("Enquiries")
export class EnquiriesController {
  constructor(private readonly enquiriesService: EnquiriesService) {}

  @Post("create")
  @Public()
  async signUp(@Body() createEquiryDto: CreateEquiryDto) {
    return await this.enquiriesService.addEquiry(createEquiryDto);
  }
}
