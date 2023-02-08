declare class SignUpCommand {
    readonly nickname: string;
    readonly email: string;
    readonly password: string;
    constructor(nickname: string, email: string, password: string);
}

export { SignUpCommand };
