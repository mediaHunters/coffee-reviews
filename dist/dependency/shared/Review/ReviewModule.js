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

// src/dependency/shared/Review/ReviewModule.ts
var ReviewModule_exports = {};
__export(ReviewModule_exports, {
  ReviewModule: () => ReviewModule
});
module.exports = __toCommonJS(ReviewModule_exports);

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

// src/dependency/BaseModule.ts
var import_inversify = require("inversify");
var BaseModule = class extends import_inversify.ContainerModule {
};

// src/infrastructure/database/repository/Review/ReviewRepository.ts
var import_inversify3 = require("inversify");

// src/infrastructure/database/entities/Review.ts
var import_typeorm2 = require("typeorm");

// src/infrastructure/database/entities/Base.ts
var import_typeorm = require("typeorm");
var Model = class extends import_typeorm.BaseEntity {
};
__decorateClass([
  (0, import_typeorm.PrimaryGeneratedColumn)("uuid")
], Model.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.CreateDateColumn)()
], Model.prototype, "createdAt", 2);
__decorateClass([
  (0, import_typeorm.UpdateDateColumn)()
], Model.prototype, "updatedAt", 2);

// src/infrastructure/database/entities/Review.ts
var Review = class extends Model {
};
__decorateClass([
  (0, import_typeorm2.Column)("decimal")
], Review.prototype, "rating", 2);
__decorateClass([
  (0, import_typeorm2.Column)("decimal")
], Review.prototype, "look", 2);
__decorateClass([
  (0, import_typeorm2.Column)("decimal")
], Review.prototype, "smell", 2);
__decorateClass([
  (0, import_typeorm2.Column)("decimal")
], Review.prototype, "taste", 2);
__decorateClass([
  (0, import_typeorm2.Column)("text")
], Review.prototype, "coffeeId", 2);
__decorateClass([
  (0, import_typeorm2.ManyToOne)("Coffee", (Coffee) => Coffee.reviews, {
    onDelete: "CASCADE"
  }),
  (0, import_typeorm2.JoinColumn)({ name: "coffee", referencedColumnName: "id" })
], Review.prototype, "coffee", 2);
__decorateClass([
  (0, import_typeorm2.Column)("text", { nullable: true })
], Review.prototype, "userId", 2);
__decorateClass([
  (0, import_typeorm2.ManyToOne)("User", (user) => user.reviews),
  (0, import_typeorm2.JoinColumn)({ name: "user", referencedColumnName: "id" })
], Review.prototype, "user", 2);
Review = __decorateClass([
  (0, import_typeorm2.Entity)()
], Review);

// src/infrastructure/database/repository/common/Repository.ts
var import_typeorm3 = require("typeorm");
var import_inversify2 = require("inversify");
var Repository = class extends import_typeorm3.AbstractRepository {
  constructor(entity) {
    super();
    this.entity = entity;
  }
  async find(id) {
    return this.getDBRepository().findOne(id);
  }
  findBy(condition) {
    return this.getDBRepository().find(condition);
  }
  async findMany(ids) {
    return this.getDBRepository().findByIds(ids);
  }
  async findAll() {
    return this.getDBRepository().find();
  }
  async query(query, parameters) {
    return this.getDBRepository().query(query, parameters);
  }
  async update(condition, data) {
    return !!await this.getDBRepository().update(condition, data);
  }
  async updateAll(condition, data) {
    return !!await this.getDBRepository().update(condition, data);
  }
  async delete(condition) {
    return !!await this.getDBRepository().delete(condition);
  }
  async deleteAll(condition) {
    return !!await this.getDBRepository().delete(condition);
  }
  async remove(entity) {
    return this.getDBRepository().remove(entity);
  }
  async removeAll(entities) {
    return this.getDBRepository().remove(entities);
  }
  async save(entity) {
    return this.getDBRepository().save(entity);
  }
  async saveAll(entities) {
    return this.getDBRepository().save(entities);
  }
  custom() {
    return this.getDBRepository();
  }
  getConnectionName() {
    return process.env.ORM_CONNECTION;
  }
  getDBRepository() {
    return (0, import_typeorm3.getRepository)(this.entity, this.getConnectionName());
  }
};
Repository = __decorateClass([
  (0, import_inversify2.injectable)()
], Repository);

