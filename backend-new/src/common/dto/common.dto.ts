import { ApiProperty } from "@nestjs/swagger";
import {
  IsNotEmpty,
  IsNumber,
  ValidateIf,
  IsDateString,
  IsString,
} from "class-validator";

export class LoginDto {
  @ApiProperty({ example: "real.estate@yopmail.com" })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({ example: "User@123" })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class DateRangeDto {
  @ApiProperty({ type: Date, format: "date" })
  @ValidateIf((r) => r.endDate)
  @IsNotEmpty()
  @IsDateString()
  startDate: string;

  @ApiProperty({ type: Date, format: "date" })
  @ValidateIf((r) => r.startDate)
  @IsNotEmpty()
  @IsDateString()
  endDate: string;
}

export class UserIdDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
