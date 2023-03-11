"use strict";
<<<<<<< HEAD
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

// src/ui/portal/Coffee/rest/v1/CoffeeController.ts
var CoffeeController_exports = {};
__export(CoffeeController_exports, {
  CoffeeController: () => CoffeeController
});
module.exports = __toCommonJS(CoffeeController_exports);
var import_inversify = require("inversify");
var import_inversify_express_utils = require("inversify-express-utils");
var import_http_status_codes2 = require("http-status-codes");

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
var getCurrentUser = (request) => {
  const httpContext = Reflect.getMetadata(
    "inversify-express-utils:httpcontext",
    request
  );
  return httpContext.user;
};

// src/core/common/errors/BaseError.ts
var BaseError = class {
  constructor(code, message = "", name = "") {
    this.code = code;
    this.message = message;
    this.name = name;
  }
};

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

// src/ui/common/config/application/express/auth/middlewares/isAuthenticated.ts
var isAuthenticated = (config) => async (req, _res, next) => {
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
};

// src/core/applicationServices/Coffee/requests/command/DeleteCoffeeCommand.ts
var DeleteCoffeeCommand = class {
  constructor(id) {
    this.id = id;
  }
};

// src/core/domainServices/Coffee/requests/UnitOfWork/query/FindCoffeeRepositoryQuery.ts
var FindOneCoffeeRepositoryQuery = class {
  constructor(id) {
    this.id = id;
  }
};

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

// src/core/applicationServices/Coffee/requests/command/UpdateCoffeeCommand.ts
var UpdateCoffeeCommand = class {
  constructor(coffee, coffeeId) {
    this.coffee = coffee;
    this.coffeeId = coffeeId;
  }
};

// src/core/applicationServices/Review/requests/query/GetUserReviewsQuery.ts
var GetUserReviewsQuery = class {
  constructor(userId) {
    this.userId = userId;
  }
};

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

// src/core/applicationServices/Review/requests/command/UpdateReviewCommand.ts
var UpdateReviewCommand = class {
  constructor(review, reviewId) {
    this.review = review;
    this.reviewId = reviewId;
  }
};

// src/core/applicationServices/Review/requests/command/DeleteReviewCommand.ts
var DeleteReviewCommand = class {
  constructor(reviewId) {
    this.reviewId = reviewId;
  }
};

