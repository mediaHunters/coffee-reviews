export class CreateCoffeeRepositoryCommand {
  constructor(
    public readonly brand: string,
    public readonly name: string,
    public readonly type: string,
    public readonly imgUrl: string,
    public readonly description: string,
    public readonly burntLvl: string,
    public readonly reflink: string,
    public readonly CoffeeStatus: string
  ) {}
}
