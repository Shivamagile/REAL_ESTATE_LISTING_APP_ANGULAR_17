import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PropertyDocument = Property & Document;

@Schema({ collection: "properties", timestamps: true })
export class Property {
  @Prop({ require: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  address: string;

  @Prop()
  city: string;

  @Prop()
  state: string;

  @Prop()
  pincode: string;

  @Prop()
  propertytype: string;

  @Prop()
  price: string;

  @Prop()
  image: string;
}

export const PropertySchema = SchemaFactory.createForClass(Property);
