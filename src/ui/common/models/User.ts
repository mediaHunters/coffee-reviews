export class User {
  constructor(
    public readonly id: number,
    public readonly nickname: string,
    public readonly email: string,
    public readonly role: string
  ) {}
}