// src/infrastructure/InfrastructureModuleSymbols.ts
var DATABASE_IDENTIFIERS = {
  ORM: Symbol.for("Orm")
};
var INFRASTRUCTURE_IDENTIFIERS = {
  DB_MAPPER: Symbol.for("DBMapper")
};
var DATABASE_MAPPING_IDENTIFIERS = {
  USER_ENTITY: Symbol.for("UserEntity"),
  ROLE_ENTITY: Symbol.for("RoleEntity"),
  COFFEE_ENTITY: Symbol.for("CoffeeEntity"),
  REVIEW_ENTITY: Symbol.for("ReviewEntity")
};

// src/infrastructure/common/errors/InfrastructureErrors.ts
var InfrastructureErrors = /* @__PURE__ */ ((InfrastructureErrors2) => {
  InfrastructureErrors2[InfrastructureErrors2["USER_NOT_FOUND"] = 0] = "USER_NOT_FOUND";
  InfrastructureErrors2[InfrastructureErrors2["USER_ALREADY_EXIST"] = 1] = "USER_ALREADY_EXIST";
  InfrastructureErrors2[InfrastructureErrors2["ROLE_NOT_FOUND"] = 2] = "ROLE_NOT_FOUND";
  InfrastructureErrors2[InfrastructureErrors2["COFFEE_NOT_FOUND"] = 3] = "COFFEE_NOT_FOUND";
  InfrastructureErrors2[InfrastructureErrors2["REVIEW_NOT_FOUND"] = 4] = "REVIEW_NOT_FOUND";
  return InfrastructureErrors2;
})(InfrastructureErrors || {});

// src/core/common/errors/BaseError.ts
var BaseError = class {
  constructor(code, message = "", name = "") {
    this.code = code;
    this.message = message;
    this.name = name;
  }
};

// src/infrastructure/database/repository/Review/ReviewRepository.ts
var ReviewRepository = class extends Repository {
  constructor(dbMapper) {
    super(Review);
    this.dbMapper = dbMapper;
  }
  async getReviews({ userId }) {
    const reviews = await this.custom().createQueryBuilder().where("Review.userId = :userId ", { userId }).getMany();
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.REVIEW_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.REVIEW_ENTITY
      },
      reviews
    );
  }
  async addReview({
    rating,
    look,
    smell,
    taste,
    userId,
    coffeeId
  }) {
    const review = new Review();
    review.userId = userId;
    review.coffeeId = coffeeId;
    review.look = look;
    review.smell = smell;
    review.taste = taste;
    review.rating = rating;
    const savedReview = await review.save();
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.REVIEW_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.REVIEW_ENTITY
      },
      savedReview
    );
  }
  async updateReview({
    review,
    reviewId
  }) {
    const updatedReview = await this.custom().createQueryBuilder().update(Review).set({ ...review }).where("id = :reviewId", { reviewId }).execute();
    return updatedReview;
  }
  async deleteReview({
    reviewId
  }) {
    const result = await this.custom().createQueryBuilder().where("Review.id = :reviewsId ", { reviewId }).getOne();
    if (!result) {
      throw new BaseError(
        InfrastructureErrors[4 /* REVIEW_NOT_FOUND */]
      );
    }
    this.remove(result);
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.REVIEW_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.REVIEW_ENTITY
      },
      result
    );
  }
};
ReviewRepository = __decorateClass([
  __decorateParam(0, (0, import_inversify3.inject)(INFRASTRUCTURE_IDENTIFIERS.DB_MAPPER))
], ReviewRepository);

// src/core/applicationServices/Review/ReviewService.ts
var import_inversify4 = require("inversify");

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
  (0, import_inversify4.injectable)(),
  __decorateParam(0, (0, import_inversify4.inject)(DOMAIN_REPOSITORY_IDENTIFIERS.REVIEW_REPOSITORY))
], ReviewService);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ReviewModule
});
//# sourceMappingURL=ReviewModule.js.map