export class AddReviewCommand {
  constructor(
    public readonly userId: string,
    public readonly coffeeId: string,
    public readonly rating: number,
    public readonly acidity: number,
    public readonly smell: number,
    public readonly taste: number
  ) {}
}
