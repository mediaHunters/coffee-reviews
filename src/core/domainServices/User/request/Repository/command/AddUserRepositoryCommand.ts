export class AddUserRepositoryCommand {
  constructor(
    public readonly nickname: string,
    public readonly email: string,
    public readonly password: string,
    public readonly roleId: string
  ) {}
}
