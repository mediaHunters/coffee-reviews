import {
  isAuthenticated
} from "./chunk-WXBZWQBY.mjs";
import {
  AddReviewCommand
} from "./chunk-QUOTCBOI.mjs";
import {
  DeleteReviewCommand
} from "./chunk-33AFUCYN.mjs";
import {
  UpdateReviewCommand
} from "./chunk-I3RERLL5.mjs";
import {
  GetUserReviewsQuery
} from "./chunk-IOHLQIPX.mjs";
import {
  CreateCoffeeCommand
} from "./chunk-XHHTRPTP.mjs";
import {
  DeleteCoffeeCommand
} from "./chunk-GEWZTOIF.mjs";
import {
  UpdateCoffeeCommand
} from "./chunk-7UAE7MHQ.mjs";
import {
  FindOneCoffeeRepositoryQuery
} from "./chunk-HLNIPPCR.mjs";
import {
  DOMAIN_APPLICATION_SERVICE_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  __decorateClass,
  __decorateParam,
  __name
} from "./chunk-C22X3M6A.mjs";

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
__name(CoffeeController, "CoffeeController");
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
//# sourceMappingURL=chunk-GNUOIYNC.mjs.map