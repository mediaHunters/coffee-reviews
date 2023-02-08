import {
  ReviewRepository
} from "./chunk-RZXL5JDE.mjs";
import {
  ReviewService
} from "./chunk-BDBYW4WM.mjs";
import {
  BaseModule
} from "./chunk-5UD35LCP.mjs";
import {
  DOMAIN_APPLICATION_SERVICE_IDENTIFIERS,
  DOMAIN_REPOSITORY_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";

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

export {
  ReviewModule
};
//# sourceMappingURL=chunk-7UF3B2ZS.mjs.map