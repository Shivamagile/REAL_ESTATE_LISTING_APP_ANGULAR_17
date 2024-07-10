import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import {
  USER_DELETED,
  USER_INSERTED,
  USER_LISTED,
  USER_UPDATED,
} from "src/common/constants/response.constant";
import { ResponseMessage } from "src/common/decorators/response.decorator";
import { Public } from "src/security/auth/auth.decorator";

@Controller("users")
@ApiTags("users")
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("create")
  @ResponseMessage(USER_INSERTED)
  @Public()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get("getAll")
  @ResponseMessage(USER_LISTED)
  @Public()
  findAll() {
    return this.usersService.findAll();
  }

  @Get("get/:id")
  @ResponseMessage(USER_LISTED)
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(id);
  }

  // @Patch('update/:id')
  // @ResponseMessage(USER_UPDATED)
  // @UsePipes(new ValidationPipe({ transform: true }))
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(id, updateUserDto);
  // }

  // @Delete('delete/:id')
  // @ResponseMessage(USER_DELETED)
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(id);
  // }
}
