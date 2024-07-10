declare const _default: (() => {
    env: string;
    version: string;
    name: string;
    description: string;
    url: string;
    port: string | number;
    enableCors: string | boolean;
    throttler: {
        ttlTime: string | number;
        requestCount: string | number;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    env: string;
    version: string;
    name: string;
    description: string;
    url: string;
    port: string | number;
    enableCors: string | boolean;
    throttler: {
        ttlTime: string | number;
        requestCount: string | number;
    };
}>;
export default _default;
