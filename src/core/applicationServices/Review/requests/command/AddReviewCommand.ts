export class AddReviewCommand {
  constructor(
    public readonly userId: string,
    public readonly coffeeId: string,
    public readonly rating: number,
    public readonly look: number,
    public readonly smell: number,
    public readonly taste: number
  ) {}
}
