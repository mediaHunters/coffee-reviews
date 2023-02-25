import {
  Review
} from "./chunk-66WMRE7E.mjs";
import {
  DATABASE_MAPPING_IDENTIFIERS
} from "./chunk-XLG4QA2P.mjs";
import {
  DOMAIN_MAPPING_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  __name
} from "./chunk-C22X3M6A.mjs";

// src/infrastructure/database/mappings/Review/ReviewEntityToReviewDomain.ts
var ReviewEntityToReviewDomain = /* @__PURE__ */ __name(() => ({
  configureMapping(mapper) {
    mapper.createMap(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.REVIEW_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.REVIEW_ENTITY
      },
      Review
    );
  }
}), "ReviewEntityToReviewDomain");

export {
  ReviewEntityToReviewDomain
};
//# sourceMappingURL=chunk-DNTQWXAD.mjs.map