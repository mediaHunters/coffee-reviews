import { User } from '../../../../../../../core/domain/User/User.js';

declare class Authentication {
    readonly token: string;
    readonly user: User;
    constructor(token: string, user: User);
}

export { Authentication };
