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

// src/ui/portal/Authentication/rest/v1/AuthenticationController.ts
var AuthenticationController_exports = {};
__export(AuthenticationController_exports, {
  AuthenticationController: () => AuthenticationController
});
module.exports = __toCommonJS(AuthenticationController_exports);
var import_inversify_express_utils = require("inversify-express-utils");
var import_http_status_codes = require("http-status-codes");
var import_inversify = require("inversify");

// src/core/applicationServices/Authentication/requests/repository/command/SignUpCommand.ts
var SignUpCommand = class {
  constructor(nickname, email, password) {
    this.nickname = nickname;
    this.email = email;
    this.password = password;
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
var AuthenticationController = class extends import_inversify_express_utils.BaseHttpController {
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
    return this.json(createdUser, import_http_status_codes.OK);
  }
  async index({ email, password }) {
    const authentication = await this.authenticationHandler.authenticate(
      new AuthenticationQuery(email, password)
    );
    return this.json(authentication, import_http_status_codes.OK);
  }
};
__decorateClass([
  (0, import_inversify_express_utils.httpPost)("/signup"),
  __decorateParam(0, (0, import_inversify_express_utils.requestBody)())
], AuthenticationController.prototype, "create", 1);
__decorateClass([
  (0, import_inversify_express_utils.httpPost)("/"),
  __decorateParam(0, (0, import_inversify_express_utils.requestBody)())
], AuthenticationController.prototype, "index", 1);
AuthenticationController = __decorateClass([
  (0, import_inversify_express_utils.controller)("/v1/auth"),
  __decorateParam(0, (0, import_inversify.inject)(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.AUTHENTICATION_SERVICE)),
  __decorateParam(1, (0, import_inversify.inject)(UI_APPLICATION_IDENTIFIERS.JWT_AUTHENTICATION_HANDLER)),
  __decorateParam(2, (0, import_inversify.inject)(UI_IDENTIFIERS.UI_MAPPER))
], AuthenticationController);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthenticationController
});
//# sourceMappingURL=AuthenticationController.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthenticationController", {
    enumerable: true,
    get: ()=>AuthenticationController
});
const _inversifyExpressUtils = require("inversify-express-utils");
const _httpStatusCodes = require("http-status-codes");
const _inversify = require("inversify");
const _signUpCommand = require("../../../../../core/applicationServices/Authentication/requests/repository/command/SignUpCommand");
const _coreModuleSymbols = require("../../../../../core/CoreModuleSymbols");
const _iauthenticationService = require("../../../../../core/applicationServices/Authentication/IAuthenticationService");
const _uimapper = require("../../../../common/mappings/UIMapper");
const _uimoduleSymbols = require("../../../../UIModuleSymbols");
const _signUpCommandBody = require("./requests/command/SignUpCommandBody");
const _authenticationQueryBody = require("./requests/query/AuthenticationQueryBody");
const _iauthenticationHandler = require("../../../../common/config/application/common/auth/IAuthenticationHandler");
const _authenticationQuery = require("../../../../../core/applicationServices/Authentication/requests/handler/query/AuthenticationQuery");
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
let AuthenticationController = class AuthenticationController extends _inversifyExpressUtils.BaseHttpController {
    constructor(authenticationService, authenticationHandler, uiMapper){
        super();
        this.authenticationService = authenticationService;
        this.authenticationHandler = authenticationHandler;
        this.uiMapper = uiMapper;
    }
    async create({ nickname , email , password  }) {
        const user = await this.authenticationService.signUp(new _signUpCommand.SignUpCommand(nickname, email, password));
        const createdUser = this.uiMapper.mapper.map({
            destination: _uimoduleSymbols.UI_MAPPINGS_IDENTIFIERS.USER_UI,
            source: _coreModuleSymbols.DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN
        }, user);
        return this.json(createdUser, _httpStatusCodes.OK);
    }
    async index({ email , password  }) {
        const authentication = await this.authenticationHandler.authenticate(new _authenticationQuery.AuthenticationQuery(email, password));
        return this.json(authentication, _httpStatusCodes.OK);
    }
};
__decorate([
    (0, _inversifyExpressUtils.httpPost)('/signup'),
    __param(0, (0, _inversifyExpressUtils.requestBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _signUpCommandBody.SignUpCommandBody === "undefined" ? Object : _signUpCommandBody.SignUpCommandBody
    ])
], AuthenticationController.prototype, "create", null);
__decorate([
    (0, _inversifyExpressUtils.httpPost)('/'),
    __param(0, (0, _inversifyExpressUtils.requestBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _authenticationQueryBody.AuthenticationQueryBody === "undefined" ? Object : _authenticationQueryBody.AuthenticationQueryBody
    ])
], AuthenticationController.prototype, "index", null);
AuthenticationController = __decorate([
    (0, _inversifyExpressUtils.controller)('/v1/auth'),
    __param(0, (0, _inversify.inject)(_coreModuleSymbols.DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.AUTHENTICATION_SERVICE)),
    __param(1, (0, _inversify.inject)(_uimoduleSymbols.UI_APPLICATION_IDENTIFIERS.JWT_AUTHENTICATION_HANDLER)),
    __param(2, (0, _inversify.inject)(_uimoduleSymbols.UI_IDENTIFIERS.UI_MAPPER)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _iauthenticationService.IAuthenticationService === "undefined" ? Object : _iauthenticationService.IAuthenticationService,
        typeof _iauthenticationHandler.IAuthenticationHandler === "undefined" ? Object : _iauthenticationHandler.IAuthenticationHandler,
        typeof _uimapper.UIMapper === "undefined" ? Object : _uimapper.UIMapper
    ])
], AuthenticationController);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy91aS9wb3J0YWwvQXV0aGVudGljYXRpb24vcmVzdC92MS9BdXRoZW50aWNhdGlvbkNvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQmFzZUh0dHBDb250cm9sbGVyLFxuICBjb250cm9sbGVyLFxuICBodHRwUG9zdCxcbiAgcmVxdWVzdEJvZHksXG4gIHJlc3VsdHMsXG59IGZyb20gJ2ludmVyc2lmeS1leHByZXNzLXV0aWxzJztcblxuaW1wb3J0IHsgT0sgfSBmcm9tICdodHRwLXN0YXR1cy1jb2Rlcyc7XG5cbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ2ludmVyc2lmeSc7XG5cbmltcG9ydCB7IFNpZ25VcENvbW1hbmQgfSBmcm9tICdjb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvQXV0aGVudGljYXRpb24vcmVxdWVzdHMvcmVwb3NpdG9yeS9jb21tYW5kL1NpZ25VcENvbW1hbmQnO1xuaW1wb3J0IHtcbiAgRE9NQUlOX0FQUExJQ0FUSU9OX1NFUlZJQ0VfSURFTlRJRklFUlMsXG4gIERPTUFJTl9NQVBQSU5HX0lERU5USUZJRVJTLFxufSBmcm9tICdjb3JlL0NvcmVNb2R1bGVTeW1ib2xzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdjb3JlL2RvbWFpbi9Vc2VyL1VzZXInO1xuaW1wb3J0IHsgSUF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJ2NvcmUvYXBwbGljYXRpb25TZXJ2aWNlcy9BdXRoZW50aWNhdGlvbi9JQXV0aGVudGljYXRpb25TZXJ2aWNlJztcblxuaW1wb3J0IHsgVUlNYXBwZXIgfSBmcm9tICd1aS9jb21tb24vbWFwcGluZ3MvVUlNYXBwZXInO1xuaW1wb3J0IHtcbiAgVUlfQVBQTElDQVRJT05fSURFTlRJRklFUlMsXG4gIFVJX0lERU5USUZJRVJTLFxuICBVSV9NQVBQSU5HU19JREVOVElGSUVSUyxcbn0gZnJvbSAndWkvVUlNb2R1bGVTeW1ib2xzJztcbmltcG9ydCB7IFVzZXIgYXMgVXNlclVJIH0gZnJvbSAndWkvY29tbW9uL21vZGVscy9Vc2VyJztcbmltcG9ydCB7IFNpZ25VcENvbW1hbmRCb2R5IH0gZnJvbSAndWkvcG9ydGFsL0F1dGhlbnRpY2F0aW9uL3Jlc3QvdjEvcmVxdWVzdHMvY29tbWFuZC9TaWduVXBDb21tYW5kQm9keSc7XG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUXVlcnlCb2R5IH0gZnJvbSAndWkvcG9ydGFsL0F1dGhlbnRpY2F0aW9uL3Jlc3QvdjEvcmVxdWVzdHMvcXVlcnkvQXV0aGVudGljYXRpb25RdWVyeUJvZHknO1xuaW1wb3J0IHsgSUF1dGhlbnRpY2F0aW9uSGFuZGxlciB9IGZyb20gJ3VpL2NvbW1vbi9jb25maWcvYXBwbGljYXRpb24vY29tbW9uL2F1dGgvSUF1dGhlbnRpY2F0aW9uSGFuZGxlcic7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblF1ZXJ5IH0gZnJvbSAnY29yZS9hcHBsaWNhdGlvblNlcnZpY2VzL0F1dGhlbnRpY2F0aW9uL3JlcXVlc3RzL2hhbmRsZXIvcXVlcnkvQXV0aGVudGljYXRpb25RdWVyeSc7XG5cbkBjb250cm9sbGVyKCcvdjEvYXV0aCcpXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25Db250cm9sbGVyIGV4dGVuZHMgQmFzZUh0dHBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQGluamVjdChET01BSU5fQVBQTElDQVRJT05fU0VSVklDRV9JREVOVElGSUVSUy5BVVRIRU5USUNBVElPTl9TRVJWSUNFKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBJQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIEBpbmplY3QoVUlfQVBQTElDQVRJT05fSURFTlRJRklFUlMuSldUX0FVVEhFTlRJQ0FUSU9OX0hBTkRMRVIpXG4gICAgcHJpdmF0ZSByZWFkb25seSBhdXRoZW50aWNhdGlvbkhhbmRsZXI6IElBdXRoZW50aWNhdGlvbkhhbmRsZXIsXG4gICAgQGluamVjdChVSV9JREVOVElGSUVSUy5VSV9NQVBQRVIpXG4gICAgcHJpdmF0ZSByZWFkb25seSB1aU1hcHBlcjogVUlNYXBwZXJcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIEBodHRwUG9zdCgnL3NpZ251cCcpXG4gIHB1YmxpYyBhc3luYyBjcmVhdGUoXG4gICAgQHJlcXVlc3RCb2R5KClcbiAgICB7IG5pY2tuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfTogU2lnblVwQ29tbWFuZEJvZHlcbiAgKTogUHJvbWlzZTxyZXN1bHRzLkpzb25SZXN1bHQ+IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2Uuc2lnblVwKFxuICAgICAgbmV3IFNpZ25VcENvbW1hbmQobmlja25hbWUsIGVtYWlsLCBwYXNzd29yZClcbiAgICApO1xuXG4gICAgY29uc3QgY3JlYXRlZFVzZXIgPSB0aGlzLnVpTWFwcGVyLm1hcHBlci5tYXA8VXNlciwgVXNlclVJPihcbiAgICAgIHtcbiAgICAgICAgZGVzdGluYXRpb246IFVJX01BUFBJTkdTX0lERU5USUZJRVJTLlVTRVJfVUksXG4gICAgICAgIHNvdXJjZTogRE9NQUlOX01BUFBJTkdfSURFTlRJRklFUlMuVVNFUl9ET01BSU4sXG4gICAgICB9LFxuICAgICAgdXNlclxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMuanNvbihjcmVhdGVkVXNlciwgT0spO1xuICB9XG5cbiAgQGh0dHBQb3N0KCcvJylcbiAgcHVibGljIGFzeW5jIGluZGV4KFxuICAgIEByZXF1ZXN0Qm9keSgpIHsgZW1haWwsIHBhc3N3b3JkIH06IEF1dGhlbnRpY2F0aW9uUXVlcnlCb2R5XG4gICk6IFByb21pc2U8cmVzdWx0cy5Kc29uUmVzdWx0PiB7XG4gICAgY29uc3QgYXV0aGVudGljYXRpb24gPSBhd2FpdCB0aGlzLmF1dGhlbnRpY2F0aW9uSGFuZGxlci5hdXRoZW50aWNhdGUoXG4gICAgICBuZXcgQXV0aGVudGljYXRpb25RdWVyeShlbWFpbCwgcGFzc3dvcmQpXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLmpzb24oYXV0aGVudGljYXRpb24sIE9LKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkF1dGhlbnRpY2F0aW9uQ29udHJvbGxlciIsIkJhc2VIdHRwQ29udHJvbGxlciIsImNvbnN0cnVjdG9yIiwiYXV0aGVudGljYXRpb25TZXJ2aWNlIiwiYXV0aGVudGljYXRpb25IYW5kbGVyIiwidWlNYXBwZXIiLCJjcmVhdGUiLCJuaWNrbmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VyIiwic2lnblVwIiwiU2lnblVwQ29tbWFuZCIsImNyZWF0ZWRVc2VyIiwibWFwcGVyIiwibWFwIiwiZGVzdGluYXRpb24iLCJVSV9NQVBQSU5HU19JREVOVElGSUVSUyIsIlVTRVJfVUkiLCJzb3VyY2UiLCJET01BSU5fTUFQUElOR19JREVOVElGSUVSUyIsIlVTRVJfRE9NQUlOIiwianNvbiIsIk9LIiwiaW5kZXgiLCJhdXRoZW50aWNhdGlvbiIsImF1dGhlbnRpY2F0ZSIsIkF1dGhlbnRpY2F0aW9uUXVlcnkiLCJodHRwUG9zdCIsInJlcXVlc3RCb2R5IiwiY29udHJvbGxlciIsImluamVjdCIsIkRPTUFJTl9BUFBMSUNBVElPTl9TRVJWSUNFX0lERU5USUZJRVJTIiwiQVVUSEVOVElDQVRJT05fU0VSVklDRSIsIlVJX0FQUExJQ0FUSU9OX0lERU5USUZJRVJTIiwiSldUX0FVVEhFTlRJQ0FUSU9OX0hBTkRMRVIiLCJVSV9JREVOVElGSUVSUyIsIlVJX01BUFBFUiJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFrQ2FBOzthQUFBQTs7dUNBNUJOO2lDQUVZOzJCQUVJOytCQUVPO21DQUl2Qjt3Q0FFZ0M7MEJBRWQ7aUNBS2xCO21DQUUyQjt5Q0FFTTt3Q0FDRDtxQ0FDSDs7Ozs7Ozs7Ozs7Ozs7O0lBR3ZCQSwyQkFBTix1Q0FBdUNDLHlDQUFrQjtJQUM5REMsWUFFbUJDLHVCQUVBQyx1QkFFQUMsU0FDakI7UUFDQSxLQUFLO3FDQU5ZRjtxQ0FFQUM7d0JBRUFDO0lBR25CO0lBRUEsTUFDYUMsT0FDWCxBQUNBLEVBQUVDLFNBQVEsRUFBRUMsTUFBSyxFQUFFQyxTQUFRLEVBQXFCLEVBQ25CO1FBQzdCLE1BQU1DLE9BQU8sTUFBTSxJQUFJLENBQUNQLHFCQUFxQixDQUFDUSxNQUFNLENBQ2xELElBQUlDLDRCQUFhLENBQUNMLFVBQVVDLE9BQU9DO1FBR3JDLE1BQU1JLGNBQWMsSUFBSSxDQUFDUixRQUFRLENBQUNTLE1BQU0sQ0FBQ0MsR0FBRyxDQUMxQztZQUNFQyxhQUFhQyx3Q0FBdUIsQ0FBQ0MsT0FBTztZQUM1Q0MsUUFBUUMsNkNBQTBCLENBQUNDLFdBQVc7UUFDaEQsR0FDQVg7UUFFRixPQUFPLElBQUksQ0FBQ1ksSUFBSSxDQUFDVCxhQUFhVSxtQkFBRTtJQUNsQztJQUVBLE1BQ2FDLE1BQ1gsQUFBZSxFQUFFaEIsTUFBSyxFQUFFQyxTQUFRLEVBQTJCLEVBQzlCO1FBQzdCLE1BQU1nQixpQkFBaUIsTUFBTSxJQUFJLENBQUNyQixxQkFBcUIsQ0FBQ3NCLFlBQVksQ0FDbEUsSUFBSUMsd0NBQW1CLENBQUNuQixPQUFPQztRQUdqQyxPQUFPLElBQUksQ0FBQ2EsSUFBSSxDQUFDRyxnQkFBZ0JGLG1CQUFFO0lBQ3JDO0FBQ0Y7O0lBN0JHSyxJQUFBQSwrQkFBUSxFQUFDO0lBRVBDLFdBQUFBLElBQUFBLGtDQUFXOzs7ZUFDbUIsb0NBQWlCLDRCQUFqQixvQ0FBaUI7O0dBZnZDN0I7O0lBK0JWNEIsSUFBQUEsK0JBQVEsRUFBQztJQUVQQyxXQUFBQSxJQUFBQSxrQ0FBVzs7O2VBQXdCLGdEQUF1Qiw0QkFBdkIsZ0RBQXVCOztHQWpDbEQ3QjtBQUFBQTtJQURaOEIsSUFBQUEsaUNBQVUsRUFBQztJQUdQQyxXQUFBQSxJQUFBQSxpQkFBTSxFQUFDQyx5REFBc0MsQ0FBQ0Msc0JBQXNCO0lBRXBFRixXQUFBQSxJQUFBQSxpQkFBTSxFQUFDRywyQ0FBMEIsQ0FBQ0MsMEJBQTBCO0lBRTVESixXQUFBQSxJQUFBQSxpQkFBTSxFQUFDSywrQkFBYyxDQUFDQyxTQUFTOzs7ZUFIUSw4Q0FBc0IsNEJBQXRCLDhDQUFzQjtlQUV0Qiw4Q0FBc0IsNEJBQXRCLDhDQUFzQjtlQUVuQyxrQkFBUSw0QkFBUixrQkFBUTs7R0FQMUJyQyJ9
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6
