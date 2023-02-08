"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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

// node_modules/dotenv/lib/main.js
var require_main = __commonJS({
  "node_modules/dotenv/lib/main.js"(exports, module2) {
    var fs = require("fs");
    var path = require("path");
    function log(message) {
      console.log(`[dotenv][DEBUG] ${message}`);
    }
    var NEWLINE = "\n";
    var RE_INI_KEY_VAL = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/;
    var RE_NEWLINES = /\\n/g;
    var NEWLINES_MATCH = /\n|\r|\r\n/;
    function parse(src, options) {
      const debug = Boolean(options && options.debug);
      const obj = {};
      src.toString().split(NEWLINES_MATCH).forEach(function(line, idx) {
        const keyValueArr = line.match(RE_INI_KEY_VAL);
        if (keyValueArr != null) {
          const key = keyValueArr[1];
          let val = keyValueArr[2] || "";
          const end = val.length - 1;
          const isDoubleQuoted = val[0] === '"' && val[end] === '"';
          const isSingleQuoted = val[0] === "'" && val[end] === "'";
          if (isSingleQuoted || isDoubleQuoted) {
            val = val.substring(1, end);
            if (isDoubleQuoted) {
              val = val.replace(RE_NEWLINES, NEWLINE);
            }
          } else {
            val = val.trim();
          }
          obj[key] = val;
        } else if (debug) {
          log(`did not match key and value when parsing line ${idx + 1}: ${line}`);
        }
      });
      return obj;
    }
    function config2(options) {
      let dotenvPath = path.resolve(process.cwd(), ".env");
      let encoding = "utf8";
      let debug = false;
      if (options) {
        if (options.path != null) {
          dotenvPath = options.path;
        }
        if (options.encoding != null) {
          encoding = options.encoding;
        }
        if (options.debug != null) {
          debug = true;
        }
      }
      try {
        const parsed = parse(fs.readFileSync(dotenvPath, { encoding }), { debug });
        Object.keys(parsed).forEach(function(key) {
          if (!Object.prototype.hasOwnProperty.call(process.env, key)) {
            process.env[key] = parsed[key];
          } else if (debug) {
            log(`"${key}" is already defined in \`process.env\` and will not be overwritten`);
          }
        });
        return { parsed };
      } catch (e) {
        return { error: e };
      }
    }
    module2.exports.config = config2;
    module2.exports.parse = parse;
  }
});

// src/dependency/AppContainer.ts
var AppContainer_exports = {};
__export(AppContainer_exports, {
  AppContainer: () => AppContainer
});
module.exports = __toCommonJS(AppContainer_exports);
var import_inversify_express_utils4 = require("inversify-express-utils");

// src/dependency/BaseModule.ts
var import_inversify = require("inversify");
var BaseModule = class extends import_inversify.ContainerModule {
};

// src/infrastructure/database/mappings/DBMapper.ts
var import_mapper = require("@wufe/mapper");
var import_inversify2 = require("inversify");

// src/core/domain/Role/Role.ts
var Role = class {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
};

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

// src/infrastructure/database/mappings/Role/RoleEntityToRoleDomain.ts
var RoleEntityToRoleDomain = () => ({
  configureMapping(mapper) {
    mapper.createMap(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.ROLE_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.ROLE_ENTITY
      },
      Role
    );
  }
});

// src/core/domain/User/User.ts
var User = class {
  constructor(id, nickname, email, role, password, lastName, firstName) {
    this.id = id;
    this.nickname = nickname;
    this.email = email;
    this.role = role;
    this.password = password;
    this.lastName = lastName;
    this.firstName = firstName;
  }
};

// src/infrastructure/database/mappings/User/UserEntityToUserDomain.ts
var UserEntityToUserDomain = () => ({
  configureMapping(mapper) {
    mapper.createMap(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY
      },
      User
    ).forMember("role", (opt) => opt.mapFrom((src) => src.role.name));
  }
});

// src/core/domain/Coffee/Coffee.ts
var Coffee = class {
  constructor(id, brand, name, type, imgUrl, description, burntLvl, createdAt, reviews, reflink) {
    this.id = id;
    this.brand = brand;
    this.name = name;
    this.type = type;
    this.imgUrl = imgUrl;
    this.description = description;
    this.burntLvl = burntLvl;
    this.createdAt = createdAt;
    this.reviews = reviews;
    this.reflink = reflink;
  }
};

// src/infrastructure/database/mappings/Coffee/CoffeEntityToCoffeeDomain.ts
var CoffeeEntityToCoffeeDomain = () => ({
  configureMapping(mapper) {
    mapper.createMap(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.COFFEE_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.COFFEE_ENTITY
      },
      Coffee
    );
  }
});

// src/core/domain/Review/Review.ts
var Review = class {
  constructor(id, look, smell, taste, rating, coffeeId, userId) {
    this.id = id;
    this.look = look;
    this.smell = smell;
    this.taste = taste;
    this.rating = rating;
    this.coffeeId = coffeeId;
    this.userId = userId;
  }
};

// src/infrastructure/database/mappings/Review/ReviewEntityToReviewDomain.ts
var ReviewEntityToReviewDomain = () => ({
  configureMapping(mapper) {
    mapper.createMap(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.REVIEW_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.REVIEW_ENTITY
      },
      Review
    );
  }
});

// src/infrastructure/database/mappings/DBMapper.ts
var DBMapper = class {
  constructor() {
    this.mapper = new import_mapper.Mapper().withConfiguration(
      (configuration) => configuration.shouldIgnoreSourcePropertiesIfNotInDestination(true).shouldAutomaticallyMapArrays(true)
    );
    this.initialize();
  }
  initialize() {
    UserEntityToUserDomain().configureMapping(this.mapper);
    RoleEntityToRoleDomain().configureMapping(this.mapper);
    CoffeeEntityToCoffeeDomain().configureMapping(this.mapper);
    ReviewEntityToReviewDomain().configureMapping(this.mapper);
  }
};
DBMapper = __decorateClass([
  (0, import_inversify2.injectable)()
], DBMapper);

// src/infrastructure/database/orm/CROrm.ts
var import_inversify3 = require("inversify");
var import_typeorm = require("typeorm");
var import_typeorm_transactional_cls_hooked = require("typeorm-transactional-cls-hooked");
var CROrm = class {
  async initialize() {
    await (0, import_typeorm.createConnection)(process.env.ORM_CONNECTION || "");
    (0, import_typeorm_transactional_cls_hooked.initializeTransactionalContext)();
    (0, import_typeorm_transactional_cls_hooked.patchTypeORMRepositoryWithBaseRepository)();
  }
};
CROrm = __decorateClass([
  (0, import_inversify3.injectable)()
], CROrm);

// src/ui/common/mappings/UIMapper.ts
var import_inversify4 = require("inversify");
var import_mapper2 = require("@wufe/mapper");

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

// src/ui/common/mappings/User/UserDomainToUserUI.ts
var UserDomainToUserUI = () => ({
  configureMapping(mapper) {
    mapper.createMap(
      {
        destination: UI_MAPPINGS_IDENTIFIERS.USER_UI,
        source: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN
      },
      User
    );
  }
});

