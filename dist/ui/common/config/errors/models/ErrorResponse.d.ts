declare class ErrorResponse {
    readonly code?: string | undefined;
    readonly message?: string | undefined;
    constructor(code?: string | undefined, message?: string | undefined);
}

export { ErrorResponse };
