import {
  GetReviewsRepositoryQuery
} from "./chunk-RMFJAZST.mjs";
import {
  AddReviewRepositoryCommand
} from "./chunk-3LSITSQT.mjs";
import {
  DeleteReviewRepositoryCommand
} from "./chunk-TG3IONQT.mjs";
import {
  UpdateReviewRepositoryCommand
} from "./chunk-4TO2D4LE.mjs";
import {
  DOMAIN_REPOSITORY_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  __decorateClass,
  __decorateParam
} from "./chunk-CT3ESYKG.mjs";

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
ReviewService = __decorateClass([
  injectable(),
  __decorateParam(0, inject(DOMAIN_REPOSITORY_IDENTIFIERS.REVIEW_REPOSITORY))
], ReviewService);

export {
  ReviewService
};
//# sourceMappingURL=chunk-BDBYW4WM.mjs.map