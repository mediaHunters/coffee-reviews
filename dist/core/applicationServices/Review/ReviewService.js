"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);

// src/core/applicationServices/Review/ReviewService.ts
var ReviewService_exports = {};
__export(ReviewService_exports, {
  ReviewService: () => ReviewService
});
module.exports = __toCommonJS(ReviewService_exports);
var import_inversify = require("inversify");

// src/core/CoreModuleSymbols.ts
var DOMAIN_APPLICATION_SERVICE_IDENTIFIERS = {
  USER_SERVICE: Symbol.for("UserService"),
  AUTHENTICATION_SERVICE: Symbol.for("AuthenticationService"),
  COFFEE_SERVICE: Symbol.for("CoffeeService"),
  REVIEW_SERVICE: Symbol.for("ReviewService")
};
var DOMAIN_MAPPING_IDENTIFIERS = {
  USER_DOMAIN: Symbol.for("UserDomain"),
  ROLE_DOMAIN: Symbol.for("RoleDomain"),
  COFFEE_DOMAIN: Symbol.for("CoffeeDomain"),
  REVIEW_DOMAIN: Symbol.for("ReviewDomain")
};
var DOMAIN_REPOSITORY_IDENTIFIERS = {
  ROLE_REPOSITORY: Symbol.for("RoleRepository"),
  USER_REPOSITORY: Symbol.for("UserRepository"),
  COFFEE_REPOSITORY: Symbol.for("CoffeeRepository"),
  REVIEW_REPOSITORY: Symbol.for("ReviewRepository")
};
var DOMAIN_UNIT_OF_WORK_IDENTIFIERS = {
  USER_UNIT_OF_WORK: Symbol.for("UserUnitOfWork"),
  COFFEE_UNIT_OF_WORK: Symbol.for("CoffeeUnitOfWork")
};

// src/core/domainServices/Review/requests/command/AddReviewRepositoryCommand.ts
var AddReviewRepositoryCommand = class {
  constructor(userId, coffeeId, rating, look, smell, taste) {
    this.userId = userId;
    this.coffeeId = coffeeId;
    this.rating = rating;
    this.look = look;
    this.smell = smell;
    this.taste = taste;
  }
};

// src/core/domainServices/Review/requests/query/GetReviewsRepositoryQuery.ts
var GetReviewsRepositoryQuery = class {
  constructor(userId) {
    this.userId = userId;
  }
};

// src/core/domainServices/Review/requests/command/UpdateReviewRepositoryCommand.ts
var UpdateReviewRepositoryCommand = class {
  constructor(review, reviewId) {
    this.review = review;
    this.reviewId = reviewId;
  }
};

// src/core/domainServices/Review/requests/command/DeleteReviewRepositoryCommand.ts
var DeleteReviewRepositoryCommand = class {
  constructor(reviewId) {
    this.reviewId = reviewId;
  }
};

// src/core/applicationServices/Review/ReviewService.ts
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
  (0, import_inversify.injectable)(),
  __decorateParam(0, (0, import_inversify.inject)(DOMAIN_REPOSITORY_IDENTIFIERS.REVIEW_REPOSITORY))
], ReviewService);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ReviewService
});
//# sourceMappingURL=ReviewService.js.map