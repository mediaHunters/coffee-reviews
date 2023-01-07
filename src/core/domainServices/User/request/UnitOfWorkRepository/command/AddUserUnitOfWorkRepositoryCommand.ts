export class AddUserUnitOfWorkRepositoryCommand {
  constructor(
    public readonly email: string,
    public readonly password: string,
    public readonly nickname: string
  ) {}
}
