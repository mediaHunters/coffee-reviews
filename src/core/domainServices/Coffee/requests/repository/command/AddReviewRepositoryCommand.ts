export class AddCoffeeReviewRepositoryCommand {
  constructor(
    public readonly userId: string,
    public readonly coffeeId: string,
    public readonly acidity: number,
    public readonly smell: number,
    public readonly taste: number
  ) {}
}
