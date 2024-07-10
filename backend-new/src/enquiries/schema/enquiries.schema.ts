import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type EnquiryDocument = Enquiry & Document;

@Schema({ collection: "enquiry", timestamps: true })
export class Enquiry {
  @Prop({ require: true })
  userId: string;

  @Prop()
  properyId: string;

  @Prop()
  message: string;
}

export const EnquirySchema = SchemaFactory.createForClass(Enquiry);
