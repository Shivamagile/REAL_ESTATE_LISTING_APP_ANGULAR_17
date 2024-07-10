import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "src/common/dto/common.dto";
import { LoggerService } from "src/common/logger/logger.service";
import { UsersService } from "src/users/users.service";
import { JwtPayload } from "src/common//interfaces/jwt.interface";

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private myLogger: LoggerService
  ) {
    this.myLogger.setContext(AuthService.name);
  }

  async login(params: LoginDto): Promise<any> {
    let user: any = await this.userService.login(params);
    // const accessToken = this.generateAuthToken(user);
    // user.accessToken = accessToken;
    return user;
  }

  generateAuthToken(user: any) {
    const payload: JwtPayload = {
      id: user._id,
      userId: user._id,
      email: user.email,
      userType: user.userType,
    };
    return this.jwtService.sign(payload);
  }
}
