import { ApiProperty } from "@nestjs/swagger";
import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsEmail,
  IsBoolean,
  IsEnum,
} from "class-validator";
import { UserType } from "src/common/helpers/enum.helper";
export class CreateUserDto {
  @ApiProperty({ example: "james" })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ enum: UserType })
  @IsNotEmpty()
  @IsEnum(UserType)
  role: UserType;

  @ApiProperty({ example: "jummy@yopmail.com" })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: "jummy@123" })
  @IsNotEmpty()
  @IsString()
  password: string;
}
