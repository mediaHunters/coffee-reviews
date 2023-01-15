export class User {
  constructor(
    public readonly id: string,
    public readonly nickname: string,
    public readonly email: string,
    public readonly role: string,
    public readonly password: string,
    public readonly lastName?: string,
    public readonly firstName?: string
  ) {}
}
