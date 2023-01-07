export class AuthenticationQuery {
  constructor(
    public readonly email: string,
    public readonly password: string
  ) {}
}
