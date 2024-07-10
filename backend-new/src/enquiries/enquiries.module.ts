import { Module } from "@nestjs/common";
import { EnquiriesService } from "./enquiries.service";
import { MongooseModule } from "@nestjs/mongoose";
import { LoggerModule } from "src/common/logger/logger.module";
import { Enquiry, EnquirySchema } from "./schema/enquiries.schema";
import { EnquiriesController } from "./enquiries.controller";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Enquiry.name, schema: EnquirySchema }]),
    LoggerModule,
  ],
  controllers: [EnquiriesController],
  providers: [EnquiriesService],
  exports: [EnquiriesService],
})
export class EnquiriesModule {}
