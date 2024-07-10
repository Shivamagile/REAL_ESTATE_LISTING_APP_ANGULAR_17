import { registerAs } from "@nestjs/config";
import { UserType } from "src/common/helpers/enum.helper";

export default registerAs("database", () => ({
  initialUser: {
    username: "Real Estate",
    email: "real.estate@yopmail.com",
    password: "User@123",
    role: UserType.Customer,
  },
  connectionString: process.env.CONNECTION_STRING,
}));
