"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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

// src/ui/common/config/application/express/ExpressApplication.ts
var ExpressApplication_exports = {};
__export(ExpressApplication_exports, {
  ExpressApplication: () => ExpressApplication
});
module.exports = __toCommonJS(ExpressApplication_exports);
var import_express = __toESM(require("express"));
var import_morgan = __toESM(require("morgan"));
var import_method_override = __toESM(require("method-override"));
var import_helmet = __toESM(require("helmet"));
var import_cors = __toESM(require("cors"));
var import_swagger_ui_express = __toESM(require("swagger-ui-express"));
var import_inversify = require("inversify");

// src/ui/common/config/application/common/BaseApplication.ts
var BaseApplication = class {
  constructor(app) {
    this.app = app;
  }
  getApplication() {
    return this.app;
  }
};
__name(BaseApplication, "BaseApplication");

// src/ui/common/config/consts/variables.ts
var import_dotenv = __toESM(require("dotenv"));
import_dotenv.default.config();
var APP_TOKEN_SECRET = process.env.APP_TOKEN_SECRET || "";
var APP_TOKEN_LIFE = process.env.APP_TOKEN_LIFE || "24h";
var PORT = process.env.PORT || "3000";
var LOG_LEVEL = process.env.LOG_LEVEL || "debug";
var SWAGGER_BASE_PATH = process.env.SWAGGER_BASE_PATH || "";
var { SWAGGER_HOST } = process.env;
var IS_DEVELOPMENT = process.env.NODE_ENV === "development";

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
__name(ExpressApplication, "ExpressApplication");
ExpressApplication = __decorateClass([
  (0, import_inversify.injectable)(),
  __decorateParam(0, (0, import_inversify.inject)(UI_APPLICATION_IDENTIFIERS.LOGGER_WINSTON)),
  __decorateParam(1, (0, import_inversify.inject)(UI_APPLICATION_IDENTIFIERS.EXPRESS)),
  __decorateParam(2, (0, import_inversify.inject)(UI_APPLICATION_IDENTIFIERS.EXPRESS_ROUTER))
], ExpressApplication);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ExpressApplication
});
//# sourceMappingURL=ExpressApplication.js.map