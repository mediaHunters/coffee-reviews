"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
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

// src/ui/index.ts
var ui_exports = {};
__export(ui_exports, {
  AuthenticationController: () => AuthenticationController,
  CoffeeController: () => CoffeeController,
  UserController: () => UserController
});
module.exports = __toCommonJS(ui_exports);

// src/ui/portal/User/rest/v1/UserController.ts
var import_http_status_codes2 = require("http-status-codes");
var import_inversify = require("inversify");
var import_inversify_express_utils = require("inversify-express-utils");

// src/core/applicationServices/User/requests/command/RemoveUserCommand.ts
var RemoveUserCommand = class {
  constructor(id) {
    this.id = id;
  }
};
__name(RemoveUserCommand, "RemoveUserCommand");

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

// src/ui/common/config/application/express/auth/middlewares/isAuthenticated.ts
var import_http_status_codes = require("http-status-codes");

// src/ui/common/config/application/express/auth/utils/getHttpContext.ts
var getCurrentUser = /* @__PURE__ */ __name((request) => {
  const httpContext = Reflect.getMetadata(
    "inversify-express-utils:httpcontext",
    request
  );
  return httpContext.user;
}, "getCurrentUser");

// src/core/common/errors/BaseError.ts
var BaseError = class {
  constructor(code, message = "", name = "") {
    this.code = code;
    this.message = message;
    this.name = name;
  }
};
__name(BaseError, "BaseError");

// src/ui/common/config/errors/UserInterfaceError.ts
var UserInterfaceError = class extends BaseError {
  constructor(status, code, message = "", name = "") {
    super(code, message, name);
    this.status = status;
    this.code = code;
    this.message = message;
    this.name = name;
  }
};
__name(UserInterfaceError, "UserInterfaceError");

// src/ui/common/config/application/express/auth/middlewares/isAuthenticated.ts
var isAuthenticated = /* @__PURE__ */ __name((config) => async (req, _res, next) => {
  const user = getCurrentUser(req);
  if (!user) {
    next(
      new UserInterfaceError(
        import_http_status_codes.UNAUTHORIZED,
        (0, import_http_status_codes.getStatusText)(import_http_status_codes.UNAUTHORIZED).toUpperCase()
      )
    );
    return;
  }
  const isAuthenticatedUser = await user.isAuthenticated();
  if (!isAuthenticatedUser) {
    next(
      new UserInterfaceError(
        import_http_status_codes.UNAUTHORIZED,
        (0, import_http_status_codes.getStatusText)(import_http_status_codes.UNAUTHORIZED).toUpperCase()
      )
    );
    return;
  }
  if (config) {
    const isInRole = await user.isInRole(config.role);
    if (!isInRole) {
      next(
        new UserInterfaceError(
          import_http_status_codes.FORBIDDEN,
          (0, import_http_status_codes.getStatusText)(import_http_status_codes.FORBIDDEN).toUpperCase()
        )
      );
      return;
    }
  }
  next();
}, "isAuthenticated");

// src/ui/portal/User/rest/v1/UserController.ts
var UserController = class extends import_inversify_express_utils.BaseHttpController {
  constructor(UserService) {
    super();
    this.UserService = UserService;
  }
  async get() {
    return this.json(import_http_status_codes2.OK);
  }
  async getCurrentUser(req) {
    const user = getCurrentUser(req);
    return this.json(user);
  }
  async Remove({ id }) {
    return this.UserService.removeUser(new RemoveUserCommand(id));
  }
};
__name(UserController, "UserController");
__decorateClass([
  (0, import_inversify_express_utils.httpGet)("/")
], UserController.prototype, "get", 1);
__decorateClass([
  (0, import_inversify_express_utils.httpGet)("/currentUser")
], UserController.prototype, "getCurrentUser", 1);
__decorateClass([
  (0, import_inversify_express_utils.httpPost)("/removeUser", isAuthenticated({ role: "MEMBER" /* MEMBER */ })),
  __decorateParam(0, (0, import_inversify_express_utils.requestBody)())
], UserController.prototype, "Remove", 1);
UserController = __decorateClass([
  (0, import_inversify_express_utils.controller)("/v1/user"),
  __decorateParam(0, (0, import_inversify.inject)(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.USER_SERVICE))
], UserController);

