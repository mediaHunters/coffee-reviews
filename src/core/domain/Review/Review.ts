export class Review {
  constructor(
    public readonly id: number,
    public readonly rating: number,
    public readonly coffeeId: number,
    public readonly creatorId: number
  ) {}
}
