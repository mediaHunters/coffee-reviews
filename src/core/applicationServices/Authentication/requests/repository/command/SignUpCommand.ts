export class SignUpCommand {
  constructor(
    public readonly nickname: string,
    public readonly email: string,
    public readonly password: string
  ) {}
}
