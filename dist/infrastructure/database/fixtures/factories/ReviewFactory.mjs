import {
  coffeeDefined
} from "../../../../chunk-YR7WXAJ2.mjs";
import "../../../../chunk-WAAZK5KM.mjs";
import "../../../../chunk-BC5WD6ER.mjs";
import {
  Review
} from "../../../../chunk-J4L72MJX.mjs";
import "../../../../chunk-ZWUAFPJ7.mjs";
import "../../../../chunk-55VCL34Z.mjs";
import "../../../../chunk-KSFPCLC2.mjs";
import "../../../../chunk-VSL3XMPJ.mjs";
import "../../../../chunk-IV6S7MV4.mjs";

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