export class Review {
  constructor(
    public readonly id: string,
    public readonly look: number,
    public readonly smell: number,
    public readonly taste: number,
    public readonly rating: number,
    public readonly coffeeId: string,
    public readonly userId: string
  ) {}
}
