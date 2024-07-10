import { HttpException, HttpStatus } from "@nestjs/common";

export const TypeExceptions = {
  UserNotFound(): any {
    return new HttpException(
      {
        message: "User not found",
        error: "Not Found",
        statusCode: HttpStatus.NOT_FOUND,
      },
      HttpStatus.NOT_FOUND
    );
  },

  PropertyNotFound(): any {
    return new HttpException(
      {
        message: "Property not found",
        error: "PropertyNotFound",
        statusCode: HttpStatus.NOT_FOUND,
      },
      HttpStatus.NOT_FOUND
    );
  },

  UserAlreadyExists(): any {
    return new HttpException(
      {
        message: "User already exists",
        error: "UserAlreadyExists",
        statusCode: HttpStatus.CONFLICT,
      },
      HttpStatus.CONFLICT
    );
  },

  InvalidFile(): any {
    return new HttpException(
      {
        message: "Uploaded file is invalid",
        error: "InvalidFile",
        statusCode: HttpStatus.BAD_REQUEST,
      },
      HttpStatus.BAD_REQUEST
    );
  },

  SomethingWentWrong(): any {
    return new HttpException(
      {
        statusCode: HttpStatus.BAD_REQUEST,
        message: "Something went wrong",
        data: {},
      },
      HttpStatus.BAD_REQUEST
    );
  },
};
