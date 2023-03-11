"use strict";
<<<<<<< HEAD
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ExpressApplication", {
    enumerable: true,
    get: ()=>ExpressApplication
});
const _express = /*#__PURE__*/ _interopRequireDefault(require("express"));
const _morgan = /*#__PURE__*/ _interopRequireDefault(require("morgan"));
const _methodOverride = /*#__PURE__*/ _interopRequireDefault(require("method-override"));
const _helmet = /*#__PURE__*/ _interopRequireDefault(require("helmet"));
const _cors = /*#__PURE__*/ _interopRequireDefault(require("cors"));
const _swaggerUiExpress = /*#__PURE__*/ _interopRequireDefault(require("swagger-ui-express"));
const _inversify = require("inversify");
const _baseApplication = require("../common/BaseApplication");
const _ilogger = require("../../logger/ILogger");
const _variables = require("../../consts/variables");
const _uimoduleSymbols = require("../../../../UIModuleSymbols");
const _swaggerJson = /*#__PURE__*/ _interopRequireDefault(require("../../swagger.json"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
let ExpressApplication = class ExpressApplication extends _baseApplication.BaseApplication {
    constructor(logger, app, router){
        super(app);
        this.logger = logger;
        this.router = router;
    }
    initialize() {
        this.initializeSecurity();
        this.initializeBodyParsers();
        if (process.env.NODE_ENV !== 'test') {
            this.initializeLogging();
        }
        this.initializeHandlers();
        this.initializePlugins();
        this.initializeExtensions();
    }
    initializeSecurity() {
        this.app.use(_express.default.urlencoded({
            extended: false
        }));
    }
    initializeBodyParsers() {
        this.app.use(_express.default.json());
    }
    initializeLogging() {
        this.logger.initialize();
        _morgan.default.token('body', // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (req)=>`\nREQUEST BODY: ${JSON.stringify(req.body)}`);
        /**
     * @description you may consider what you want to log on production
     * keep in mind to obfuscate sensitive data if you want to log request or response bodies
     * format can be moved to some other place for easier configuration
     */ this.app.use((0, _morgan.default)(':method :url HTTP/:http-version :status :response-time ms :referrer :user-agent - :body', {
            stream: this.logger
        }));
    }
    initializeHandlers() {
        Error('NOT IMPLEMENTED');
    }
    initializePlugins() {
        this.app.use((0, _methodOverride.default)());
        this.app.use((0, _helmet.default)());
        this.app.use((0, _cors.default)());
    }
    initializeExtensions() {
        if (_variables.SWAGGER_HOST) {
            _swaggerJson.default.host = _variables.SWAGGER_HOST;
            this.app.use(_variables.SWAGGER_BASE_PATH, _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_swaggerJson.default));
        }
    }
};
ExpressApplication = __decorate([
    (0, _inversify.injectable)(),
    __param(0, (0, _inversify.inject)(_uimoduleSymbols.UI_APPLICATION_IDENTIFIERS.LOGGER_WINSTON)),
    __param(1, (0, _inversify.inject)(_uimoduleSymbols.UI_APPLICATION_IDENTIFIERS.EXPRESS)),
    __param(2, (0, _inversify.inject)(_uimoduleSymbols.UI_APPLICATION_IDENTIFIERS.EXPRESS_ROUTER)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _ilogger.ILogger === "undefined" ? Object : _ilogger.ILogger,
        typeof _express.default === "undefined" || typeof _express.default.Application === "undefined" ? Object : _express.default.Application,
        typeof _express.default === "undefined" || typeof _express.default.Router === "undefined" ? Object : _express.default.Router
    ])
], ExpressApplication);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy91aS9jb21tb24vY29uZmlnL2FwcGxpY2F0aW9uL2V4cHJlc3MvRXhwcmVzc0FwcGxpY2F0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IG1vcmdhbiBmcm9tICdtb3JnYW4nO1xuaW1wb3J0IG1ldGhvZE92ZXJyaWRlIGZyb20gJ21ldGhvZC1vdmVycmlkZSc7XG5pbXBvcnQgaGVsbWV0IGZyb20gJ2hlbG1ldCc7XG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcbmltcG9ydCBzd2FnZ2VyVWkgZnJvbSAnc3dhZ2dlci11aS1leHByZXNzJztcbmltcG9ydCB7IGluamVjdCwgaW5qZWN0YWJsZSB9IGZyb20gJ2ludmVyc2lmeSc7XG5cbmltcG9ydCB7IElBcHBsaWNhdGlvbiB9IGZyb20gJ3VpL2NvbW1vbi9jb25maWcvYXBwbGljYXRpb24vY29tbW9uL0lBcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBCYXNlQXBwbGljYXRpb24gfSBmcm9tICd1aS9jb21tb24vY29uZmlnL2FwcGxpY2F0aW9uL2NvbW1vbi9CYXNlQXBwbGljYXRpb24nO1xuaW1wb3J0IHsgSUxvZ2dlciB9IGZyb20gJ3VpL2NvbW1vbi9jb25maWcvbG9nZ2VyL0lMb2dnZXInO1xuaW1wb3J0IHtcbiAgU1dBR0dFUl9CQVNFX1BBVEgsXG4gIFNXQUdHRVJfSE9TVCxcbn0gZnJvbSAndWkvY29tbW9uL2NvbmZpZy9jb25zdHMvdmFyaWFibGVzJztcbmltcG9ydCB7IFVJX0FQUExJQ0FUSU9OX0lERU5USUZJRVJTIH0gZnJvbSAndWkvVUlNb2R1bGVTeW1ib2xzJztcblxuaW1wb3J0IHN3YWdnZXJEb2N1bWVudCBmcm9tICd1aS9jb21tb24vY29uZmlnL3N3YWdnZXIuanNvbic7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFeHByZXNzQXBwbGljYXRpb25cbiAgZXh0ZW5kcyBCYXNlQXBwbGljYXRpb248ZXhwcmVzcy5BcHBsaWNhdGlvbj5cbiAgaW1wbGVtZW50cyBJQXBwbGljYXRpb25cbntcbiAgcHJpdmF0ZSByZWFkb25seSBsb2dnZXI6IElMb2dnZXI7XG5cbiAgcHJpdmF0ZSByZWFkb25seSByb3V0ZXI6IGV4cHJlc3MuUm91dGVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoVUlfQVBQTElDQVRJT05fSURFTlRJRklFUlMuTE9HR0VSX1dJTlNUT04pIGxvZ2dlcjogSUxvZ2dlcixcbiAgICBAaW5qZWN0KFVJX0FQUExJQ0FUSU9OX0lERU5USUZJRVJTLkVYUFJFU1MpIGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbixcbiAgICBAaW5qZWN0KFVJX0FQUExJQ0FUSU9OX0lERU5USUZJRVJTLkVYUFJFU1NfUk9VVEVSKSByb3V0ZXI6IGV4cHJlc3MuUm91dGVyXG4gICkge1xuICAgIHN1cGVyKGFwcCk7XG4gICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRpYWxpemVTZWN1cml0eSgpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUJvZHlQYXJzZXJzKCk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcpIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZUxvZ2dpbmcoKTtcbiAgICB9XG4gICAgdGhpcy5pbml0aWFsaXplSGFuZGxlcnMoKTtcbiAgICB0aGlzLmluaXRpYWxpemVQbHVnaW5zKCk7XG4gICAgdGhpcy5pbml0aWFsaXplRXh0ZW5zaW9ucygpO1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpemVTZWN1cml0eSgpOiB2b2lkIHtcbiAgICB0aGlzLmFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0aWFsaXplQm9keVBhcnNlcnMoKTogdm9pZCB7XG4gICAgdGhpcy5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0aWFsaXplTG9nZ2luZygpOiB2b2lkIHtcbiAgICB0aGlzLmxvZ2dlci5pbml0aWFsaXplKCk7XG4gICAgbW9yZ2FuLnRva2VuKFxuICAgICAgJ2JvZHknLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgIChyZXEpOiBzdHJpbmcgPT4gYFxcblJFUVVFU1QgQk9EWTogJHtKU09OLnN0cmluZ2lmeSgocmVxIGFzIGFueSkuYm9keSl9YFxuICAgICk7XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIHlvdSBtYXkgY29uc2lkZXIgd2hhdCB5b3Ugd2FudCB0byBsb2cgb24gcHJvZHVjdGlvblxuICAgICAqIGtlZXAgaW4gbWluZCB0byBvYmZ1c2NhdGUgc2Vuc2l0aXZlIGRhdGEgaWYgeW91IHdhbnQgdG8gbG9nIHJlcXVlc3Qgb3IgcmVzcG9uc2UgYm9kaWVzXG4gICAgICogZm9ybWF0IGNhbiBiZSBtb3ZlZCB0byBzb21lIG90aGVyIHBsYWNlIGZvciBlYXNpZXIgY29uZmlndXJhdGlvblxuICAgICAqL1xuICAgIHRoaXMuYXBwLnVzZShcbiAgICAgIG1vcmdhbihcbiAgICAgICAgJzptZXRob2QgOnVybCBIVFRQLzpodHRwLXZlcnNpb24gOnN0YXR1cyA6cmVzcG9uc2UtdGltZSBtcyA6cmVmZXJyZXIgOnVzZXItYWdlbnQgLSA6Ym9keScsXG4gICAgICAgIHsgc3RyZWFtOiB0aGlzLmxvZ2dlciB9XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0aWFsaXplSGFuZGxlcnMoKTogdm9pZCB7XG4gICAgRXJyb3IoJ05PVCBJTVBMRU1FTlRFRCcpO1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpemVQbHVnaW5zKCk6IHZvaWQge1xuICAgIHRoaXMuYXBwLnVzZShtZXRob2RPdmVycmlkZSgpKTtcbiAgICB0aGlzLmFwcC51c2UoaGVsbWV0KCkpO1xuICAgIHRoaXMuYXBwLnVzZShjb3JzKCkpO1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpemVFeHRlbnNpb25zKCk6IHZvaWQge1xuICAgIGlmIChTV0FHR0VSX0hPU1QpIHtcbiAgICAgIHN3YWdnZXJEb2N1bWVudC5ob3N0ID0gU1dBR0dFUl9IT1NUO1xuICAgICAgdGhpcy5hcHAudXNlKFxuICAgICAgICBTV0FHR0VSX0JBU0VfUEFUSCxcbiAgICAgICAgc3dhZ2dlclVpLnNlcnZlLFxuICAgICAgICBzd2FnZ2VyVWkuc2V0dXAoc3dhZ2dlckRvY3VtZW50KVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFeHByZXNzQXBwbGljYXRpb24iLCJCYXNlQXBwbGljYXRpb24iLCJjb25zdHJ1Y3RvciIsImxvZ2dlciIsImFwcCIsInJvdXRlciIsImluaXRpYWxpemUiLCJpbml0aWFsaXplU2VjdXJpdHkiLCJpbml0aWFsaXplQm9keVBhcnNlcnMiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJpbml0aWFsaXplTG9nZ2luZyIsImluaXRpYWxpemVIYW5kbGVycyIsImluaXRpYWxpemVQbHVnaW5zIiwiaW5pdGlhbGl6ZUV4dGVuc2lvbnMiLCJ1c2UiLCJleHByZXNzIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwianNvbiIsIm1vcmdhbiIsInRva2VuIiwicmVxIiwiSlNPTiIsInN0cmluZ2lmeSIsImJvZHkiLCJzdHJlYW0iLCJFcnJvciIsIm1ldGhvZE92ZXJyaWRlIiwiaGVsbWV0IiwiY29ycyIsIlNXQUdHRVJfSE9TVCIsInN3YWdnZXJEb2N1bWVudCIsImhvc3QiLCJTV0FHR0VSX0JBU0VfUEFUSCIsInN3YWdnZXJVaSIsInNlcnZlIiwic2V0dXAiLCJpbmplY3RhYmxlIiwiaW5qZWN0IiwiVUlfQVBQTElDQVRJT05fSURFTlRJRklFUlMiLCJMT0dHRVJfV0lOU1RPTiIsIkVY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
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6
