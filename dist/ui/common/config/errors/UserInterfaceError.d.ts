import { BaseError } from '../../../../core/common/errors/BaseError.js';

declare class UserInterfaceError extends BaseError {
    readonly status: number;
    readonly code?: string | undefined;
    readonly message: string;
    readonly name: string;
    constructor(status: number, code?: string | undefined, message?: string, name?: string);
}

export { UserInterfaceError };