// src/ui/common/mappings/UIMapper.ts
var UIMapper = class {
  constructor() {
    this.mapper = new import_mapper2.Mapper().withConfiguration(
      (configuration) => configuration.shouldIgnoreSourcePropertiesIfNotInDestination(true).shouldAutomaticallyMapArrays(true)
    );
    this.initialize();
  }
  initialize() {
    UserDomainToUserUI().configureMapping(this.mapper);
  }
};
UIMapper = __decorateClass([
  (0, import_inversify4.injectable)()
], UIMapper);

// src/dependency/common/CommonModule.ts
var CommonModule = class extends BaseModule {
  constructor() {
    super((bind) => {
      this.init(bind);
    });
  }
  init(bind) {
    this.provideOrm(bind);
    this.provideDBMapper(bind);
    this.provideUIMapper(bind);
  }
  provideUIMapper(bind) {
    bind(UI_IDENTIFIERS.UI_MAPPER).to(UIMapper);
  }
  provideDBMapper(bind) {
    bind(INFRASTRUCTURE_IDENTIFIERS.DB_MAPPER).to(DBMapper);
  }
  provideOrm(bind) {
    bind(DATABASE_IDENTIFIERS.ORM).to(CROrm);
  }
};

// src/dependency/common/ApplicationModule.ts
var import_winston2 = require("winston");
var import_express2 = __toESM(require("express"));

// src/ui/portal/User/rest/v1/UserController.ts
var import_http_status_codes2 = require("http-status-codes");
var import_inversify5 = require("inversify");
var import_inversify_express_utils = require("inversify-express-utils");

// src/core/applicationServices/User/requests/command/RemoveUserCommand.ts
var RemoveUserCommand = class {
  constructor(id) {
    this.id = id;
  }
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
var isAuthenticated = (config2) => async (req, _res, next) => {
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
  if (config2) {
    const isInRole = await user.isInRole(config2.role);
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

// src/ui/portal/User/rest/v1/UserController.ts
var UserController = class extends import_inversify_express_utils.BaseHttpController {
  constructor(UserService2) {
    super();
    this.UserService = UserService2;
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
  __decorateParam(0, (0, import_inversify5.inject)(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.USER_SERVICE))
], UserController);

// src/ui/portal/Authentication/rest/v1/AuthenticationController.ts
var import_inversify_express_utils2 = require("inversify-express-utils");
var import_http_status_codes3 = require("http-status-codes");
var import_inversify6 = require("inversify");

// src/core/applicationServices/Authentication/requests/repository/command/SignUpCommand.ts
var SignUpCommand = class {
  constructor(nickname, email, password) {
    this.nickname = nickname;
    this.email = email;
    this.password = password;
  }
};

// src/core/applicationServices/Authentication/requests/handler/query/AuthenticationQuery.ts
var AuthenticationQuery = class {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
};

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
  __decorateParam(0, (0, import_inversify6.inject)(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.AUTHENTICATION_SERVICE)),
  __decorateParam(1, (0, import_inversify6.inject)(UI_APPLICATION_IDENTIFIERS.JWT_AUTHENTICATION_HANDLER)),
  __decorateParam(2, (0, import_inversify6.inject)(UI_IDENTIFIERS.UI_MAPPER))
], AuthenticationController);

// src/ui/portal/Coffee/rest/v1/CoffeeController.ts
var import_inversify7 = require("inversify");
var import_inversify_express_utils3 = require("inversify-express-utils");
var import_http_status_codes4 = require("http-status-codes");

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
  __decorateParam(0, (0, import_inversify7.inject)(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.COFFEE_SERVICE)),
  __decorateParam(1, (0, import_inversify7.inject)(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.REVIEW_SERVICE))
], CoffeeController);

// src/ui/common/config/application/express/ExpressApplication.ts
var import_express = __toESM(require("express"));
var import_morgan = __toESM(require("morgan"));
var import_method_override = __toESM(require("method-override"));
var import_helmet = __toESM(require("helmet"));
var import_cors = __toESM(require("cors"));
var import_swagger_ui_express = __toESM(require("swagger-ui-express"));
var import_inversify8 = require("inversify");

// src/ui/common/config/application/common/BaseApplication.ts
var BaseApplication = class {
  constructor(app) {
    this.app = app;
  }
  getApplication() {
    return this.app;
  }
};

// src/ui/common/config/consts/variables.ts
var dotenv = __toESM(require_main());
dotenv.config();
var APP_TOKEN_SECRET = process.env.APP_TOKEN_SECRET || "";
var APP_TOKEN_LIFE = process.env.APP_TOKEN_LIFE || "24h";
var PORT = process.env.PORT || "3000";
var LOG_LEVEL = process.env.LOG_LEVEL || "debug";
var SWAGGER_BASE_PATH = process.env.SWAGGER_BASE_PATH || "";
var { SWAGGER_HOST } = process.env;
var IS_DEVELOPMENT = process.env.NODE_ENV === "development";

// src/ui/common/config/swagger.json
var swagger_default = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "CR API",
    description: "Api documentation for CR project \n",
    contact: {
      name: "MediaHunters"
    },
    license: {
      name: "[PUT LICENSE NAME HERE]"
    }
  },
  host: "localhost:3000",
  basePath: "/v1",
  tags: [
    {
      name: "auth",
      description: "Api endpoints related to authentication"
    }
  ],
  securityDefinitions: {
    bearer: {
      type: "apiKey",
      name: "Authorization",
      in: "header"
    }
  },
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    "/user": {
      delete: {
        security: [
          {
            bearer: []
          }
        ],
        tags: ["user"],
        description: "User endpoint",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              $ref: "#/definitions/UserDeleteRequest"
            }
          }
        ],
        responses: {
          "200": {
            description: "Returns authentication token"
          }
        }
      }
    }
  }
};

// src/ui/common/config/application/express/ExpressApplication.ts
var ExpressApplication = class extends BaseApplication {
  constructor(logger, app, router) {
    super(app);
    this.logger = logger;
    this.router = router;
  }
  initialize() {
    this.initializeSecurity();
    this.initializeBodyParsers();
    if (process.env.NODE_ENV !== "test") {
      this.initializeLogging();
    }
    this.initializeHandlers();
    this.initializePlugins();
    this.initializeExtensions();
  }
  initializeSecurity() {
    this.app.use(import_express.default.urlencoded({ extended: false }));
  }
  initializeBodyParsers() {
    this.app.use(import_express.default.json());
  }
  initializeLogging() {
    this.logger.initialize();
    import_morgan.default.token(
      "body",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (req) => `
REQUEST BODY: ${JSON.stringify(req.body)}`
    );
    this.app.use(
      (0, import_morgan.default)(
        ":method :url HTTP/:http-version :status :response-time ms :referrer :user-agent - :body",
        { stream: this.logger }
      )
    );
  }
  initializeHandlers() {
    Error("NOT IMPLEMENTED");
  }
  initializePlugins() {
    this.app.use((0, import_method_override.default)());
    this.app.use((0, import_helmet.default)());
    this.app.use((0, import_cors.default)());
  }
  initializeExtensions() {
    if (SWAGGER_HOST) {
      swagger_default.host = SWAGGER_HOST;
      this.app.use(
        SWAGGER_BASE_PATH,
        import_swagger_ui_express.default.serve,
        import_swagger_ui_express.default.setup(swagger_default)
      );
    }
  }
};
ExpressApplication = __decorateClass([
  (0, import_inversify8.injectable)(),
  __decorateParam(0, (0, import_inversify8.inject)(UI_APPLICATION_IDENTIFIERS.LOGGER_WINSTON)),
  __decorateParam(1, (0, import_inversify8.inject)(UI_APPLICATION_IDENTIFIERS.EXPRESS)),
  __decorateParam(2, (0, import_inversify8.inject)(UI_APPLICATION_IDENTIFIERS.EXPRESS_ROUTER))
], ExpressApplication);