// src/ui/portal/Authentication/rest/v1/AuthenticationController.ts
var import_inversify_express_utils2 = require("inversify-express-utils");
var import_http_status_codes3 = require("http-status-codes");
var import_inversify2 = require("inversify");

// src/core/applicationServices/Authentication/requests/repository/command/SignUpCommand.ts
var SignUpCommand = class {
  constructor(nickname, email, password) {
    this.nickname = nickname;
    this.email = email;
    this.password = password;
  }
};
__name(SignUpCommand, "SignUpCommand");

// src/ui/UIModuleSymbols.ts
var UI_IDENTIFIERS = {
  UI_MAPPER: Symbol.for("UIMapper")
};
var UI_APPLICATION_IDENTIFIERS = {
  EXPRESS: Symbol.for("Express"),
  EXPRESS_ROUTER: Symbol.for("ExpressRouter"),
  EXPRESS_APPLICATION: Symbol.for("ExpressApplication"),
  INVERSIFY_APPLICATION: Symbol.for("InversifyExpressApplication"),
  JWT_TOKEN_UTIL: Symbol.for("JWTTokenUtil"),
  JWT_AUTHENTICATION_HANDLER: Symbol.for("JWTAuthenticationHandler"),
  LOGGER: Symbol.for("Logger"),
  LOGGER_FORMAT: Symbol.for("WinstonFormat"),
  LOGGER_WINSTON: Symbol.for("WinstonLogger")
};
var UI_MAPPINGS_IDENTIFIERS = {
  USER_UI: Symbol.for("UserUI")
};

// src/core/applicationServices/Authentication/requests/handler/query/AuthenticationQuery.ts
var AuthenticationQuery = class {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
};
__name(AuthenticationQuery, "AuthenticationQuery");

// src/ui/portal/Authentication/rest/v1/AuthenticationController.ts
var AuthenticationController = class extends import_inversify_express_utils2.BaseHttpController {
  constructor(authenticationService, authenticationHandler, uiMapper) {
    super();
    this.authenticationService = authenticationService;
    this.authenticationHandler = authenticationHandler;
    this.uiMapper = uiMapper;
  }
  async create({ nickname, email, password }) {
    const user = await this.authenticationService.signUp(
      new SignUpCommand(nickname, email, password)
    );
    const createdUser = this.uiMapper.mapper.map(
      {
        destination: UI_MAPPINGS_IDENTIFIERS.USER_UI,
        source: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN
      },
      user
    );
    return this.json(createdUser, import_http_status_codes3.OK);
  }
  async index({ email, password }) {
    const authentication = await this.authenticationHandler.authenticate(
      new AuthenticationQuery(email, password)
    );
    return this.json(authentication, import_http_status_codes3.OK);
  }
};
__name(AuthenticationController, "AuthenticationController");
__decorateClass([
  (0, import_inversify_express_utils2.httpPost)("/signup"),
  __decorateParam(0, (0, import_inversify_express_utils2.requestBody)())
], AuthenticationController.prototype, "create", 1);
__decorateClass([
  (0, import_inversify_express_utils2.httpPost)("/"),
  __decorateParam(0, (0, import_inversify_express_utils2.requestBody)())
], AuthenticationController.prototype, "index", 1);
AuthenticationController = __decorateClass([
  (0, import_inversify_express_utils2.controller)("/v1/auth"),
  __decorateParam(0, (0, import_inversify2.inject)(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.AUTHENTICATION_SERVICE)),
  __decorateParam(1, (0, import_inversify2.inject)(UI_APPLICATION_IDENTIFIERS.JWT_AUTHENTICATION_HANDLER)),
  __decorateParam(2, (0, import_inversify2.inject)(UI_IDENTIFIERS.UI_MAPPER))
], AuthenticationController);

