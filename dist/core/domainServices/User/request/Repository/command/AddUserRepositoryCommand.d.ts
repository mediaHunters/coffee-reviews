declare class AddUserRepositoryCommand {
    readonly nickname: string;
    readonly email: string;
    readonly password: string;
    readonly roleId: string;
    constructor(nickname: string, email: string, password: string, roleId: string);
}

export { AddUserRepositoryCommand };
