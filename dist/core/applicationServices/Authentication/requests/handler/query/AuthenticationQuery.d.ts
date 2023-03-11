declare class AuthenticationQuery {
    readonly email: string;
    readonly password: string;
    constructor(email: string, password: string);
}

export { AuthenticationQuery };
