export class AddReviewCommandBody {
  constructor(
    public readonly rating: number,
    public readonly acidity: number,
    public readonly smell: number,
    public readonly taste: number,
    public readonly userId: string
  ) {}
}
