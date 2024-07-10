import { UserType } from "src/common/helpers/enum.helper";
declare const _default: (() => {
    initialUser: {
        username: string;
        email: string;
        password: string;
        role: UserType;
    };
    connectionString: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    initialUser: {
        username: string;
        email: string;
        password: string;
        role: UserType;
    };
    connectionString: string;
}>;
export default _default;
