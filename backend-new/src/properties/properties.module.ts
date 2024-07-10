import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { LoggerModule } from "src/common/logger/logger.module";
import { Property, PropertySchema } from "./schema/properties.schema";
import { PropertiesService } from "./properties.service";
import { PropertiesController } from "./properties.controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Property.name, schema: PropertySchema },
    ]),
    LoggerModule,
  ],
  controllers: [PropertiesController],
  providers: [PropertiesService],
  exports: [PropertiesService],
})
export class PropertiesModule {}
