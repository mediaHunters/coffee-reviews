import { inject, injectable } from 'inversify';

import { UpdateResult } from 'typeorm';

import { IReviewService } from 'core/applicationServices/Review/IReviewService';
import { AddReviewCommand } from 'core/applicationServices/Review/requests/command/AddReviewCommand';
import { DOMAIN_REPOSITORY_IDENTIFIERS } from 'core/CoreModuleSymbols';
import { Review } from 'core/domain/Review/Review';
import { IReviewRepository } from 'core/domainServices/Review/IReviewRepository';
import { AddReviewRepositoryCommand } from 'core/domainServices/Review/requests/command/AddReviewRepositoryCommand';
import { GetReviewsRepositoryQuery } from 'core/domainServices/Review/requests/query/GetReviewsRepositoryQuery';
import { GetUserReviewsQuery } from 'core/applicationServices/Review/requests/query/GetUserReviewsQuery';
import { UpdateReviewCommand } from 'core/applicationServices/Review/requests/command/UpdateReviewCommand';
import { UpdateReviewRepositoryCommand } from 'core/domainServices/Review/requests/command/UpdateReviewRepositoryCommand';
import { DeleteReviewCommand } from 'core/applicationServices/Review/requests/command/DeleteReviewCommand';
import { DeleteReviewRepositoryCommand } from 'core/domainServices/Review/requests/command/DeleteReviewRepositoryCommand';

@injectable()
export class ReviewService implements IReviewService {
  constructor(
    @inject(DOMAIN_REPOSITORY_IDENTIFIERS.REVIEW_REPOSITORY)
    private readonly reviewRepository: IReviewRepository
  ) {}

  getAll({ userId }: GetUserReviewsQuery): Promise<Review[]> {
    return this.reviewRepository.getReviews(
      new GetReviewsRepositoryQuery(userId)
    );
  }

  add({
    userId,
    coffeeId,
    rating,
    acidity,
    smell,
    taste,
  }: AddReviewCommand): Promise<Review> {
    return this.reviewRepository.addReview(
      new AddReviewRepositoryCommand(
        userId,
        coffeeId,
        rating,
        acidity,
        smell,
        taste
      )
    );
  }

  update({ reviewId, review }: UpdateReviewCommand): Promise<UpdateResult> {
    return this.reviewRepository.updateReview(
      new UpdateReviewRepositoryCommand(review, reviewId)
    );
  }

  delete({ reviewId }: DeleteReviewCommand): Promise<Review> {
    return this.reviewRepository.deleteReview(
      new DeleteReviewRepositoryCommand(reviewId)
    );
  }
}
