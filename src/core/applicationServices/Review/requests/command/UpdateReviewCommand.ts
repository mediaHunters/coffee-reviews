import { Review } from 'core/domain/Review/Review';

export class UpdateReviewCommand {
  constructor(
    public readonly review: Partial<Review>,
    public readonly reviewId: string
  ) {}
}
