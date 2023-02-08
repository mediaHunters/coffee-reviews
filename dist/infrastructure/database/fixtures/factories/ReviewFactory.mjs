import {
  coffeeDefined
} from "../../../../chunk-FIVM5LTG.mjs";
import {
  Review
} from "../../../../chunk-T2N4V2W6.mjs";
import "../../../../chunk-PUCYYTR3.mjs";
import "../../../../chunk-BC5WD6ER.mjs";
import "../../../../chunk-55VCL34Z.mjs";
import "../../../../chunk-ZWUAFPJ7.mjs";
import "../../../../chunk-JXCWUIPY.mjs";
import "../../../../chunk-CT3ESYKG.mjs";

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