// src/ui/common/config/logger/WinstonLogger.ts
var import_winston = require("winston");
var import_winston_daily_rotate_file = __toESM(require("winston-daily-rotate-file"));
var import_inversify9 = require("inversify");

// src/ui/common/config/logger/BaseLogger.ts
var BaseLogger = class {
  constructor(logger) {
    this.logger = logger;
  }
  getLogger() {
    return this.logger;
  }
};

// src/ui/common/config/logger/WinstonLogger.ts
var WinstonLogger = class extends BaseLogger {
  constructor(format2, logger) {
    super(logger);
    this.format = format2;
  }
  initialize() {
    const loggerConfig = {
      datePattern: "YYYY-MM-DD",
      dirname: "./logs",
      format: this.format,
      maxFiles: "14d",
      maxSize: "20m",
      zippedArchive: true
    };
    this.logger.add(
      new import_winston_daily_rotate_file.default({
        filename: "cr-%DATE%.info.log",
        level: "info",
        ...loggerConfig
      })
    );
    if (IS_DEVELOPMENT) {
      this.logger.add(
        new import_winston.transports.Console({
          format: import_winston.format.combine(import_winston.format.colorize(), this.format),
          handleExceptions: true,
          level: "debug"
        })
      );
    }
  }
  write(message) {
    this.logger.info(message);
  }
};
WinstonLogger = __decorateClass([
  (0, import_inversify9.injectable)(),
  __decorateParam(0, (0, import_inversify9.inject)(UI_APPLICATION_IDENTIFIERS.LOGGER_FORMAT)),
  __decorateParam(1, (0, import_inversify9.inject)(UI_APPLICATION_IDENTIFIERS.LOGGER))
], WinstonLogger);

// src/ui/common/config/application/express/auth/JWTAuthenticationHandler.ts
var import_inversify10 = require("inversify");
var import_http_status_codes5 = require("http-status-codes");

// src/ui/common/config/application/common/auth/models/Authentication.ts
var Authentication = class {
  constructor(token, user) {
    this.token = token;
    this.user = user;
  }
};

// src/ui/common/config/application/express/auth/JWTAuthenticationHandler.ts
var PAYLOAD_KEY = "user";
var JWTAuthenticationHandler = class {
  constructor(jwtTokenUtil, authenticationService, uiMapper) {
    this.jwtTokenUtil = jwtTokenUtil;
    this.authenticationService = authenticationService;
    this.uiMapper = uiMapper;
  }
  async authenticate(request) {
    const user = await this.authenticationService.verifyCredentials(request);
    if (!user) {
      throw new UserInterfaceError(import_http_status_codes5.NOT_FOUND, "USER_NOT_FOUND");
    }
    const userUi = this.uiMapper.mapper.map(
      {
        destination: UI_MAPPINGS_IDENTIFIERS.USER_UI,
        source: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN
      },
      user
    );
    return new Authentication(
      this.jwtTokenUtil.generateToken(
        userUi,
        APP_TOKEN_SECRET,
        APP_TOKEN_LIFE,
        PAYLOAD_KEY
      ),
      user
    );
  }
};
JWTAuthenticationHandler = __decorateClass([
  (0, import_inversify10.injectable)(),
  __decorateParam(0, (0, import_inversify10.inject)(UI_APPLICATION_IDENTIFIERS.JWT_TOKEN_UTIL)),
  __decorateParam(1, (0, import_inversify10.inject)(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.AUTHENTICATION_SERVICE)),
  __decorateParam(2, (0, import_inversify10.inject)(UI_IDENTIFIERS.UI_MAPPER))
], JWTAuthenticationHandler);

// src/ui/common/config/application/common/auth/utils/JWTTokenUtil.ts
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));
var import_inversify11 = require("inversify");
var JWTTokenUtil = class {
  constructor() {
    this.AUTH_HEADER = "authorization";
    this.SCHEME = "bearer";
    this.MATCHER = /(\S+)\s+(\S+)/;
  }
  generateToken(payload, secret, expiresIn, payloadKey) {
    return import_jsonwebtoken.default.sign(payloadKey ? { [payloadKey]: payload } : payload, secret, {
      expiresIn
    });
  }
  decodeToken(token) {
    try {
      return import_jsonwebtoken.default.verify(token, APP_TOKEN_SECRET);
    } catch {
      return null;
    }
  }
  getTokenFromHeaders(headers) {
    const authHeader = headers[this.AUTH_HEADER];
    if (!authHeader) {
      return null;
    }
    const matches = authHeader.match(this.MATCHER);
    return matches && matches[2];
  }
};
JWTTokenUtil = __decorateClass([
  (0, import_inversify11.injectable)()
], JWTTokenUtil);

// src/dependency/common/ApplicationModule.ts
var ApplicationModule = class extends BaseModule {
  constructor() {
    super((bind) => {
      this.init(bind);
    });
  }
  init(bind) {
    this.provideExpress(bind);
    this.provideExpressRouter(bind);
    this.provideExpressApplication(bind);
    this.provideWinstonLogger(bind);
    this.provideLoggerFormat(bind);
    this.provideLogger(bind);
    this.provideJWTAuthenticationHandler(bind);
    this.provideJWTTokenUtil(bind);
  }
  provideExpress(bind) {
    bind(
      UI_APPLICATION_IDENTIFIERS.EXPRESS
    ).toConstantValue((0, import_express2.default)());
  }
  provideExpressRouter(bind) {
    bind(
      UI_APPLICATION_IDENTIFIERS.EXPRESS_ROUTER
    ).toConstantValue(
      import_express2.default.Router({
        caseSensitive: false,
        mergeParams: false,
        strict: false
      })
    );
  }
  provideExpressApplication(bind) {
    bind(UI_APPLICATION_IDENTIFIERS.EXPRESS_APPLICATION).to(
      ExpressApplication
    );
  }
  provideWinstonLogger(bind) {
    bind(UI_APPLICATION_IDENTIFIERS.LOGGER_WINSTON).to(WinstonLogger);
  }
  provideLoggerFormat(bind) {
    bind(UI_APPLICATION_IDENTIFIERS.LOGGER_FORMAT).toConstantValue(
      import_winston2.format.combine(
        import_winston2.format.colorize({
          all: true
        }),
        import_winston2.format.label({
          label: "[LOGGER]"
        }),
        import_winston2.format.timestamp({
          format: "YY-MM-DD HH:MM:SS"
        }),
        import_winston2.format.printf(
          (info) => `${info.label} ${info.timestamp} [${info.level}] : ${info.message} `
        )
      )
    );
  }
  provideLogger(bind) {
    bind(UI_APPLICATION_IDENTIFIERS.LOGGER).toConstantValue(
      (0, import_winston2.createLogger)({
        exitOnError: false,
        level: LOG_LEVEL
      })
    );
  }
  provideJWTTokenUtil(bind) {
    bind(UI_APPLICATION_IDENTIFIERS.JWT_TOKEN_UTIL).to(
      JWTTokenUtil
    );
  }
  provideJWTAuthenticationHandler(bind) {
    bind(
      UI_APPLICATION_IDENTIFIERS.JWT_AUTHENTICATION_HANDLER
    ).to(JWTAuthenticationHandler);
  }
};