// src/ui/portal/Coffee/rest/v1/CoffeeController.ts
var import_inversify3 = require("inversify");
var import_inversify_express_utils3 = require("inversify-express-utils");
var import_http_status_codes4 = require("http-status-codes");

// src/core/applicationServices/Coffee/requests/command/DeleteCoffeeCommand.ts
var DeleteCoffeeCommand = class {
  constructor(id) {
    this.id = id;
  }
};
__name(DeleteCoffeeCommand, "DeleteCoffeeCommand");

// src/core/domainServices/Coffee/requests/UnitOfWork/query/FindCoffeeRepositoryQuery.ts
var FindOneCoffeeRepositoryQuery = class {
  constructor(id) {
    this.id = id;
  }
};
__name(FindOneCoffeeRepositoryQuery, "FindOneCoffeeRepositoryQuery");

// src/core/applicationServices/Coffee/requests/command/AddCoffeeCommand.ts
var CreateCoffeeCommand = class {
  constructor(brand, name, type, imgUrl, description, burntLvl, CoffeeStatus, reflink) {
    this.brand = brand;
    this.name = name;
    this.type = type;
    this.imgUrl = imgUrl;
    this.description = description;
    this.burntLvl = burntLvl;
    this.CoffeeStatus = CoffeeStatus;
    this.reflink = reflink;
  }
};
__name(CreateCoffeeCommand, "CreateCoffeeCommand");

// src/core/applicationServices/Coffee/requests/command/UpdateCoffeeCommand.ts
var UpdateCoffeeCommand = class {
  constructor(coffee, coffeeId) {
    this.coffee = coffee;
    this.coffeeId = coffeeId;
  }
};
__name(UpdateCoffeeCommand, "UpdateCoffeeCommand");

// src/core/applicationServices/Review/requests/query/GetUserReviewsQuery.ts
var GetUserReviewsQuery = class {
  constructor(userId) {
    this.userId = userId;
  }
};
__name(GetUserReviewsQuery, "GetUserReviewsQuery");

// src/core/applicationServices/Review/requests/command/AddReviewCommand.ts
var AddReviewCommand = class {
  constructor(userId, coffeeId, rating, look, smell, taste) {
    this.userId = userId;
    this.coffeeId = coffeeId;
    this.rating = rating;
    this.look = look;
    this.smell = smell;
    this.taste = taste;
  }
};
__name(AddReviewCommand, "AddReviewCommand");

// src/core/applicationServices/Review/requests/command/UpdateReviewCommand.ts
var UpdateReviewCommand = class {
  constructor(review, reviewId) {
    this.review = review;
    this.reviewId = reviewId;
  }
};
__name(UpdateReviewCommand, "UpdateReviewCommand");

// src/core/applicationServices/Review/requests/command/DeleteReviewCommand.ts
var DeleteReviewCommand = class {
  constructor(reviewId) {
    this.reviewId = reviewId;
  }
};
__name(DeleteReviewCommand, "DeleteReviewCommand");

