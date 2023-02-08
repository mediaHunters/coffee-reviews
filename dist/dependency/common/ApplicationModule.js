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

// src/dependency/common/ApplicationModule.ts
var ApplicationModule_exports = {};
__export(ApplicationModule_exports, {
  ApplicationModule: () => ApplicationModule
});
module.exports = __toCommonJS(ApplicationModule_exports);
var import_winston2 = require("winston");
var import_express2 = __toESM(require("express"));

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
  __decorateParam(0, (0, import_inversify3.inject)(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.COFFEE_SERVICE)),
  __decorateParam(1, (0, import_inversify3.inject)(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.REVIEW_SERVICE))
], CoffeeController);

// src/dependency/BaseModule.ts
var import_inversify4 = require("inversify");
var BaseModule = class extends import_inversify4.ContainerModule {
};

// src/ui/common/config/application/express/ExpressApplication.ts
var import_express = __toESM(require("express"));
var import_morgan = __toESM(require("morgan"));
var import_method_override = __toESM(require("method-override"));
var import_helmet = __toESM(require("helmet"));
var import_cors = __toESM(require("cors"));
var import_swagger_ui_express = __toESM(require("swagger-ui-express"));
var import_inversify5 = require("inversify");

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
  (0, import_inversify5.injectable)(),
  __decorateParam(0, (0, import_inversify5.inject)(UI_APPLICATION_IDENTIFIERS.LOGGER_WINSTON)),
  __decorateParam(1, (0, import_inversify5.inject)(UI_APPLICATION_IDENTIFIERS.EXPRESS)),
  __decorateParam(2, (0, import_inversify5.inject)(UI_APPLICATION_IDENTIFIERS.EXPRESS_ROUTER))
], ExpressApplication);

// src/ui/common/config/logger/WinstonLogger.ts
var import_winston = require("winston");
var import_winston_daily_rotate_file = __toESM(require("winston-daily-rotate-file"));
var import_inversify6 = require("inversify");

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
  (0, import_inversify6.injectable)(),
  __decorateParam(0, (0, import_inversify6.inject)(UI_APPLICATION_IDENTIFIERS.LOGGER_FORMAT)),
  __decorateParam(1, (0, import_inversify6.inject)(UI_APPLICATION_IDENTIFIERS.LOGGER))
], WinstonLogger);

// src/ui/common/config/application/express/auth/JWTAuthenticationHandler.ts
var import_inversify7 = require("inversify");
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
  (0, import_inversify7.injectable)(),
  __decorateParam(0, (0, import_inversify7.inject)(UI_APPLICATION_IDENTIFIERS.JWT_TOKEN_UTIL)),
  __decorateParam(1, (0, import_inversify7.inject)(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.AUTHENTICATION_SERVICE)),
  __decorateParam(2, (0, import_inversify7.inject)(UI_IDENTIFIERS.UI_MAPPER))
], JWTAuthenticationHandler);

// src/ui/common/config/application/common/auth/utils/JWTTokenUtil.ts
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));
var import_inversify8 = require("inversify");
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
  (0, import_inversify8.injectable)()
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ApplicationModule
});
//# sourceMappingURL=ApplicationModule.js.map