// src/dependency/BaseContainer.ts
var import_inversify12 = require("inversify");
var BaseContainer = class extends import_inversify12.Container {
};

// src/ui/common/config/errors/handlers/errorHandler.ts
var import_http_status_codes6 = require("http-status-codes");

// src/core/common/errors/CoreError.ts
var CoreError = class extends BaseError {
};

// src/ui/common/config/errors/models/ErrorResponse.ts
var ErrorResponse = class {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }
};

// src/ui/common/config/errors/handlers/errorHandler.ts
var errorHandler = (app) => app.use(
  (error, req, res, next) => {
    next();
    switch (error.constructor) {
      case UserInterfaceError:
        return res.status(error.status).json(new ErrorResponse(error.code, error.message));
      case CoreError:
        return res.status(import_http_status_codes6.UNPROCESSABLE_ENTITY).json(new ErrorResponse(error.code, error.message));
      case BaseError:
        return res.status(import_http_status_codes6.NOT_FOUND).json(new ErrorResponse(error.code, error.message));
      default:
        return res.status(import_http_status_codes6.INTERNAL_SERVER_ERROR).json(
          new ErrorResponse(import_http_status_codes6.INTERNAL_SERVER_ERROR.toString(), error.message)
        );
    }
  }
);

// src/core/applicationServices/Authentication/AuthenticationService.ts
var import_inversify13 = require("inversify");
var import_bcrypt = require("bcrypt");

// src/core/domainServices/User/request/UnitOfWorkRepository/command/AddUserUnitOfWorkRepositoryCommand.ts
var AddUserUnitOfWorkRepositoryCommand = class {
  constructor(email, password, nickname) {
    this.email = email;
    this.password = password;
    this.nickname = nickname;
  }
};

// src/core/domainServices/User/request/Repository/query/FindUserByEmailRepositoryQuery.ts
var FindUserByEmailRepositoryQuery = class {
  constructor(email) {
    this.email = email;
  }
};

// src/core/applicationServices/Authentication/AuthenticationService.ts
var AuthenticationService = class {
  constructor(userUnitOfWork, userRepository) {
    this.userUnitOfWork = userUnitOfWork;
    this.userRepository = userRepository;
  }
  signUp({ nickname, email, password }) {
    return this.userUnitOfWork.addUser(
      new AddUserUnitOfWorkRepositoryCommand(email, password, nickname)
    );
  }
  async verifyCredentials({
    email,
    password
  }) {
    const user = await this.userRepository.findUserByEmail(
      new FindUserByEmailRepositoryQuery(email)
    );
    if (!user || !await (0, import_bcrypt.compare)(password, user?.password || "")) {
      return void 0;
    }
    return user;
  }
};
AuthenticationService = __decorateClass([
  (0, import_inversify13.injectable)(),
  __decorateParam(0, (0, import_inversify13.inject)(DOMAIN_UNIT_OF_WORK_IDENTIFIERS.USER_UNIT_OF_WORK)),
  __decorateParam(1, (0, import_inversify13.inject)(DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY))
], AuthenticationService);

// src/dependency/shared/Authentication/AuthenticationModule.ts
var AuthenticationModule = class extends BaseModule {
  constructor() {
    super((bind) => {
      this.init(bind);
    });
  }
  init(bind) {
    this.provideAuthenticationService(bind);
  }
  provideAuthenticationService(bind) {
    bind(
      DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.AUTHENTICATION_SERVICE
    ).to(AuthenticationService);
  }
};

// src/infrastructure/database/repository/User/UserRepository.ts
var import_inversify15 = require("inversify");
var import_bcrypt2 = require("bcrypt");

// src/infrastructure/database/entities/User.ts
var import_typeorm3 = require("typeorm");

// src/infrastructure/database/entities/Base.ts
var import_typeorm2 = require("typeorm");
var Model = class extends import_typeorm2.BaseEntity {
};
__decorateClass([
  (0, import_typeorm2.PrimaryGeneratedColumn)("uuid")
], Model.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm2.CreateDateColumn)()
], Model.prototype, "createdAt", 2);
__decorateClass([
  (0, import_typeorm2.UpdateDateColumn)()
], Model.prototype, "updatedAt", 2);

// src/infrastructure/database/entities/User.ts
var User2 = class extends Model {
  toJson() {
    return {
      ...this,
      password: void 0
    };
  }
};
__decorateClass([
  (0, import_typeorm3.Column)("text", {
    nullable: true
  })
], User2.prototype, "firstName", 2);
__decorateClass([
  (0, import_typeorm3.Column)("text", {
    nullable: true
  })
], User2.prototype, "lastName", 2);
__decorateClass([
  (0, import_typeorm3.Column)("text", { unique: true })
], User2.prototype, "nickname", 2);
__decorateClass([
  (0, import_typeorm3.Column)("text")
], User2.prototype, "email", 2);
__decorateClass([
  (0, import_typeorm3.Column)("text")
], User2.prototype, "password", 2);
__decorateClass([
  (0, import_typeorm3.ManyToOne)("Role", (role) => role.user)
], User2.prototype, "role", 2);
__decorateClass([
  (0, import_typeorm3.OneToMany)("Review", (review) => review.user)
], User2.prototype, "reviews", 2);
User2 = __decorateClass([
  (0, import_typeorm3.Entity)()
], User2);

// src/infrastructure/database/repository/common/Repository.ts
var import_typeorm4 = require("typeorm");
var import_inversify14 = require("inversify");
var Repository = class extends import_typeorm4.AbstractRepository {
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
    return (0, import_typeorm4.getRepository)(this.entity, this.getConnectionName());
  }
};
Repository = __decorateClass([
  (0, import_inversify14.injectable)()
], Repository);

// src/infrastructure/database/entities/Role.ts
var import_typeorm5 = require("typeorm");

// src/infrastructure/database/enum/UserRole.ts
var USER_ROLE2 = /* @__PURE__ */ ((USER_ROLE3) => {
  USER_ROLE3["ADMIN"] = "ADMIN";
  USER_ROLE3["MEMBER"] = "MEMBER";
  return USER_ROLE3;
})(USER_ROLE2 || {});

// src/infrastructure/database/entities/Role.ts
var Role2 = class extends Model {
};
__decorateClass([
  (0, import_typeorm5.Column)({
    default: "MEMBER" /* MEMBER */,
    enum: USER_ROLE2,
    nullable: false,
    type: "enum"
  })
], Role2.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm5.OneToMany)("User", (user) => user.role)
], Role2.prototype, "user", 2);
Role2 = __decorateClass([
  (0, import_typeorm5.Entity)()
], Role2);

