declare class AddUserUnitOfWorkRepositoryCommand {
    readonly email: string;
    readonly password: string;
    readonly nickname: string;
    constructor(email: string, password: string, nickname: string);
}

export { AddUserUnitOfWorkRepositoryCommand };
