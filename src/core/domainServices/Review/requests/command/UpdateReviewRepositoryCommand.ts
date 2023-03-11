import { Review } from 'core/domain/Review/Review';

export class UpdateReviewRepositoryCommand {
  constructor(
    public readonly review: Partial<Review>,
    public readonly reviewId: string
  ) {}
}