// src/infrastructure/common/errors/InfrastructureErrors.ts
var InfrastructureErrors = /* @__PURE__ */ ((InfrastructureErrors2) => {
  InfrastructureErrors2[InfrastructureErrors2["USER_NOT_FOUND"] = 0] = "USER_NOT_FOUND";
  InfrastructureErrors2[InfrastructureErrors2["USER_ALREADY_EXIST"] = 1] = "USER_ALREADY_EXIST";
  InfrastructureErrors2[InfrastructureErrors2["ROLE_NOT_FOUND"] = 2] = "ROLE_NOT_FOUND";
  InfrastructureErrors2[InfrastructureErrors2["COFFEE_NOT_FOUND"] = 3] = "COFFEE_NOT_FOUND";
  InfrastructureErrors2[InfrastructureErrors2["REVIEW_NOT_FOUND"] = 4] = "REVIEW_NOT_FOUND";
  return InfrastructureErrors2;
})(InfrastructureErrors || {});

// src/infrastructure/database/repository/User/UserRepository.ts
var UserRepository = class extends Repository {
  constructor(dbMapper) {
    super(User2);
    this.dbMapper = dbMapper;
  }
  async addUser({
    nickname,
    email,
    password,
    roleId
  }) {
    const user = new User2();
    user.nickname = nickname;
    user.email = email;
    user.password = (0, import_bcrypt2.hashSync)(password, 10);
    const memberRole = new Role2();
    memberRole.id = roleId;
    user.role = memberRole;
    const savedUser = await this.save(user);
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY
      },
      savedUser
    );
  }
  async removeUser({
    id
  }) {
    const result = await this.custom().createQueryBuilder().leftJoinAndSelect("User.role", "Role").where("User.id = :id ", { id }).getOne();
    if (!result) {
      throw new BaseError(
        InfrastructureErrors[0 /* USER_NOT_FOUND */]
      );
    }
    await this.remove(result);
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY
      },
      result
    );
  }
  async findUserByEmail({
    email
  }) {
    const result = await this.custom().createQueryBuilder().leftJoinAndSelect("User.role", "role").where("User.email = :email", { email }).getMany();
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY
      },
      result[0]
    );
  }
  async getUser({ id }) {
    const result = await this.custom().createQueryBuilder().leftJoinAndSelect("User.role", "Role").where("User.id = :id ", { id }).getOne();
    if (!result) {
      throw new BaseError(
        InfrastructureErrors[0 /* USER_NOT_FOUND */]
      );
    }
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY
      },
      result
    );
  }
  async getUsers() {
    const users = await this.custom().createQueryBuilder().leftJoinAndSelect("User.role", "role").getMany();
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY
      },
      users
    );
  }
  async checkIfUserAlreadyExists({
    nickname,
    email
  }) {
    const result = await this.custom().createQueryBuilder().leftJoinAndSelect("User.role", "role").where("User.nickname = :nickname OR User.email = :email", {
      nickname,
      email
    }).getMany();
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY
      },
      result
    );
  }
};
UserRepository = __decorateClass([
  __decorateParam(0, (0, import_inversify15.inject)(INFRASTRUCTURE_IDENTIFIERS.DB_MAPPER))
], UserRepository);

// src/core/applicationServices/User/UserService.ts
var import_inversify16 = require("inversify");

// src/core/domainServices/User/request/Repository/query/GetUserRepositoryQuery.ts
var GetUserRepositoryQuery = class {
  constructor(id) {
    this.id = id;
  }
};

// src/core/domainServices/User/request/Repository/query/GetUsersRepositoryQuery.ts
var GetUsersRepositoryQuery = class {
};

// src/core/domainServices/User/request/UnitOfWorkRepository/command/DeleteUserUnitOfWorkRepositoryCommand.ts
var DeleteUserUnitOfWorkRepositoryCommand = class {
  constructor(id) {
    this.id = id;
  }
};

// src/core/applicationServices/User/UserService.ts
var UserService = class {
  constructor(userRepository, userUnitOfWork) {
    this.userRepository = userRepository;
    this.userUnitOfWork = userUnitOfWork;
  }
  removeUser({ id }) {
    return this.userUnitOfWork.deleteUser(
      new DeleteUserUnitOfWorkRepositoryCommand(id)
    );
  }
  fetchUser({ id }) {
    return this.userRepository.getUser(new GetUserRepositoryQuery(id));
  }
  fetchUsers() {
    return this.userRepository.getUsers(new GetUsersRepositoryQuery());
  }
};
UserService = __decorateClass([
  (0, import_inversify16.injectable)(),
  __decorateParam(0, (0, import_inversify16.inject)(DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY)),
  __decorateParam(1, (0, import_inversify16.inject)(DOMAIN_UNIT_OF_WORK_IDENTIFIERS.USER_UNIT_OF_WORK))
], UserService);

// src/infrastructure/database/repository/User/UserUnitOfWork.ts
var import_inversify17 = require("inversify");

// src/core/domainServices/Role/requests/repository/query/FindRoleByNameRepositoryQuery.ts
var FindRoleByNameRepositoryQuery = class {
  constructor(name) {
    this.name = name;
  }
};

// src/core/domainServices/User/request/Repository/command/AddUserRepositoryCommand.ts
var AddUserRepositoryCommand = class {
  constructor(nickname, email, password, roleId) {
    this.nickname = nickname;
    this.email = email;
    this.password = password;
    this.roleId = roleId;
  }
};

// src/core/domainServices/User/request/Repository/query/CheckIfUserAlreadyExistsRepositoryQuery.ts
var CheckIfUserAlreadyExistsRepositoryQuery = class {
  constructor(nickname, email) {
    this.nickname = nickname;
    this.email = email;
  }
};

// src/infrastructure/database/repository/User/UserUnitOfWork.ts
var UserUnitOfWork = class {
  constructor(userRepository, roleRepository) {
    this.userRepository = userRepository;
    this.roleRepository = roleRepository;
  }
  async addUser({
    email,
    password,
    nickname
  }) {
    const checkIfUserExist = await this.userRepository.checkIfUserAlreadyExists(
      new CheckIfUserAlreadyExistsRepositoryQuery(nickname, email)
    );
    if (checkIfUserExist.length > 0) {
      throw new BaseError(
        InfrastructureErrors[1 /* USER_ALREADY_EXIST */]
      );
    }
    const { id } = await this.roleRepository.findRoleByName(
      new FindRoleByNameRepositoryQuery("ADMIN" /* ADMIN */)
    );
    return this.userRepository.addUser(
      new AddUserRepositoryCommand(nickname, email, password, id)
    );
  }
  deleteUser(command) {
    return this.userRepository.removeUser(command);
  }
};
UserUnitOfWork = __decorateClass([
  (0, import_inversify17.injectable)(),
  __decorateParam(0, (0, import_inversify17.inject)(DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY)),
  __decorateParam(1, (0, import_inversify17.inject)(DOMAIN_REPOSITORY_IDENTIFIERS.ROLE_REPOSITORY))
], UserUnitOfWork);

