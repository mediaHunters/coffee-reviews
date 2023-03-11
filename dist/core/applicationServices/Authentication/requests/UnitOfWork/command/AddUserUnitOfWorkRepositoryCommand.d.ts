declare class AddUserUnitOfWorkRepositoryCommand {
    readonly nickname: string;
    readonly email: string;
    readonly password: string;
    constructor(nickname: string, email: string, password: string);
}

export { AddUserUnitOfWorkRepositoryCommand };
