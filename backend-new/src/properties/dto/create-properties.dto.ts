import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsDateString, IsString } from "class-validator";

export class CreatePropertyDto {
  _id: string;

  @ApiProperty({ example: "Abc Q" })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ example: "xyzx" })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ example: "fdsahjtkt" })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({ example: "ahmedabad" })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({ example: "gujarat" })
  @IsNotEmpty()
  @IsString()
  state: string;

  @ApiProperty({ example: "361586" })
  @IsNotEmpty()
  pincode: string;

  @ApiProperty({ example: "apartment" })
  @IsNotEmpty()
  @IsString()
  propertytype: string;

  @ApiProperty({ example: "780000" })
  @IsNotEmpty()
  price: string;

  @ApiProperty({ example: "xyz.png" })
  @IsNotEmpty()
  @IsString()
  image: string;
}