// src/dependency/shared/User/UserModule.ts
var UserModule = class extends BaseModule {
  constructor() {
    super((bind) => {
      this.init(bind);
    });
  }
  init(bind) {
    this.provideUserRepository(bind);
    this.provideUserUnitOfWork(bind);
    this.provideUserService(bind);
  }
  provideUserRepository(bind) {
    bind(DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY).to(
      UserRepository
    );
  }
  provideUserUnitOfWork(bind) {
    bind(DOMAIN_UNIT_OF_WORK_IDENTIFIERS.USER_UNIT_OF_WORK).to(
      UserUnitOfWork
    );
  }
  provideUserService(bind) {
    bind(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.USER_SERVICE).to(
      UserService
    );
  }
};

// src/infrastructure/database/repository/role/RoleRepository.ts
var import_inversify18 = require("inversify");
var import_typeorm6 = require("typeorm");
var RoleRepository = class extends Repository {
  constructor(dbMapper) {
    super(Role2);
    this.dbMapper = dbMapper;
  }
  async findRole({ id }) {
    const role = await this.find(id);
    if (!role) {
      throw new BaseError(
        InfrastructureErrors[2 /* ROLE_NOT_FOUND */]
      );
    }
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.ROLE_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.ROLE_ENTITY
      },
      role
    );
  }
  async findRoleByName({ name }) {
    const role = await this.custom().createQueryBuilder().where('"Role"."name" = :name', {
      name
    }).getOne();
    if (!role) {
      throw new BaseError(
        InfrastructureErrors[2 /* ROLE_NOT_FOUND */]
      );
    }
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.ROLE_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.ROLE_ENTITY
      },
      role
    );
  }
};
RoleRepository = __decorateClass([
  (0, import_inversify18.injectable)(),
  (0, import_typeorm6.EntityRepository)(Role2),
  __decorateParam(0, (0, import_inversify18.inject)(INFRASTRUCTURE_IDENTIFIERS.DB_MAPPER))
], RoleRepository);

// src/dependency/Administration/RoleModule.ts
var RoleModule = class extends BaseModule {
  constructor() {
    super((bind) => {
      this.init(bind);
    });
  }
  init(bind) {
    this.provideRoleRepository(bind);
  }
  provideRoleRepository(bind) {
    bind(DOMAIN_REPOSITORY_IDENTIFIERS.ROLE_REPOSITORY).to(
      RoleRepository
    );
  }
};

// src/ui/common/config/application/express/auth/middlewares/ApplicationAuthProvider.ts
var import_inversify19 = require("inversify");

// src/ui/common/models/User.ts
var User3 = class {
  constructor(id, nickname, email, role) {
    this.id = id;
    this.nickname = nickname;
    this.email = email;
    this.role = role;
  }
};

// src/core/applicationServices/User/requests/query/FetchUserQuery.ts
var FetchUserQuery = class {
  constructor(id) {
    this.id = id;
  }
};

// src/ui/common/config/application/express/auth/models/Principal.ts
var Principal = class {
  constructor(details) {
    this.details = details;
  }
  isAuthenticated() {
    return Promise.resolve(!!this.details);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isResourceOwner(resourceId) {
    return Promise.resolve(resourceId === true);
  }
  isInRole(role) {
    return Promise.resolve(role === this.details?.role);
  }
};

// src/ui/common/config/application/express/auth/middlewares/ApplicationAuthProvider.ts
var ApplicationAuthProvider = class {
  async getUser(req, res, next) {
    const token = this.jwtTokenUtil.getTokenFromHeaders(req.headers);
    if (!token) {
      return new Principal(void 0);
    }
    const tokenData = await this.jwtTokenUtil.decodeToken(token);
    if (!tokenData) {
      return new Principal(void 0);
    }
    const { user } = tokenData;
    try {
      const existingUser = await this.userService.fetchUser(
        new FetchUserQuery(user.id)
      );
      if (!existingUser) {
        return new Principal(void 0);
      }
      return new Principal(
        new User3(user.id, user.nickname, user.email, user.role)
      );
    } catch (error) {
      next(error);
      return new Principal(void 0);
    }
  }
};
__decorateClass([
  (0, import_inversify19.inject)(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.USER_SERVICE)
], ApplicationAuthProvider.prototype, "userService", 2);
__decorateClass([
  (0, import_inversify19.inject)(UI_APPLICATION_IDENTIFIERS.JWT_TOKEN_UTIL)
], ApplicationAuthProvider.prototype, "jwtTokenUtil", 2);
ApplicationAuthProvider = __decorateClass([
  (0, import_inversify19.injectable)()
], ApplicationAuthProvider);

// src/core/applicationServices/Coffee/CoffeeService.ts
var import_inversify20 = require("inversify");

// src/core/domainServices/Coffee/requests/UnitOfWork/command/AddCoffeeUnitOfWorkRepositoryCommand.ts
var CreateCoffeeUnitOfWorkRepositoryCommand = class {
  constructor(brand, name, type, imgUrl, description, burntLvl, reflink, CoffeeStatus) {
    this.brand = brand;
    this.name = name;
    this.type = type;
    this.imgUrl = imgUrl;
    this.description = description;
    this.burntLvl = burntLvl;
    this.reflink = reflink;
    this.CoffeeStatus = CoffeeStatus;
  }
};

// src/core/domainServices/Coffee/requests/UnitOfWork/command/DeleteCoffeeUnitOfWorkRepositoryCommand.ts
var DeleteCoffeeUnitOfWorkRepositoryCommand = class {
  constructor(id) {
    this.id = id;
  }
};

// src/core/applicationServices/Coffee/CoffeeService.ts
var CoffeeService = class {
  constructor(coffeUnitOfWork, coffeRepository) {
    this.coffeUnitOfWork = coffeUnitOfWork;
    this.coffeRepository = coffeRepository;
  }
  findAll() {
    return this.coffeRepository.findAllCoffees();
  }
  findOne({ id }) {
    return this.coffeRepository.findOneCoffee(
      new FindOneCoffeeRepositoryQuery(id)
    );
  }
  create({
    brand,
    name,
    type,
    imgUrl,
    description,
    burntLvl,
    reflink,
    CoffeeStatus
  }) {
    return this.coffeRepository.createCoffee(
      new CreateCoffeeUnitOfWorkRepositoryCommand(
        brand,
        name,
        type,
        imgUrl,
        description,
        burntLvl,
        CoffeeStatus,
        reflink || ""
      )
    );
  }
  update({ coffee, coffeeId }) {
    return this.coffeRepository.updateCoffee({ coffee, coffeeId });
  }
  delete(command) {
    return this.coffeUnitOfWork.delete(
      new DeleteCoffeeUnitOfWorkRepositoryCommand(command.id)
    );
  }
  // addReview({
  //   userId,
  //   coffeeId,
  //   look,
  //   smell,
  //   taste,
  // }: AddCoffeeReviewCommand): Promise<Coffee> {
  //   return this.CoffeUnitOfWork.addCoffeeReview(
  //     new AddCoffeeReviewUnitOfWorkRepositoryCommand(
  //       userId,
  //       coffeeId,
  //       look,
  //       smell,
  //       taste
  //     )
  //   );
  // }
  // sortAndPaginate({ sortBy, skip, take }: SearchQuery): Promise<Coffee> {
  //   return this.CoffeRepository.sortAndPaginate(
  //     new SearchRepositoryQuery(sortBy, skip, take)
  //   );
  // }
};
CoffeeService = __decorateClass([
  (0, import_inversify20.injectable)(),
  __decorateParam(0, (0, import_inversify20.inject)(DOMAIN_UNIT_OF_WORK_IDENTIFIERS.COFFEE_UNIT_OF_WORK)),
  __decorateParam(1, (0, import_inversify20.inject)(DOMAIN_REPOSITORY_IDENTIFIERS.COFFEE_REPOSITORY))
], CoffeeService);

// src/infrastructure/database/repository/Coffee/CoffeeRepository.ts
var import_inversify21 = require("inversify");

// src/infrastructure/database/entities/Coffee.ts
var import_typeorm7 = require("typeorm");

// src/core/domain/Coffee/CoffeeType.ts
var COFFEE_TYPE = /* @__PURE__ */ ((COFFEE_TYPE2) => {
  COFFEE_TYPE2["BEANS"] = "BEANS";
  COFFEE_TYPE2["POWDER"] = "POWDER";
  return COFFEE_TYPE2;
})(COFFEE_TYPE || {});

// src/core/domain/Coffee/CoffeeBurnLvl.ts
var COFFEE_BURNT_LVL = /* @__PURE__ */ ((COFFEE_BURNT_LVL2) => {
  COFFEE_BURNT_LVL2["LIGHT_ROAST"] = "LIGHT_ROAST";
  COFFEE_BURNT_LVL2["MEDUIM_ROAST"] = "MEDIUM_ROAST";
  COFFEE_BURNT_LVL2["DARK_ROAST"] = "DARK_ROAST";
  return COFFEE_BURNT_LVL2;
})(COFFEE_BURNT_LVL || {});

// src/infrastructure/database/enum/CoffeStatus.ts
var COFFEE_STATUS = /* @__PURE__ */ ((COFFEE_STATUS2) => {
  COFFEE_STATUS2["WAITING_QUEUE"] = "WAITING_QUEUE";
  COFFEE_STATUS2["VERIFIED"] = "VERIFIED";
  COFFEE_STATUS2["BLOCKED"] = "BLOCKED";
  return COFFEE_STATUS2;
})(COFFEE_STATUS || {});

// src/infrastructure/database/entities/Coffee.ts
var Coffee2 = class extends Model {
};
__decorateClass([
  (0, import_typeorm7.Column)("text")
], Coffee2.prototype, "brand", 2);
__decorateClass([
  (0, import_typeorm7.Column)("text")
], Coffee2.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm7.Column)({
    enum: COFFEE_TYPE,
    nullable: false,
    type: "enum"
  })
], Coffee2.prototype, "type", 2);
__decorateClass([
  (0, import_typeorm7.Column)("text")
], Coffee2.prototype, "imgUrl", 2);
__decorateClass([
  (0, import_typeorm7.Column)("text")
], Coffee2.prototype, "description", 2);
__decorateClass([
  (0, import_typeorm7.Column)({
    enum: COFFEE_BURNT_LVL,
    nullable: false,
    type: "enum"
  })
], Coffee2.prototype, "burntLvl", 2);
__decorateClass([
  (0, import_typeorm7.Column)("text")
], Coffee2.prototype, "reflink", 2);
__decorateClass([
  (0, import_typeorm7.Column)({
    enum: COFFEE_STATUS,
    nullable: false,
    type: "enum",
    default: "WAITING_QUEUE" /* WAITING_QUEUE */
  })
], Coffee2.prototype, "CoffeeStatus", 2);
__decorateClass([
  (0, import_typeorm7.OneToMany)("Review", (Review3) => Review3.coffee, {
    cascade: true
  })
], Coffee2.prototype, "reviews", 2);
Coffee2 = __decorateClass([
  (0, import_typeorm7.Entity)()
], Coffee2);