// src/ui/portal/Coffee/rest/v1/CoffeeController.ts
var CoffeeController = class extends import_inversify_express_utils3.BaseHttpController {
  constructor(coffeeService, reviewService) {
    super();
    this.coffeeService = coffeeService;
    this.reviewService = reviewService;
  }
  async GetAll() {
    const result = await this.coffeeService.findAll();
    return this.json(result, import_http_status_codes4.OK);
  }
  async get({ coffeeId }) {
    const result = await this.coffeeService.findOne(
      new FindOneCoffeeRepositoryQuery(coffeeId)
    );
    return this.json(result, import_http_status_codes4.OK);
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
    return this.json(result, import_http_status_codes4.OK);
  }
  async update(coffeeId, { coffee }) {
    const result = await this.coffeeService.update(
      new UpdateCoffeeCommand(coffee, coffeeId)
    );
    return this.json(result, import_http_status_codes4.OK);
  }
  async delete({ id }) {
    const result = await this.coffeeService.delete(new DeleteCoffeeCommand(id));
    return this.json(result, import_http_status_codes4.OK);
  }
  async GetUserReviews({ userId }) {
    const result = await this.reviewService.getAll(
      new GetUserReviewsQuery(userId)
    );
    return this.json(result, import_http_status_codes4.OK);
  }
  async addReview(coffeeId, { rating, look, smell, taste, userId }) {
    const result = await this.reviewService.add(
      new AddReviewCommand(userId, coffeeId, rating, look, smell, taste)
    );
    return this.json(result, import_http_status_codes4.OK);
  }
  async updateReview(reviewId, { review }) {
    const result = this.reviewService.update(
      new UpdateReviewCommand(review, reviewId)
    );
    return this.json(result, import_http_status_codes4.OK);
  }
  async deleteReview({ reviewId }) {
    const result = this.reviewService.delete(new DeleteReviewCommand(reviewId));
    return this.json(result, import_http_status_codes4.OK);
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
  (0, import_inversify_express_utils3.httpGet)("/")
], CoffeeController.prototype, "GetAll", 1);
__decorateClass([
  (0, import_inversify_express_utils3.httpGet)("/:id"),
  __decorateParam(0, (0, import_inversify_express_utils3.requestParam)("id"))
], CoffeeController.prototype, "get", 1);
__decorateClass([
  (0, import_inversify_express_utils3.httpPost)("/create", isAuthenticated({ role: "MEMBER" /* MEMBER */ })),
  __decorateParam(0, (0, import_inversify_express_utils3.requestBody)())
], CoffeeController.prototype, "add", 1);
__decorateClass([
  (0, import_inversify_express_utils3.httpPut)("/:id/update", isAuthenticated({ role: "MEMBER" /* MEMBER */ })),
  __decorateParam(0, (0, import_inversify_express_utils3.requestParam)("id")),
  __decorateParam(1, (0, import_inversify_express_utils3.requestBody)())
], CoffeeController.prototype, "update", 1);
__decorateClass([
  (0, import_inversify_express_utils3.httpDelete)("/:id", isAuthenticated({ role: "MEMBER" /* MEMBER */ })),
  __decorateParam(0, (0, import_inversify_express_utils3.requestParam)())
], CoffeeController.prototype, "delete", 1);
__decorateClass([
  (0, import_inversify_express_utils3.httpGet)("/:userId/reviews/", isAuthenticated({ role: "MEMBER" /* MEMBER */ })),
  __decorateParam(0, (0, import_inversify_express_utils3.requestParam)())
], CoffeeController.prototype, "GetUserReviews", 1);
__decorateClass([
  (0, import_inversify_express_utils3.httpPost)(
    "/:coffeeId/reviews/add",
    isAuthenticated({ role: "MEMBER" /* MEMBER */ })
  ),
  __decorateParam(0, (0, import_inversify_express_utils3.requestParam)("coffeeId")),
  __decorateParam(1, (0, import_inversify_express_utils3.requestBody)())
], CoffeeController.prototype, "addReview", 1);
__decorateClass([
  (0, import_inversify_express_utils3.httpPut)(
    "/:coffeeId/reviews/:reviewId/update",
    isAuthenticated({ role: "MEMBER" /* MEMBER */ })
  ),
  __decorateParam(0, (0, import_inversify_express_utils3.requestParam)("reviewId")),
  __decorateParam(1, (0, import_inversify_express_utils3.requestBody)())
], CoffeeController.prototype, "updateReview", 1);
__decorateClass([
  (0, import_inversify_express_utils3.httpDelete)(
    "/:id/reviews/delete",
    isAuthenticated({ role: "MEMBER" /* MEMBER */ })
  ),
  __decorateParam(0, (0, import_inversify_express_utils3.requestParam)("reviewId"))
], CoffeeController.prototype, "deleteReview", 1);
CoffeeController = __decorateClass([
  (0, import_inversify_express_utils3.controller)("/v1/coffee"),
  __decorateParam(0, (0, import_inversify3.inject)(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.COFFEE_SERVICE)),
  __decorateParam(1, (0, import_inversify3.inject)(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.REVIEW_SERVICE))
], CoffeeController);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthenticationController,
  CoffeeController,
  UserController
});
//# sourceMappingURL=index.js.map