import {
  ReviewRepository
} from "./chunk-AUO47KTP.mjs";
import {
  ReviewService
} from "./chunk-Z7WDD3LP.mjs";
import {
  BaseModule
} from "./chunk-T62UMP5Y.mjs";
import {
  DOMAIN_APPLICATION_SERVICE_IDENTIFIERS,
  DOMAIN_REPOSITORY_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  __name
} from "./chunk-C22X3M6A.mjs";

// src/dependency/shared/Review/ReviewModule.ts
var ReviewModule = class extends BaseModule {
  constructor() {
    super((bind) => {
      this.init(bind);
    });
  }
  init(bind) {
    this.provideReviewService(bind);
    this.provideReviewRepository(bind);
  }
  provideReviewService(bind) {
    bind(
      DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.REVIEW_SERVICE
    ).to(ReviewService);
  }
  provideReviewRepository(bind) {
    bind(DOMAIN_REPOSITORY_IDENTIFIERS.REVIEW_REPOSITORY).to(
      ReviewRepository
    );
  }
};
__name(ReviewModule, "ReviewModule");

export {
  ReviewModule
};
//# sourceMappingURL=chunk-4LKA2WYQ.mjs.map