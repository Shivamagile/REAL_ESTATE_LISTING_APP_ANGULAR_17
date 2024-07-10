import { UserType } from "src/common/helpers/enum.helper";
export declare class CreateUserDto {
    username: string;
    role: UserType;
    email: string;
    password: string;
}
