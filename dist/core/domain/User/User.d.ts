declare class User {
    readonly id: string;
    readonly nickname: string;
    readonly email: string;
    readonly role: string;
    readonly password: string;
    readonly lastName?: string | undefined;
    readonly firstName?: string | undefined;
    constructor(id: string, nickname: string, email: string, role: string, password: string, lastName?: string | undefined, firstName?: string | undefined);
}

export { User };
