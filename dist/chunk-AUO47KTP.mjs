import {
  Repository
} from "./chunk-HYGVCY55.mjs";
import {
  InfrastructureErrors
} from "./chunk-ENM6OMP3.mjs";
import {
  Review
} from "./chunk-HX3VYCCS.mjs";
import {
  DATABASE_MAPPING_IDENTIFIERS,
  INFRASTRUCTURE_IDENTIFIERS
} from "./chunk-XLG4QA2P.mjs";
import {
  BaseError
} from "./chunk-2CGUJ2VR.mjs";
import {
  DOMAIN_MAPPING_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  __decorateClass,
  __decorateParam,
  __name
} from "./chunk-C22X3M6A.mjs";

// src/infrastructure/database/repository/Review/ReviewRepository.ts
import { inject } from "inversify";
var ReviewRepository = class extends Repository {
  constructor(dbMapper) {
    super(Review);
    this.dbMapper = dbMapper;
  }
  async getReviews({ userId }) {
    const reviews = await this.custom().createQueryBuilder().where("Review.userId = :userId ", { userId }).getMany();
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.REVIEW_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.REVIEW_ENTITY
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
    coffeeId
  }) {
    const review = new Review();
    review.userId = userId;
    review.coffeeId = coffeeId;
    review.look = look;
    review.smell = smell;
    review.taste = taste;
    review.rating = rating;
    const savedReview = await review.save();
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.REVIEW_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.REVIEW_ENTITY
      },
      savedReview
    );
  }
  async updateReview({
    review,
    reviewId
  }) {
    const updatedReview = await this.custom().createQueryBuilder().update(Review).set({ ...review }).where("id = :reviewId", { reviewId }).execute();
    return updatedReview;
  }
  async deleteReview({
    reviewId
  }) {
    const result = await this.custom().createQueryBuilder().where("Review.id = :reviewsId ", { reviewId }).getOne();
    if (!result) {
      throw new BaseError(
        InfrastructureErrors[4 /* REVIEW_NOT_FOUND */]
      );
    }
    this.remove(result);
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.REVIEW_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.REVIEW_ENTITY
      },
      result
    );
  }
};
__name(ReviewRepository, "ReviewRepository");
ReviewRepository = __decorateClass([
  __decorateParam(0, inject(INFRASTRUCTURE_IDENTIFIERS.DB_MAPPER))
], ReviewRepository);

export {
  ReviewRepository
};
//# sourceMappingURL=chunk-AUO47KTP.mjs.map