// src/infrastructure/database/repository/Coffee/CoffeeRepository.ts
var CoffeeRepository = class extends Repository {
  constructor(dbMapper) {
    super(Coffee2);
    this.dbMapper = dbMapper;
  }
  async findAllCoffees() {
    const coffees = await this.custom().createQueryBuilder().leftJoinAndSelect("Coffee.reviews", "Review").getMany();
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.COFFEE_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.COFFEE_ENTITY
      },
      coffees
    );
  }
  async findOneCoffee({ id }) {
    const coffee = await this.custom().createQueryBuilder().leftJoinAndSelect("Coffee.reviews", "Review").where("Coffee.id = :id ", { id }).getOne();
    if (!coffee) {
      throw new BaseError(
        InfrastructureErrors[3 /* COFFEE_NOT_FOUND */]
      );
    }
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.COFFEE_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.COFFEE_ENTITY
      },
      coffee
    );
  }
  async createCoffee({
    CoffeeStatus,
    brand,
    name,
    type,
    imgUrl,
    description,
    burntLvl,
    reflink
  }) {
    const coffee = new Coffee2();
    coffee.brand = brand;
    coffee.name = name;
    coffee.type = type;
    coffee.imgUrl = imgUrl;
    coffee.description = description;
    coffee.burntLvl = burntLvl;
    coffee.reflink = reflink;
    coffee.CoffeeStatus = CoffeeStatus;
    coffee.createdAt = /* @__PURE__ */ new Date();
    coffee.type = type;
    coffee.reviews = [];
    const savedCoffee = await this.save(coffee);
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.COFFEE_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.COFFEE_ENTITY
      },
      savedCoffee
    );
  }
  async updateCoffee({
    coffee,
    coffeeId
  }) {
    const updatedCoffee = await this.custom().createQueryBuilder().update(Coffee2).set({ ...coffee }).where("id = :id", { id: coffeeId }).execute();
    return updatedCoffee;
  }
  // TODO: make it transational
  async deleteCoffee({ id }) {
    const result = await this.custom().createQueryBuilder().leftJoinAndSelect("Coffee.reviews", "Review").where("Coffee.id = :id ", { id }).getOne();
    if (!result) {
      throw new BaseError(
        InfrastructureErrors[3 /* COFFEE_NOT_FOUND */]
      );
    }
    this.remove(result);
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.COFFEE_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.COFFEE_ENTITY
      },
      result
    );
  }
  // sortAndPaginate({
  //   sortBy,
  //   skip,
  //   take,
  // }: SearchRepositoryQuery): Promise<Coffee> {
  //   // const result = await this.custom().createQueryBuilder().addOrderBy(sortB, skip, take))
  // }
};
CoffeeRepository = __decorateClass([
  __decorateParam(0, (0, import_inversify21.inject)(INFRASTRUCTURE_IDENTIFIERS.DB_MAPPER))
], CoffeeRepository);

// src/infrastructure/database/repository/Coffee/CoffeeUnitOfWork.ts
var import_inversify22 = require("inversify");

// src/core/domainServices/Coffee/requests/repository/command/DeleteCoffeeRepositoryCommand.ts
var DeleteCoffeeRepositoryCommand = class {
  constructor(id) {
    this.id = id;
  }
};

