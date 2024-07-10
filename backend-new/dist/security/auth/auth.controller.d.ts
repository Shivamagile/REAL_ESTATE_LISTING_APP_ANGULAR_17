import { AuthService } from "./auth.service";
import { LoginDto } from "src/common/dto/common.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(params: LoginDto): Promise<any>;
}
