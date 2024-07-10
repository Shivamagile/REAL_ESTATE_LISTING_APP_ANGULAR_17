import { HttpStatus } from "@nestjs/common";

// export const sucessResponse = {
//   CREATED: {
//     message: "Inserted successfully.",
//     statusCode: HttpStatus.CREATED,
//   },
//   UPDATED: { message: "Updated successfully.", statusCode: HttpStatus.OK },
//   DELETED: { message: "Deleted successfully.", statusCode: HttpStatus.OK },
// }
export function successResponse(
  status: HttpStatus.OK,
  message: string,
  data: any
) {
  return { status, message, data };
}

export const sucessResponse = {
  CREATED: {
    message: "Inserted successfully.",
    statusCode: HttpStatus.CREATED,
  },
  CREATE_PPROPERTIES: {
    statusCode: HttpStatus.CREATED,
    message: "Property created successfully",
    data: {},
  },
  CREATE_ENQUIRY: {
    statusCode: HttpStatus.CREATED,
    message: "Enquiry created successfully",
    data: {},
  },
  PROPERTY_UPDATE: {
    statusCode: HttpStatus.OK,
    message: "Property updated successfully",
    data: {},
  },
  PROPERTY_DELETE: {
    statusCode: HttpStatus.OK,
    message: "Property delete successfully",
    data: {},
  },
  SUCCESS: {
    message: "Success.",
    statusCode: HttpStatus.OK,
  },
  UPDATED: { message: "Updated successfully.", statusCode: HttpStatus.OK },
  DELETED: { message: "Deleted successfully.", statusCode: HttpStatus.OK },
  CREATE_USER: {
    statusCode: HttpStatus.CREATED,
    message: "User created successfully",
    data: {},
  },
};
