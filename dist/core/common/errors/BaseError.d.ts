declare class BaseError implements Error {
    readonly code?: string | undefined;
    readonly message: string;
    readonly name: string;
    constructor(code?: string | undefined, message?: string, name?: string);
}

export { BaseError };
