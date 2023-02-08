import {
  isAuthenticated
} from "./chunk-JU2WBWK2.mjs";
import {
  UpdateCoffeeCommand
} from "./chunk-EB6IQL5Y.mjs";
import {
  AddReviewCommand
} from "./chunk-SE5MY7CD.mjs";
import {
  DeleteReviewCommand
} from "./chunk-LYZIYF25.mjs";
import {
  UpdateReviewCommand
} from "./chunk-SVQNGVSR.mjs";
import {
  GetUserReviewsQuery
} from "./chunk-L6A6B2LO.mjs";
import {
  CreateCoffeeCommand
} from "./chunk-2EE6L7RO.mjs";
import {
  DeleteCoffeeCommand
} from "./chunk-RRVSZO2D.mjs";
import {
  FindOneCoffeeRepositoryQuery
} from "./chunk-DZXH2SBN.mjs";
import {
  DOMAIN_APPLICATION_SERVICE_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  __decorateClass,
  __decorateParam
} from "./chunk-CT3ESYKG.mjs";

// src/ui/portal/Coffee/rest/v1/CoffeeController.ts
import { inject } from "inversify";
import {
  BaseHttpController,
  controller,
  httpDelete,
  httpGet,
  httpPost,
  httpPut,
  requestBody,
  requestParam
} from "inversify-express-utils";
import { OK } from "http-status-codes";
var CoffeeController = class extends BaseHttpController {
  constructor(coffeeService, reviewService) {
    super();
    this.coffeeService = coffeeService;
    this.reviewService = reviewService;
  }
  async GetAll() {
    const result = await this.coffeeService.findAll();
    return this.json(result, OK);
  }
  async get({ coffeeId }) {
    const result = await this.coffeeService.findOne(
      new FindOneCoffeeRepositoryQuery(coffeeId)
    );
    return this.json(result, OK);
  }
  async add({
    brand,
    name,
    type,
    imgUrl,
    description,
    burntLvl,
    reflink,
    CoffeeStatus
  }) {
    const coffeeCommand = new CreateCoffeeCommand(
      brand,
      name,
      type,
      imgUrl,
      description,
      burntLvl,
      reflink || "",
      CoffeeStatus
    );
    const result = await this.coffeeService.create(coffeeCommand);
    return this.json(result, OK);
  }
  async update(coffeeId, { coffee }) {
    const result = await this.coffeeService.update(
      new UpdateCoffeeCommand(coffee, coffeeId)
    );
    return this.json(result, OK);
  }
  async delete({ id }) {
    const result = await this.coffeeService.delete(new DeleteCoffeeCommand(id));
    return this.json(result, OK);
  }
  async GetUserReviews({ userId }) {
    const result = await this.reviewService.getAll(
      new GetUserReviewsQuery(userId)
    );
    return this.json(result, OK);
  }
  async addReview(coffeeId, { rating, look, smell, taste, userId }) {
    const result = await this.reviewService.add(
      new AddReviewCommand(userId, coffeeId, rating, look, smell, taste)
    );
    return this.json(result, OK);
  }
  async updateReview(reviewId, { review }) {
    const result = this.reviewService.update(
      new UpdateReviewCommand(review, reviewId)
    );
    return this.json(result, OK);
  }
  async deleteReview({ reviewId }) {
    const result = this.reviewService.delete(new DeleteReviewCommand(reviewId));
    return this.json(result, OK);
  }
  // @httpPost('/search')
  // async search(@requestParam() { sortBy, skip, take }: SearchQueryBody) {
  //   const _result = await this.CoffeeService.sortAndPaginate(
  //     new SearchQuery(sortBy, skip, take)
  //   );
  // }
};
__decorateClass([
  httpGet("/")
], CoffeeController.prototype, "GetAll", 1);
__decorateClass([
  httpGet("/:id"),
  __decorateParam(0, requestParam("id"))
], CoffeeController.prototype, "get", 1);
__decorateClass([
  httpPost("/create", isAuthenticated({ role: "MEMBER" /* MEMBER */ })),
  __decorateParam(0, requestBody())
], CoffeeController.prototype, "add", 1);
__decorateClass([
  httpPut("/:id/update", isAuthenticated({ role: "MEMBER" /* MEMBER */ })),
  __decorateParam(0, requestParam("id")),
  __decorateParam(1, requestBody())
], CoffeeController.prototype, "update", 1);
__decorateClass([
  httpDelete("/:id", isAuthenticated({ role: "MEMBER" /* MEMBER */ })),
  __decorateParam(0, requestParam())
], CoffeeController.prototype, "delete", 1);
__decorateClass([
  httpGet("/:userId/reviews/", isAuthenticated({ role: "MEMBER" /* MEMBER */ })),
  __decorateParam(0, requestParam())
], CoffeeController.prototype, "GetUserReviews", 1);
__decorateClass([
  httpPost(
    "/:coffeeId/reviews/add",
    isAuthenticated({ role: "MEMBER" /* MEMBER */ })
  ),
  __decorateParam(0, requestParam("coffeeId")),
  __decorateParam(1, requestBody())
], CoffeeController.prototype, "addReview", 1);
__decorateClass([
  httpPut(
    "/:coffeeId/reviews/:reviewId/update",
    isAuthenticated({ role: "MEMBER" /* MEMBER */ })
  ),
  __decorateParam(0, requestParam("reviewId")),
  __decorateParam(1, requestBody())
], CoffeeController.prototype, "updateReview", 1);
__decorateClass([
  httpDelete(
    "/:id/reviews/delete",
    isAuthenticated({ role: "MEMBER" /* MEMBER */ })
  ),
  __decorateParam(0, requestParam("reviewId"))
], CoffeeController.prototype, "deleteReview", 1);
CoffeeController = __decorateClass([
  controller("/v1/coffee"),
  __decorateParam(0, inject(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.COFFEE_SERVICE)),
  __decorateParam(1, inject(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.REVIEW_SERVICE))
], CoffeeController);

export {
  CoffeeController
};
//# sourceMappingURL=chunk-UE7N62WW.mjs.map