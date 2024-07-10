"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sucessResponse = exports.successResponse = void 0;
const common_1 = require("@nestjs/common");
function successResponse(status, message, data) {
    return { status, message, data };
}
exports.successResponse = successResponse;
exports.sucessResponse = {
    CREATED: {
        message: "Inserted successfully.",
        statusCode: common_1.HttpStatus.CREATED,
    },
    CREATE_PPROPERTIES: {
        statusCode: common_1.HttpStatus.CREATED,
        message: "Property created successfully",
        data: {},
    },
    CREATE_ENQUIRY: {
        statusCode: common_1.HttpStatus.CREATED,
        message: "Enquiry created successfully",
        data: {},
    },
    PROPERTY_UPDATE: {
        statusCode: common_1.HttpStatus.OK,
        message: "Property updated successfully",
        data: {},
    },
    PROPERTY_DELETE: {
        statusCode: common_1.HttpStatus.OK,
        message: "Property delete successfully",
        data: {},
    },
    SUCCESS: {
        message: "Success.",
        statusCode: common_1.HttpStatus.OK,
    },
    UPDATED: { message: "Updated successfully.", statusCode: common_1.HttpStatus.OK },
    DELETED: { message: "Deleted successfully.", statusCode: common_1.HttpStatus.OK },
    CREATE_USER: {
        statusCode: common_1.HttpStatus.CREATED,
        message: "User created successfully",
        data: {},
    },
};
//# sourceMappingURL=success.helper.js.map