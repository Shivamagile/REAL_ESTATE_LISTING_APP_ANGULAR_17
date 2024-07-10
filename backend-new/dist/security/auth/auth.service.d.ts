import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "src/common/dto/common.dto";
import { LoggerService } from "src/common/logger/logger.service";
import { UsersService } from "src/users/users.service";
export declare class AuthService {
    private userService;
    private jwtService;
    private myLogger;
    constructor(userService: UsersService, jwtService: JwtService, myLogger: LoggerService);
    login(params: LoginDto): Promise<any>;
    generateAuthToken(user: any): string;
}
