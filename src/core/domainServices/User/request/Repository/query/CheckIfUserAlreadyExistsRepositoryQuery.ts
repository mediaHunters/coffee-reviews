export class CheckIfUserAlreadyExistsRepositoryQuery {
  constructor(
    public readonly nickname: string,
    public readonly email: string
  ) {}
}
