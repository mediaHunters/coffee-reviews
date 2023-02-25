import {
  coffeeDefined
} from "../../../../chunk-TAR3W2IM.mjs";
import {
  Review
} from "../../../../chunk-HX3VYCCS.mjs";
import "../../../../chunk-WMYDNDP5.mjs";
import "../../../../chunk-BC5WD6ER.mjs";
import "../../../../chunk-ZWUAFPJ7.mjs";
import "../../../../chunk-55VCL34Z.mjs";
import "../../../../chunk-YM6N2TQQ.mjs";
import "../../../../chunk-RIQVZG47.mjs";
import "../../../../chunk-C22X3M6A.mjs";

// src/infrastructure/database/fixtures/factories/ReviewFactory.ts
import { define } from "typeorm-seeding";
define(Review, () => {
  const review = new Review();
  review.coffee = coffeeDefined;
  review.rating = 4;
  review.userId = "ewjoij12l;1@#EWQ";
  return review;
});
//# sourceMappingURL=ReviewFactory.mjs.map