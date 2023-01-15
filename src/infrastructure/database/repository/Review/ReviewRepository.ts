import { inject } from 'inversify';

import { UpdateResult } from 'typeorm';

import { DOMAIN_MAPPING_IDENTIFIERS } from 'core/CoreModuleSymbols';
import { Review } from 'core/domain/Review/Review';
import { IReviewRepository } from 'core/domainServices/Review/IReviewRepository';
import { AddReviewRepositoryCommand } from 'core/domainServices/Review/requests/command/AddReviewRepositoryCommand';
import { Review as ReviewEntity } from 'infrastructure/database/entities/Review';
import { DBMapper } from 'infrastructure/database/mappings/DBMapper';
import { Repository } from 'infrastructure/database/repository/common/Repository';
import {
  INFRASTRUCTURE_IDENTIFIERS,
  DATABASE_MAPPING_IDENTIFIERS,
} from 'infrastructure/InfrastructureModuleSymbols';
import { GetReviewsRepositoryQuery } from 'core/domainServices/Review/requests/query/GetReviewsRepositoryQuery';
import { UpdateReviewRepositoryCommand } from 'core/domainServices/Review/requests/command/UpdateReviewRepositoryCommand';
import { DeleteReviewRepositoryCommand } from 'core/domainServices/Review/requests/command/DeleteReviewRepositoryCommand';
import { InfrastructureErrors } from 'infrastructure/common/errors/InfrastructureErrors';
import { BaseError } from 'core/common/errors/BaseError';

export class ReviewRepository
  extends Repository<ReviewEntity>
  implements IReviewRepository
{
  constructor(
    @inject(INFRASTRUCTURE_IDENTIFIERS.DB_MAPPER)
    private readonly dbMapper: DBMapper
  ) {
    super(ReviewEntity);
  }

  async getReviews({ userId }: GetReviewsRepositoryQuery): Promise<Review[]> {
    const reviews = await this.custom()
      .createQueryBuilder()
      .where('Review.id = :id ', { id: userId })
      .getMany();

    return this.dbMapper.mapper.map<ReviewEntity[], Review[]>(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.REVIEW_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.REVIEW_ENTITY,
      },
      reviews
    );
  }

  async addReview({
    rating,
    look,
    smell,
    taste,
    userId,
    coffeeId,
  }: AddReviewRepositoryCommand): Promise<Review> {
    const review = new ReviewEntity();

    review.userId = userId;
    review.coffeeId = coffeeId;
    review.look = look;
    review.smell = smell;
    review.taste = taste;
    review.rating = rating;

    const savedReview = await review.save();

    return this.dbMapper.mapper.map<ReviewEntity, Review>(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.REVIEW_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.REVIEW_ENTITY,
      },
      savedReview
    );
  }

  async updateReview({
    review,
    reviewId,
  }: UpdateReviewRepositoryCommand): Promise<UpdateResult> {
    const updatedReview = await this.custom()
      .createQueryBuilder()
      .update(ReviewEntity)
      .set({ ...review })
      .where('id = :id', { id: reviewId })
      .execute();

    return updatedReview;
  }

  async deleteReview({
    reviewId,
  }: DeleteReviewRepositoryCommand): Promise<Review> {
    const result = await this.custom()
      .createQueryBuilder()
      .where('Review.id = :id ', { reviewId })
      .getOne();

    if (!result) {
      throw new BaseError(
        InfrastructureErrors[InfrastructureErrors.REVIEW_NOT_FOUND]
      );
    }

    this.remove(result);

    return this.dbMapper.mapper.map<ReviewEntity, Review>(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.REVIEW_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.REVIEW_ENTITY,
      },
      result
    );
  }
}
