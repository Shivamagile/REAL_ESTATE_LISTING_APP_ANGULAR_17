import { HttpStatus } from "@nestjs/common";
export declare function successResponse(status: HttpStatus.OK, message: string, data: any): {
    status: HttpStatus.OK;
    message: string;
    data: any;
};
export declare const sucessResponse: {
    CREATED: {
        message: string;
        statusCode: HttpStatus;
    };
    CREATE_PPROPERTIES: {
        statusCode: HttpStatus;
        message: string;
        data: {};
    };
    CREATE_ENQUIRY: {
        statusCode: HttpStatus;
        message: string;
        data: {};
    };
    PROPERTY_UPDATE: {
        statusCode: HttpStatus;
        message: string;
        data: {};
    };
    PROPERTY_DELETE: {
        statusCode: HttpStatus;
        message: string;
        data: {};
    };
    SUCCESS: {
        message: string;
        statusCode: HttpStatus;
    };
    UPDATED: {
        message: string;
        statusCode: HttpStatus;
    };
    DELETED: {
        message: string;
        statusCode: HttpStatus;
    };
    CREATE_USER: {
        statusCode: HttpStatus;
        message: string;
        data: {};
    };
};
