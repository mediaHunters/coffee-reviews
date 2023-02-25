import {
  DeleteReviewRepositoryCommand
} from "./chunk-CUL434AY.mjs";
import {
  UpdateReviewRepositoryCommand
} from "./chunk-WIVQHJAW.mjs";
import {
  GetReviewsRepositoryQuery
} from "./chunk-2UQA45D3.mjs";
import {
  AddReviewRepositoryCommand
} from "./chunk-BKSI3N7Y.mjs";
import {
  DOMAIN_REPOSITORY_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  __decorateClass,
  __decorateParam,
  __name
} from "./chunk-C22X3M6A.mjs";

// src/core/applicationServices/Review/ReviewService.ts
import { inject, injectable } from "inversify";
var ReviewService = class {
  constructor(reviewRepository) {
    this.reviewRepository = reviewRepository;
  }
  getAll({ userId }) {
    return this.reviewRepository.getReviews(
      new GetReviewsRepositoryQuery(userId)
    );
  }
  add({
    userId,
    coffeeId,
    rating,
    look,
    smell,
    taste
  }) {
    return this.reviewRepository.addReview(
      new AddReviewRepositoryCommand(
        userId,
        coffeeId,
        rating,
        look,
        smell,
        taste
      )
    );
  }
  update({ reviewId, review }) {
    return this.reviewRepository.updateReview(
      new UpdateReviewRepositoryCommand(review, reviewId)
    );
  }
  delete({ reviewId }) {
    return this.reviewRepository.deleteReview(
      new DeleteReviewRepositoryCommand(reviewId)
    );
  }
};
__name(ReviewService, "ReviewService");
ReviewService = __decorateClass([
  injectable(),
  __decorateParam(0, inject(DOMAIN_REPOSITORY_IDENTIFIERS.REVIEW_REPOSITORY))
], ReviewService);

export {
  ReviewService
};
//# sourceMappingURL=chunk-Z7WDD3LP.mjs.map