// src/core/domainServices/Coffee/requests/repository/command/CreateCoffeeRepositoryCommand.ts
var CreateCoffeeRepositoryCommand = class {
  constructor(brand, name, type, imgUrl, description, burntLvl, reflink, CoffeeStatus) {
    this.brand = brand;
    this.name = name;
    this.type = type;
    this.imgUrl = imgUrl;
    this.description = description;
    this.burntLvl = burntLvl;
    this.reflink = reflink;
    this.CoffeeStatus = CoffeeStatus;
  }
};

// src/infrastructure/database/repository/Coffee/CoffeeUnitOfWork.ts
var CoffeeUnitOfWork = class {
  constructor(coffeeRepository, userRepository) {
    this.coffeeRepository = coffeeRepository;
    this.userRepository = userRepository;
  }
  create({
    brand,
    name,
    type,
    imgUrl,
    description,
    burntLvl,
    reflink,
    CoffeeStatus
  }) {
    return this.coffeeRepository.createCoffee(
      new CreateCoffeeRepositoryCommand(
        brand,
        name,
        type,
        imgUrl,
        description,
        burntLvl,
        reflink,
        CoffeeStatus
      )
    );
  }
  delete({ id }) {
    return this.coffeeRepository.deleteCoffee(
      new DeleteCoffeeRepositoryCommand(id)
    );
  }
  // @Transactional({
  //   connectionName: () => process.env.ORM_CONNECTION,
  // })
  // async addCoffeeReview({
  //   userId,
  //   coffeeId,
  //   look,
  //   smell,
  //   taste,
  // }: AddReviewRepositoryCommand): Promise<Coffee> {
  //   return this.coffeeRepository.addCoffeeReview(
  //     new AddReviewRepositoryCommand(userId, coffeeId, look, smell, taste)
  //   );
  // }
};
CoffeeUnitOfWork = __decorateClass([
  (0, import_inversify22.injectable)(),
  __decorateParam(0, (0, import_inversify22.inject)(DOMAIN_REPOSITORY_IDENTIFIERS.COFFEE_REPOSITORY)),
  __decorateParam(1, (0, import_inversify22.inject)(DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY))
], CoffeeUnitOfWork);

// src/dependency/shared/Coffee/CoffeeModule.ts
var CoffeeModule = class extends BaseModule {
  constructor() {
    super((bind) => {
      this.init(bind);
    });
  }
  init(bind) {
    this.provideCoffeeService(bind);
    this.provideCoffeeRepository(bind);
    this.provideCoffeeUnitOfWork(bind);
  }
  provideCoffeeService(bind) {
    bind(
      DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.COFFEE_SERVICE
    ).to(CoffeeService);
  }
  provideCoffeeRepository(bind) {
    bind(DOMAIN_REPOSITORY_IDENTIFIERS.COFFEE_REPOSITORY).to(
      CoffeeRepository
    );
  }
  provideCoffeeUnitOfWork(bind) {
    bind(
      DOMAIN_UNIT_OF_WORK_IDENTIFIERS.COFFEE_UNIT_OF_WORK
    ).to(CoffeeUnitOfWork);
  }
};

// src/infrastructure/database/repository/Review/ReviewRepository.ts
var import_inversify23 = require("inversify");

// src/infrastructure/database/entities/Review.ts
var import_typeorm8 = require("typeorm");
var Review2 = class extends Model {
};
__decorateClass([
  (0, import_typeorm8.Column)("decimal")
], Review2.prototype, "rating", 2);
__decorateClass([
  (0, import_typeorm8.Column)("decimal")
], Review2.prototype, "look", 2);
__decorateClass([
  (0, import_typeorm8.Column)("decimal")
], Review2.prototype, "smell", 2);
__decorateClass([
  (0, import_typeorm8.Column)("decimal")
], Review2.prototype, "taste", 2);
__decorateClass([
  (0, import_typeorm8.Column)("text")
], Review2.prototype, "coffeeId", 2);
__decorateClass([
  (0, import_typeorm8.ManyToOne)("Coffee", (Coffee3) => Coffee3.reviews, {
    onDelete: "CASCADE"
  }),
  (0, import_typeorm8.JoinColumn)({ name: "coffee", referencedColumnName: "id" })
], Review2.prototype, "coffee", 2);
__decorateClass([
  (0, import_typeorm8.Column)("text", { nullable: true })
], Review2.prototype, "userId", 2);
__decorateClass([
  (0, import_typeorm8.ManyToOne)("User", (user) => user.reviews),
  (0, import_typeorm8.JoinColumn)({ name: "user", referencedColumnName: "id" })
], Review2.prototype, "user", 2);
Review2 = __decorateClass([
  (0, import_typeorm8.Entity)()
], Review2);

// src/infrastructure/database/repository/Review/ReviewRepository.ts
var ReviewRepository = class extends Repository {
  constructor(dbMapper) {
    super(Review2);
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
    const review = new Review2();
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
    const updatedReview = await this.custom().createQueryBuilder().update(Review2).set({ ...review }).where("id = :reviewId", { reviewId }).execute();
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
  __decorateParam(0, (0, import_inversify23.inject)(INFRASTRUCTURE_IDENTIFIERS.DB_MAPPER))
], ReviewRepository);

// src/core/applicationServices/Review/ReviewService.ts
var import_inversify24 = require("inversify");

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
  (0, import_inversify24.injectable)(),
  __decorateParam(0, (0, import_inversify24.inject)(DOMAIN_REPOSITORY_IDENTIFIERS.REVIEW_REPOSITORY))
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

// src/dependency/AppContainer.ts
var AppContainer = class extends BaseContainer {
  constructor() {
    super({
      defaultScope: "Singleton",
      skipBaseClassChecks: true
    });
  }
  init() {
    this.provideCommonModule();
    this.provideApplicationModule();
    this.provideInversifyExpressApplication();
    this.initializeSharedNamespace();
    this.provideUserModule();
    this.provideRoleModule();
    this.provideCoffeModule();
    this.provideReviewModule();
  }
  initializeSharedNamespace() {
    this.provideAuthenticationModule();
  }
  provideCommonModule() {
    this.load(new CommonModule());
  }
  provideApplicationModule() {
    this.load(new ApplicationModule());
  }
  provideAuthenticationModule() {
    this.load(new AuthenticationModule());
  }
  provideUserModule() {
    this.load(new UserModule());
  }
  provideReviewModule() {
    this.load(new ReviewModule());
  }
  provideCoffeModule() {
    this.load(new CoffeeModule());
  }
  provideRoleModule() {
    this.load(new RoleModule());
  }
  provideInversifyExpressApplication() {
    this.bind(
      UI_APPLICATION_IDENTIFIERS.INVERSIFY_APPLICATION
    ).toConstantValue(
      new import_inversify_express_utils4.InversifyExpressServer(
        this,
        this.get(UI_APPLICATION_IDENTIFIERS.EXPRESS_ROUTER),
        { rootPath: "/" },
        this.get(
          UI_APPLICATION_IDENTIFIERS.EXPRESS_APPLICATION
        ).getApplication(),
        ApplicationAuthProvider
      ).setErrorConfig(errorHandler)
    );
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppContainer
});
//# sourceMappingURL=AppContainer.js.map