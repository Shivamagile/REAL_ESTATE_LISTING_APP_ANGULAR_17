import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { PropertiesService } from "./properties.service";
import { Public } from "src/security/auth/auth.decorator";
import { CreatePropertyDto } from "./dto/create-properties.dto";

@Controller("v1/properties")
@ApiTags("Property")
export class PropertiesController {
  constructor(private readonly propertyService: PropertiesService) {}

  @Get()
  @Public()
  async findAll() {
    return this.propertyService.findAllProperty();
  }

  @Get(":id")
  @Public()
  async findOne(@Param("id") id: string) {
    return this.propertyService.findOneProperty(id);
  }

  @Post("create")
  @Public()
  async signUp(@Body() CreatePropertyDto: CreatePropertyDto) {
    return await this.propertyService.createProperty(CreatePropertyDto);
  }

  @Put("update/:id")
  @Public()
  async update(
    @Param("id") id: string,
    @Body() CreatePropertyDto: CreatePropertyDto
  ) {
    return await this.propertyService.updateProperty(id, CreatePropertyDto);
  }

  @Delete("delete/:id")
  @Public()
  async delete(@Param("id") id: string) {
    return this.propertyService.deleteProperty(id);
  }
}

