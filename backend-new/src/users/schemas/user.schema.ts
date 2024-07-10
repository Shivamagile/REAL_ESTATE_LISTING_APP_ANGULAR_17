import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { UserType } from "src/common/helpers/enum.helper";

export type UsersDocument = Users & Document;

@Schema({ collection: "users", timestamps: true })
export class Users {
  @Prop({ required: true })
  username: string;

  @Prop()
  resetPassToken: string;

  @Prop({ required: true, unique: true, index: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, default: UserType.Customer })
  role: string;

  @Prop({ required: true, default: true })
  isActive: boolean;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
