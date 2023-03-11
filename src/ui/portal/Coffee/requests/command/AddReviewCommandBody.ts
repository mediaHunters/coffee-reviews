export class AddReviewCommandBody {
  constructor(
    public readonly rating: number,
    public readonly look: number,
    public readonly smell: number,
    public readonly taste: number,
    public readonly userId: string
  ) {}
}