// src/ui/portal/Coffee/rest/v1/CoffeeController.ts
var CoffeeController = class extends import_inversify_express_utils.BaseHttpController {
  constructor(coffeeService, reviewService) {
    super();
    this.coffeeService = coffeeService;
    this.reviewService = reviewService;
  }
  async GetAll() {
    const result = await this.coffeeService.findAll();
    return this.json(result, import_http_status_codes2.OK);
  }
  async get({ coffeeId }) {
    const result = await this.coffeeService.findOne(
      new FindOneCoffeeRepositoryQuery(coffeeId)
    );
    return this.json(result, import_http_status_codes2.OK);
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
    return this.json(result, import_http_status_codes2.OK);
  }
  async update(coffeeId, { coffee }) {
    const result = await this.coffeeService.update(
      new UpdateCoffeeCommand(coffee, coffeeId)
    );
    return this.json(result, import_http_status_codes2.OK);
  }
  async delete({ id }) {
    const result = await this.coffeeService.delete(new DeleteCoffeeCommand(id));
    return this.json(result, import_http_status_codes2.OK);
  }
  async GetUserReviews({ userId }) {
    const result = await this.reviewService.getAll(
      new GetUserReviewsQuery(userId)
    );
    return this.json(result, import_http_status_codes2.OK);
  }
  async addReview(coffeeId, { rating, look, smell, taste, userId }) {
    const result = await this.reviewService.add(
      new AddReviewCommand(userId, coffeeId, rating, look, smell, taste)
    );
    return this.json(result, import_http_status_codes2.OK);
  }
  async updateReview(reviewId, { review }) {
    const result = this.reviewService.update(
      new UpdateReviewCommand(review, reviewId)
    );
    return this.json(result, import_http_status_codes2.OK);
  }
  async deleteReview({ reviewId }) {
    const result = this.reviewService.delete(new DeleteReviewCommand(reviewId));
    return this.json(result, import_http_status_codes2.OK);
  }
  // @httpPost('/search')
  // async search(@requestParam() { sortBy, skip, take }: SearchQueryBody) {
  //   const _result = await this.CoffeeService.sortAndPaginate(
  //     new SearchQuery(sortBy, skip, take)
  //   );
  // }
};
__decorateClass([
  (0, import_inversify_express_utils.httpGet)("/")
], CoffeeController.prototype, "GetAll", 1);
__decorateClass([
  (0, import_inversify_express_utils.httpGet)("/:id"),
  __decorateParam(0, (0, import_inversify_express_utils.requestParam)("id"))
], CoffeeController.prototype, "get", 1);
__decorateClass([
  (0, import_inversify_express_utils.httpPost)("/create", isAuthenticated({ role: "MEMBER" /* MEMBER */ })),
  __decorateParam(0, (0, import_inversify_express_utils.requestBody)())
], CoffeeController.prototype, "add", 1);
__decorateClass([
  (0, import_inversify_express_utils.httpPut)("/:id/update", isAuthenticated({ role: "MEMBER" /* MEMBER */ })),
  __decorateParam(0, (0, import_inversify_express_utils.requestParam)("id")),
  __decorateParam(1, (0, import_inversify_express_utils.requestBody)())
], CoffeeController.prototype, "update", 1);
__decorateClass([
  (0, import_inversify_express_utils.httpDelete)("/:id", isAuthenticated({ role: "MEMBER" /* MEMBER */ })),
  __decorateParam(0, (0, import_inversify_express_utils.requestParam)())
], CoffeeController.prototype, "delete", 1);
__decorateClass([
  (0, import_inversify_express_utils.httpGet)("/:userId/reviews/", isAuthenticated({ role: "MEMBER" /* MEMBER */ })),
  __decorateParam(0, (0, import_inversify_express_utils.requestParam)())
], CoffeeController.prototype, "GetUserReviews", 1);
__decorateClass([
  (0, import_inversify_express_utils.httpPost)(
    "/:coffeeId/reviews/add",
    isAuthenticated({ role: "MEMBER" /* MEMBER */ })
  ),
  __decorateParam(0, (0, import_inversify_express_utils.requestParam)("coffeeId")),
  __decorateParam(1, (0, import_inversify_express_utils.requestBody)())
], CoffeeController.prototype, "addReview", 1);
__decorateClass([
  (0, import_inversify_express_utils.httpPut)(
    "/:coffeeId/reviews/:reviewId/update",
    isAuthenticated({ role: "MEMBER" /* MEMBER */ })
  ),
  __decorateParam(0, (0, import_inversify_express_utils.requestParam)("reviewId")),
  __decorateParam(1, (0, import_inversify_express_utils.requestBody)())
], CoffeeController.prototype, "updateReview", 1);
__decorateClass([
  (0, import_inversify_express_utils.httpDelete)(
    "/:id/reviews/delete",
    isAuthenticated({ role: "MEMBER" /* MEMBER */ })
  ),
  __decorateParam(0, (0, import_inversify_express_utils.requestParam)("reviewId"))
], CoffeeController.prototype, "deleteReview", 1);
CoffeeController = __decorateClass([
  (0, import_inversify_express_utils.controller)("/v1/coffee"),
  __decorateParam(0, (0, import_inversify.inject)(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.COFFEE_SERVICE)),
  __decorateParam(1, (0, import_inversify.inject)(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.REVIEW_SERVICE))
], CoffeeController);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CoffeeController
});
//# sourceMappingURL=CoffeeController.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CoffeeController", {
    enumerable: true,
    get: ()=>CoffeeController
});
const _inversify = require("inversify");
const _inversifyExpressUtils = require("inversify-express-utils");
const _httpStatusCodes = require("http-status-codes");
const _coreModuleSymbols = require("../../../../../core/CoreModuleSymbols");
const _icoffeeService = require("../../../../../core/applicationServices/Coffee/ICoffeeService");
const _isAuthenticated = require("../../../../common/config/application/express/auth/middlewares/isAuthenticated");
const _userRole = require("../../../../../core/domain/User/UserRole");
const _createCoffeeCommandBody = require("../../requests/command/CreateCoffeeCommandBody");
const _deleteCoffeeCommand = require("../../../../../core/applicationServices/Coffee/requests/command/DeleteCoffeeCommand");
const _deleteCoffeeCommandBody = require("../../requests/command/DeleteCoffeeCommandBody");
const _addReviewCommandBody = require("../../requests/command/AddReviewCommandBody");
const _findCoffeeRepositoryQuery = require("../../../../../core/domainServices/Coffee/requests/UnitOfWork/query/FindCoffeeRepositoryQuery");
const _addCoffeeCommand = require("../../../../../core/applicationServices/Coffee/requests/command/AddCoffeeCommand");
const _updateCoffeeCommand = require("../../../../../core/applicationServices/Coffee/requests/command/UpdateCoffeeCommand");
const _findOneCoffeeRepositoryQueryBody = require("../../requests/query/FindOneCoffeeRepositoryQueryBody");
const _updateCoffeeCommandBody = require("../../requests/command/UpdateCoffeeCommandBody");
const _getUserReviewsQueryBody = require("../../requests/query/GetUserReviewsQueryBody");
const _ireviewService = require("../../../../../core/applicationServices/Review/IReviewService");
const _getUserReviewsQuery = require("../../../../../core/applicationServices/Review/requests/query/GetUserReviewsQuery");
const _addReviewCommand = require("../../../../../core/applicationServices/Review/requests/command/AddReviewCommand");
const _updateReviewCommand = require("../../../../../core/applicationServices/Review/requests/command/UpdateReviewCommand");
const _updateReviewCommandBody = require("../../requests/command/UpdateReviewCommandBody");
const _deleteReviewCommandBody = require("../../requests/command/DeleteReviewCommandBody");
const _deleteReviewCommand = require("../../../../../core/applicationServices/Review/requests/command/DeleteReviewCommand");
var __decorate = (void 0) && (void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (void 0) && (void 0).__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (void 0) && (void 0).__param || function(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
};
let CoffeeController = class CoffeeController extends _inversifyExpressUtils.BaseHttpController {
    constructor(coffeeService, reviewService){
        super();
        this.coffeeService = coffeeService;
        this.reviewService = reviewService;
    }
    async GetAll() {
        const result = await this.coffeeService.findAll();
        return this.json(result, _httpStatusCodes.OK);
    }
    async get({ coffeeId  }) {
        const result = await this.coffeeService.findOne(new _findCoffeeRepositoryQuery.FindOneCoffeeRepositoryQuery(coffeeId));
        return this.json(result, _httpStatusCodes.OK);
    }
    async add({ brand , name , type , imgUrl , description , burntLvl , reflink , CoffeeStatus  }) {
        const coffeeCommand = new _addCoffeeCommand.CreateCoffeeCommand(brand, name, type, imgUrl, description, burntLvl, reflink || '', CoffeeStatus);
        const result = await this.coffeeService.create(coffeeCommand);
        return this.json(result, _httpStatusCodes.OK);
    }
    async update(coffeeId, { coffee  }) {
        const result = await this.coffeeService.update(new _updateCoffeeCommand.UpdateCoffeeCommand(coffee, coffeeId));
        return this.json(result, _httpStatusCodes.OK);
    }
    async delete({ id  }) {
        const result = await this.coffeeService.delete(new _deleteCoffeeCommand.DeleteCoffeeCommand(id));
        return this.json(result, _httpStatusCodes.OK);
    }
    async GetUserReviews({ userId  }) {
        const result = await this.reviewService.getAll(new _getUserReviewsQuery.GetUserReviewsQuery(userId));
        return this.json(result, _httpStatusCodes.OK);
    }
    async addReview(coffeeId, { rating , look , smell , taste , userId  }) {
        const result = await this.reviewService.add(new _addReviewCommand.AddReviewCommand(userId, coffeeId, rating, look, smell, taste));
        return this.json(result, _httpStatusCodes.OK);
    }
    async updateReview(reviewId, { review  }) {
        const result = this.reviewService.update(new _updateReviewCommand.UpdateReviewCommand(review, reviewId));
        return this.json(result, _httpStatusCodes.OK);
    }
    async deleteReview({ reviewId  }) {
        const result = this.reviewService.delete(new _deleteReviewCommand.DeleteReviewCommand(reviewId));
        return this.json(result, _httpStatusCodes.OK);
    }
};
__decorate([
    (0, _inversifyExpressUtils.httpGet)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [])
], CoffeeController.prototype, "GetAll", null);
__decorate([
    (0, _inversifyExpressUtils.httpGet)('/:id'),
    __param(0, (0, _inversifyExpressUtils.requestParam)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _findOneCoffeeRepositoryQueryBody.FindOneCoffeeRepositoryQueryBody === "undefined" ? Object : _findOneCoffeeRepositoryQueryBody.FindOneCoffeeRepositoryQueryBody
    ])
], CoffeeController.prototype, "get", null);
__decorate([
    (0, _inversifyExpressUtils.httpPost)('/create', (0, _isAuthenticated.isAuthenticated)({
        role: _userRole.USER_ROLE.MEMBER
    })),
    __param(0, (0, _inversifyExpressUtils.requestBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _createCoffeeCommandBody.CreateCoffeeCommandBody === "undefined" ? Object : _createCoffeeCommandBody.CreateCoffeeCommandBody
    ])
], CoffeeController.prototype, "add", null);
__decorate([
    (0, _inversifyExpressUtils.httpPut)('/:id/update', (0, _isAuthenticated.isAuthenticated)({
        role: _userRole.USER_ROLE.MEMBER
    })),
    __param(0, (0, _inversifyExpressUtils.requestParam)('id')),
    __param(1, (0, _inversifyExpressUtils.requestBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        String,
        typeof _updateCoffeeCommandBody.UpdateCoffeeCommandBody === "undefined" ? Object : _updateCoffeeCommandBody.UpdateCoffeeCommandBody
    ])
], CoffeeController.prototype, "update", null);
__decorate([
    (0, _inversifyExpressUtils.httpDelete)('/:id', (0, _isAuthenticated.isAuthenticated)({
        role: _userRole.USER_ROLE.MEMBER
    })),
    __param(0, (0, _inversifyExpressUtils.requestParam)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _deleteCoffeeCommandBody.DeleteCoffeeCommandBody === "undefined" ? Object : _deleteCoffeeCommandBody.DeleteCoffeeCommandBody
    ])
], CoffeeController.prototype, "delete", null);
__decorate([
    (0, _inversifyExpressUtils.httpGet)('/:userId/reviews/', (0, _isAuthenticated.isAuthenticated)({
        role: _userRole.USER_ROLE.MEMBER
    })),
    __param(0, (0, _inversifyExpressUtils.requestParam)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _getUserReviewsQueryBody.GetUserReviewsQueryBody === "undefined" ? Object : _getUserReviewsQueryBody.GetUserReviewsQueryBody
    ])
], CoffeeController.prototype, "GetUserReviews", null);
__decorate([
    (0, _inversifyExpressUtils.httpPost)('/:coffeeId/reviews/add', (0, _isAuthenticated.isAuthenticated)({
        role: _userRole.USER_ROLE.MEMBER
    })),
    __param(0, (0, _inversifyExpressUtils.requestParam)('coffeeId')),
    __param(1, (0, _inversifyExpressUtils.requestBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        String,
        typeof _addReviewCommandBody.AddReviewCommandBody === "undefined" ? Object : _addReviewCommandBody.AddReviewCommandBody
    ])
], CoffeeController.prototype, "addReview", null);
__decorate([
    (0, _inversifyExpressUtils.httpPut)('/:coffeeId/reviews/:reviewId/update', (0, _isAuthenticated.isAuthenticated)({
        role: _userRole.USER_ROLE.MEMBER
    })),
    __param(0, (0, _inversifyExpressUtils.requestParam)('reviewId')),
    __param(1, (0, _inversifyExpressUtils.requestBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        String,
        typeof _updateReviewCommandBody.UpdateReviewCommandBody === "undefined" ? Object : _updateReviewCommandBody.UpdateReviewCommandBody
    ])
], CoffeeController.prototype, "updateReview", null);
__decorate([
    (0, _inversifyExpressUtils.httpDelete)('/:id/reviews/delete', (0, _isAuthenticated.isAuthenticated)({
        role: _userRole.USER_ROLE.MEMBER
    })),
    __param(0, (0, _inversifyExpressUtils.requestParam)('reviewId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _deleteReviewCommandBody.DeleteReviewCommandBody === "undefined" ? Object : _deleteReviewCommandBody.DeleteReviewCommandBody
    ])
], CoffeeController.prototype, "deleteReview", null);
CoffeeController = __decorate([
    (0, _inversifyExpressUtils.controller)('/v1/coffee'),
    __param(0, (0, _inversify.inject)(_coreModuleSymbols.DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.COFFEE_SERVICE)),
    __param(1, (0, _inversify.inject)(_coreModuleSymbols.DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.REVIEW_SERVICE)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _icoffeeService.ICoffeeService === "undefined" ? Object : _icoffeeService.ICoffeeService,
        typeof _ireviewService.IReviewService === "undefined" ? Object : _ireviewService.IReviewService
    ])
], CoffeeController);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy91aS9wb3J0YWwvQ29mZmVlL3Jlc3QvdjEvQ29mZmVlQ29udHJvbGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tICdpbnZlcnNpZnknO1xuaW1wb3J0IHtcbiAgQmFzZUh0dHBDb250cm9sbGVyLFxuICBjb250cm9sbGVyLFxuICBodHRwRGVsZXRlLFxuICBodHRwR2V0LFxuICBodHRwUG9zdCxcbiAgaHR0cFB1dCxcbiAgcmVxdWVzdEJvZHksXG4gIHJlcXVlc3RQYXJhbSxcbiAgcmVzdWx0cyxcbn0gZnJvbSAnaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHMnO1xuaW1wb3J0IHsgT0sgfSBmcm9tICdodHRwLXN0YXR1cy1jb2Rlcyc7XG5cbmltcG9ydCB7IERPTUFJTl9BUFBMSUNBVElPTl9TRVJWSUNFX0lERU5USUZJRVJTIH0gZnJvbSAnY29yZS9Db3JlTW9kdWxlU3ltYm9scyc7XG5pbXBvcnQgeyBJQ29mZmVlU2VydmljZSB9IGZyb20gJ2NvcmUvYXBwbGljYXRpb25TZXJ2aWNlcy9Db2ZmZWUvSUNvZmZlZVNlcnZpY2UnO1xuaW1wb3J0IHsgaXNBdXRoZW50aWNhdGVkIH0gZnJvbSAndWkvY29tbW9uL2NvbmZpZy9hcHBsaWNhdGlvbi9leHByZXNzL2F1dGgvbWlkZGxld2FyZXMvaXNBdXRoZW50aWNhdGVkJztcbmltcG9ydCB7IFVTRVJfUk9MRSB9IGZyb20gJ2NvcmUvZG9tYWluL1VzZXIvVXNlclJvbGUnO1xuaW1wb3J0IHsgQ3JlYXRlQ29mZmVlQ29tbWFuZEJvZHkgfSBmcm9tICd1aS9wb3J0YWwvQ29mZmVlL3JlcXVlc3RzL2NvbW1hbmQvQ3JlYXRlQ29mZmVlQ29tbWFuZEJvZHknO1xuaW1wb3J0IHsgRGVsZXRlQ29mZmVlQ29tbWFuZCB9IGZyb20gJ2NvcmUvYXBwbGljYXRpb25TZXJ2aWNlcy9Db2ZmZWUvcmVxdWVzdHMvY29tbWFuZC9EZWxldGVDb2ZmZWVDb21tYW5kJztcbmltcG9ydCB7IERlbGV0ZUNvZmZlZUNvbW1hbmRCb2R5IH0gZnJvbSAndWkvcG9ydGFsL0NvZmZlZS9yZXF1ZXN0cy9jb21tYW5kL0RlbGV0ZUNvZmZlZUNvbW1hbmRCb2R5JztcbmltcG9ydCB7IEFkZFJldmlld0NvbW1hbmRCb2R5IH0gZnJvbSAndWkvcG9ydGFsL0NvZmZlZS9yZXF1ZXN0cy9jb21tYW5kL0FkZFJldmlld0NvbW1hbmRCb2R5JztcbmltcG9ydCB7IEZpbmRPbmVDb2ZmZWVSZXBvc2l0b3J5UXVlcnkgfSBmcm9tICdjb3JlL2RvbWFpblNlcnZpY2VzL0NvZmZlZS9yZXF1ZXN0cy9Vbml0T2ZXb3JrL3F1ZXJ5L0ZpbmRDb2ZmZWVSZXBvc2l0b3J5UXVlcnknO1xuaW1wb3J0IHsgQ3JlYXRlQ29mZmVlQ29tbWFuZCB9IGZyb20gJ2NvcmUvYXBwbGljYXRpb25TZXJ2aWNlcy9Db2ZmZWUvcmVxdWVzdHMvY29tbWFuZC9BZGRDb2ZmZWVDb21tYW5kJztcbmltcG9ydCB7IFVwZGF0ZUNvZmZlZUNvbW1hbmQgfSBmcm9tICdjb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvQ29mZmVlL3JlcXVlc3RzL2NvbW1hbmQvVXBkYXRlQ29mZmVlQ29tbWFuZCc7XG5pbXBvcnQgeyBGaW5kT25lQ29mZmVlUmVwb3NpdG9yeVF1ZXJ5Qm9keSB9IGZyb20gJ3VpL3BvcnRhbC9Db2ZmZWUvcmVxdWVzdHMvcXVlcnkvRmluZE9uZUNvZmZlZVJlcG9zaXRvcnlRdWVyeUJvZHknO1xuaW1wb3J0IHsgVXBkYXRlQ29mZmVlQ29tbWFuZEJvZHkgfSBmcm9tICd1aS9wb3J0YWwvQ29mZmVlL3JlcXVlc3RzL2NvbW1hbmQvVXBkYXRlQ29mZmVlQ29tbWFuZEJvZHknO1xuaW1wb3J0IHsgR2V0VXNlclJldmlld3NRdWVyeUJvZHkgfSBmcm9tICd1aS9wb3J0YWwvQ29mZmVlL3JlcXVlc3RzL3F1ZXJ5L0dldFVzZXJSZXZpZXdzUXVlcnlCb2R5JztcbmltcG9ydCB7IElSZXZpZXdTZXJ2aWNlIH0gZnJvbSAnY29yZS9hcHBsaWNhdGlvblNlcnZpY2VzL1Jldmlldy9JUmV2aWV3U2VydmljZSc7XG5pbXBvcnQgeyBHZXRVc2VyUmV2aWV3c1F1ZXJ5IH0gZnJvbSAnY29yZS9hcHBsaWNhdGlvblNlcnZpY2VzL1Jldmlldy9yZXF1ZXN0cy9xdWVyeS9HZXRVc2VyUmV2aWV3c1F1ZXJ5JztcbmltcG9ydCB7IEFkZFJldmlld0NvbW1hbmQgfSBmcm9tICdjb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvUmV2aWV3L3JlcXVlc3RzL2NvbW1hbmQvQWRkUmV2aWV3Q29tbWFuZCc7XG5pbXBvcnQgeyBVcGRhdGVSZXZpZXdDb21tYW5kIH0gZnJvbSAnY29yZS9hcHBsaWNhdGlvblNlcnZpY2VzL1Jldmlldy9yZXF1ZXN0cy9jb21tYW5kL1VwZGF0ZVJldmlld0NvbW1hbmQnO1xuaW1wb3J0IHsgVXBkYXRlUmV2aWV3Q29tbWFuZEJvZHkgfSBmcm9tICd1aS9wb3J0YWwvQ29mZmVlL3JlcXVlc3RzL2NvbW1hbmQvVXBkYXRlUmV2aWV3Q29tbWFuZEJvZHknO1xuaW1wb3J0IHsgRGVsZXRlUmV2aWV3Q29tbWFuZEJvZHkgfSBmcm9tICd1aS9wb3J0YWwvQ29mZmVlL3JlcXVlc3RzL2NvbW1hbmQvRGVsZXRlUmV2aWV3Q29tbWFuZEJvZHknO1xuaW1wb3J0IHsgRGVsZXRlUmV2aWV3Q29tbWFuZCB9IGZyb20gJ2NvcmUvYXBwbGljYXRpb25TZXJ2aWNlcy9SZXZpZXcvcmVxdWVzdHMvY29tbWFuZC9EZWxldGVSZXZpZXdDb21tYW5kJztcblxuQGNvbnRyb2xsZXIoJy92MS9jb2ZmZWUnKVxuZXhwb3J0IGNsYXNzIENvZmZlZUNvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlSHR0cENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KERPTUFJTl9BUFBMSUNBVElPTl9TRVJWSUNFX0lERU5USUZJRVJTLkNPRkZFRV9TRVJWSUNFKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29mZmVlU2VydmljZTogSUNvZmZlZVNlcnZpY2UsXG4gICAgQGluamVjdChET01BSU5fQVBQTElDQVRJT05fU0VSVklDRV9JREVOVElGSUVSUy5SRVZJRVdfU0VSVklDRSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJldmlld1NlcnZpY2U6IElSZXZpZXdTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBAaHR0cEdldCgnLycpXG4gIGFzeW5jIEdldEFsbCgpOiBQcm9taXNlPHJlc3VsdHMuSnNvblJlc3VsdD4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuY29mZmVlU2VydmljZS5maW5kQWxsKCk7XG5cbiAgICByZXR1cm4gdGhpcy5qc29uKHJlc3VsdCwgT0spO1xuICB9XG5cbiAgQGh0dHBHZXQoJy86aWQnKVxuICBhc3luYyBnZXQoXG4gICAgQHJlcXVlc3RQYXJhbSgnaWQnKSB7IGNvZmZlZUlkIH06IEZpbmRPbmVDb2ZmZWVSZXBvc2l0b3J5UXVlcnlCb2R5XG4gICk6IFByb21pc2U8cmVzdWx0cy5Kc29uUmVzdWx0PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5jb2ZmZWVTZXJ2aWNlLmZpbmRPbmUoXG4gICAgICBuZXcgRmluZE9uZUNvZmZlZVJlcG9zaXRvcnlRdWVyeShjb2ZmZWVJZClcbiAgICApO1xuICAgIHJldHVybiB0aGlzLmpzb24ocmVzdWx0LCBPSyk7XG4gIH1cblxuICBAaHR0cFBvc3QoJy9jcmVhdGUnLCBpc0F1dGhlbnRpY2F0ZWQoeyByb2xlOiBVU0VSX1JPTEUuTUVNQkVSIH0pKVxuICBhc3luYyBhZGQoXG4gICAgQHJlcXVlc3RCb2R5KClcbiAgICB7XG4gICAgICBicmFuZCxcbiAgICAgIG5hbWUsXG4gICAgICB0eXBlLFxuICAgICAgaW1nVXJsLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBidXJudEx2bCxcbiAgICAgIHJlZmxpbmssXG4gICAgICBDb2ZmZWVTdGF0dXMsXG4gICAgfTogQ3JlYXRlQ29mZmVlQ29tbWFuZEJvZHlcbiAgKTogUHJvbWlzZTxyZXN1bHRzLkpzb25SZXN1bHQ+IHtcbiAgICBjb25zdCBjb2ZmZWVDb21tYW5kID0gbmV3IENyZWF0ZUNvZmZlZUNvbW1hbmQoXG4gICAgICBicmFuZCxcbiAgICAgIG5hbWUsXG4gICAgICB0eXBlLFxuICAgICAgaW1nVXJsLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBidXJudEx2bCxcbiAgICAgIHJlZmxpbmsgfHwgJycsXG4gICAgICBDb2ZmZWVTdGF0dXNcbiAgICApO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5jb2ZmZWVTZXJ2aWNlLmNyZWF0ZShjb2ZmZWVDb21tYW5kKTtcbiAgICByZXR1cm4gdGhpcy5qc29uKHJlc3VsdCwgT0spO1xuICB9XG5cbiAgQGh0dHBQdXQoJy86aWQvdXBkYXRlJywgaXNBdXRoZW50aWNhdGVkKHsgcm9sZTogVVNFUl9ST0xFLk1FTUJFUiB9KSlcbiAgYXN5bmMgdXBkYXRlKFxuICAgIEByZXF1ZXN0UGFyYW0oJ2lkJykgY29mZmVlSWQ6IHN0cmluZyxcbiAgICBAcmVxdWVzdEJvZHkoKSB7IGNvZmZlZSB9OiBVcGRhdGVDb2ZmZWVDb21tYW5kQm9keVxuICApIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmNvZmZlZVNlcnZpY2UudXBkYXRlKFxuICAgICAgbmV3IFVwZGF0ZUNvZmZlZUNvbW1hbmQoY29mZmVlLCBjb2ZmZWVJZClcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMuanNvbihyZXN1bHQsIE9LKTtcbiAgfVxuXG4gIEBodHRwRGVsZXRlKCcvOmlkJywgaXNBdXRoZW50aWNhdGVkKHsgcm9sZTogVVNFUl9ST0xFLk1FTUJFUiB9KSlcbiAgYXN5bmMgZGVsZXRlKFxuICAgIEByZXF1ZXN0UGFyYW0oKSB7IGlkIH06IERlbGV0ZUNvZmZlZUNvbW1hbmRCb2R5XG4gICk6IFByb21pc2U8cmVzdWx0cy5Kc29uUmVzdWx0PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5jb2ZmZWVTZXJ2aWNlLmRlbGV0ZShuZXcgRGVsZXRlQ29mZmVlQ29tbWFuZChpZCkpO1xuXG4gICAgcmV0dXJuIHRoaXMuanNvbihyZXN1bHQsIE9LKTtcbiAgfVxuXG4gIEBodHRwR2V0KCcvOnVzZXJJZC9yZXZpZXdzLycsIGlzQXV0aGVudGljYXRlZCh7IHJvbGU6IFVTRVJfUk9MRS5NRU1CRVIgfSkpXG4gIGFzeW5jIEdldFVzZXJSZXZpZXdzKEByZXF1ZXN0UGFyYW0oKSB7IHVzZXJJZCB9OiBHZXRVc2VyUmV2aWV3c1F1ZXJ5Qm9keSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmV2aWV3U2VydmljZS5nZXRBbGwoXG4gICAgICBuZXcgR2V0VXNlclJldmlld3NRdWVyeSh1c2VySWQpXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5qc29uKHJlc3VsdCwgT0spO1xuICB9XG5cbiAgQGh0dHBQb3N0KFxuICAgICcvOmNvZmZlZUlkL3Jldmlld3MvYWRkJyxcbiAgICBpc0F1dGhlbnRpY2F0ZWQoeyByb2xlOiBVU0VSX1JPTEUuTUVNQkVSIH0pXG4gIClcbiAgYXN5bmMgYWRkUmV2aWV3KFxuICAgIEByZXF1ZXN0UGFyYW0oJ2NvZmZlZUlkJykgY29mZmVlSWQ6IHN0cmluZyxcbiAgICBAcmVxdWVzdEJvZHkoKVxuICAgIHsgcmF0aW5nLCBsb29rLCBzbWVsbCwgdGFzdGUsIHVzZXJJZCB9OiBBZGRSZXZpZXdDb21tYW5kQm9keVxuICApOiBQcm9taXNlPHJlc3VsdHMuSnNvblJlc3VsdD4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmV2aWV3U2VydmljZS5hZGQoXG4gICAgICBuZXcgQWRkUmV2aWV3Q29tbWFuZCh1c2VySWQsIGNvZmZlZUlkLCByYXRpbmcsIGxvb2ssIHNtZWxsLCB0YXN0ZSlcbiAgICApO1xuICAgIHJldHVybiB0aGlzLmpzb24ocmVzdWx0LCBPSyk7XG4gIH1cblxuICBAaHR0cFB1dChcbiAgICAnLzpjb2ZmZWVJZC9yZXZpZXdzLzpyZXZpZXdJZC91cGRhdGUnLFxuICAgIGlzQXV0aGVudGljYXRlZCh7IHJvbGU6IFVTRVJfUk9MRS5NRU1CRVIgfSlcbiAgKVxuICBhc3luYyB1cGRhdGVSZXZpZXcoXG4gICAgQHJlcXVlc3RQYXJhbSgncmV2aWV3SWQnKSByZXZpZXdJZDogc3RyaW5nLFxuICAgIEByZXF1ZXN0Qm9keSgpIHsgcmV2aWV3IH06IFVwZGF0ZVJldmlld0NvbW1hbmRCb2R5XG4gICkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucmV2aWV3U2VydmljZS51cGRhdGUoXG4gICAgICBuZXcgVXBkYXRlUmV2aWV3Q29tbWFuZChyZXZpZXcsIHJldmlld0lkKVxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5qc29uKHJlc3VsdCwgT0spO1xuICB9XG5cbiAgQGh0dHBEZWxldGUoXG4gICAgJy86aWQvcmV2aWV3cy9kZWxldGUnLFxuICAgIGlzQXV0aGVudGljYXRlZCh7IHJvbGU6IFVTRVJfUk9MRS5NRU1CRVIgfSlcbiAgKVxuICBhc3luYyBkZWxldGVSZXZpZXcoXG4gICAgQHJlcXVlc3RQYXJhbSgncmV2aWV3SWQnKSB7IHJldmlld0lkIH06IERlbGV0ZVJldmlld0NvbW1hbmRCb2R5XG4gICkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucmV2aWV3U2VydmljZS5kZWxldGUobmV3IERlbGV0ZVJldmlld0NvbW1hbmQocmV2aWV3SWQpKTtcblxuICAgIHJldHVybiB0aGlzLmpzb24ocmVzdWx0LCBPSyk7XG4gIH1cblxuICAvLyBAaHR0cFBvc3QoJy9zZWFyY2gnKVxuICAvLyBhc3luYyBzZWFyY2goQHJlcXVlc3RQYXJhbSgpIHsgc29ydEJ5LCBza2lwLCB0YWtlIH06IFNlYXJjaFF1ZXJ5Qm9keSkge1xuICAvLyAgIGNvbnN0IF9yZXN1bHQgPSBhd2FpdCB0aGlzLkNvZmZlZVNlcnZpY2Uuc29ydEFuZFBhZ2luYXRlKFxuICAvLyAgICAgbmV3IFNlYXJjaFF1ZXJ5KHNvcnRCeSwgc2tpcCwgdGFrZSlcbiAgLy8gICApO1xuICAvLyB9XG59XG4iXSwibmFtZXMiOlsiQ29mZmVlQ29udHJvbGxlciIsIkJhc2VIdHRwQ29udHJvbGxlciIsImNvbnN0cnVjdG9yIiwiY29mZmVlU2VydmljZSIsInJldmlld1NlcnZpY2UiLCJHZXRBbGwiLCJyZXN1bHQiLCJmaW5kQWxsIiwianNvbiIsIk9LIiwiZ2V0IiwiY29mZmVlSWQiLCJmaW5kT25lIiwiRmluZE9uZUNvZmZlZVJlcG9zaXRvcnlRdWVyeSIsImFkZCIsImJyYW5kIiwibmFtZSIsInR5cGUiLCJpbWdVcmwiLCJkZXNjcmlwdGlvbiIsImJ1cm50THZsIiwicmVmbGluayIsIkNvZmZlZVN0YXR1cyIsImNvZmZlZUNvbW1hbmQiLCJDcmVhdGVDb2ZmZWVDb21tYW5kIiwiY3JlYXRlIiwidXBkYXRlIiwiY29mZmVlIiwiVXBkYXRlQ29mZmVlQ29tbWFuZCIsImRlbGV0ZSIsImlkIiwiRGVsZXRlQ29mZmVlQ29tbWFuZCIsIkdldFVzZXJSZXZpZXdzIiwidXNlcklkIiwiZ2V0QWxsIiwiR2V0VXNlclJldmlld3NRdWVyeSIsImFkZFJldmlldyIsInJhdGluZyIsImxvb2siLCJzbWVsbCIsInRhc3RlIiwiQWRkUmV2aWV3Q29tbWFuZCIsInVwZGF0ZVJldmlldyIsInJldmlld0lkIiwicmV2aWV3IiwiVXBkYXRlUmV2aWV3Q29tbWFuZCIsImRlbGV0ZVJldmlldyIsIkRlbGV0ZVJldmlld0NvbW1hbmQiLCJodHRwR2V0IiwicmVxdWVzdFBhcmFtIiwiaHR0cFBvc3QiLCJpc0F1dGhlbnRpY2F0ZWQiLCJyb2xlIiwiVVNFUl9ST0xFIiwiTUVNQkVSIiwicmVxdWVzdEJvZHkiLCJodHRwUHV0IiwiaHR0cERlbGV0ZSIsImNvbnRyb2xsZXIiLCJpbmplY3QiLCJET01BSU5fQVBQTElDQVRJT05fU0VSVklDRV9JREVOVElGSUVSUyIsIkNPRkZFRV9TRVJWSUNFIiwiUkVWSUVXX1NFUlZJQ0UiXSwibWFwcGluZ3MiOiI7Ozs7K0JBcUNhQTs7YUFBQUE7OzJCQXJDVTt1Q0FXaEI7aUNBQ1k7bUNBRW9DO2dD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
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6
