import { Review } from 'core/domain/Review/Review';

export class UpdateReviewCommandBody {
  constructor(public readonly review: Partial<Review>) {}
}
