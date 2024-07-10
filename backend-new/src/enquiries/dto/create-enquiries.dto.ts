import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsDateString, IsString } from "class-validator";

export class CreateEquiryDto {
  @ApiProperty({ example: "66619caf6f30d13246c024b0" })
  userId: string;

  @ApiProperty({ example: "66727a0ad6eeec3d577fb94d" })
  @IsNotEmpty()
  @IsString()
  properyId: string;

  @ApiProperty({ example: "i Want this can share deatils" })
  @IsNotEmpty()
  @IsString()
  message: string;
}
