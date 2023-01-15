import { UpdateResult } from 'typeorm';

import { Review } from 'core/domain/Review/Review';
import { AddReviewRepositoryCommand } from 'core/domainServices/Review/requests/command/AddReviewRepositoryCommand';
import { UpdateReviewRepositoryCommand } from 'core/domainServices/Review/requests/command/UpdateReviewRepositoryCommand';
import { GetReviewsRepositoryQuery } from 'core/domainServices/Review/requests/query/GetReviewsRepositoryQuery';
import { DeleteReviewRepositoryCommand } from 'core/domainServices/Review/requests/command/DeleteReviewRepositoryCommand';

export interface IReviewRepository {
  getReviews(query: GetReviewsRepositoryQuery): Promise<Review[]>;
  addReview(command: AddReviewRepositoryCommand): Promise<Review>;
  updateReview(command: UpdateReviewRepositoryCommand): Promise<UpdateResult>;
  deleteReview(command: DeleteReviewRepositoryCommand): Promise<Review>;
}
