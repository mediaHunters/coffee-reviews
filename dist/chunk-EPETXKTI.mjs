import {
  AuthenticationQuery
} from "./chunk-KPA6WMZR.mjs";
import {
  SignUpCommand
} from "./chunk-7YSGPZ7X.mjs";
import {
  DOMAIN_APPLICATION_SERVICE_IDENTIFIERS,
  DOMAIN_MAPPING_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  UI_APPLICATION_IDENTIFIERS,
  UI_IDENTIFIERS,
  UI_MAPPINGS_IDENTIFIERS
} from "./chunk-OHNY4ITV.mjs";
import {
  __decorateClass,
  __decorateParam
} from "./chunk-IV6S7MV4.mjs";

// src/ui/portal/Authentication/rest/v1/AuthenticationController.ts
import {
  BaseHttpController,
  controller,
  httpPost,
  requestBody
} from "inversify-express-utils";
import { OK } from "http-status-codes";
import { inject } from "inversify";
var AuthenticationController = class extends BaseHttpController {
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
    return this.json(createdUser, OK);
  }
  async index({ email, password }) {
    const authentication = await this.authenticationHandler.authenticate(
      new AuthenticationQuery(email, password)
    );
    return this.json(authentication, OK);
  }
};
__decorateClass([
  httpPost("/signup"),
  __decorateParam(0, requestBody())
], AuthenticationController.prototype, "create", 1);
__decorateClass([
  httpPost("/"),
  __decorateParam(0, requestBody())
], AuthenticationController.prototype, "index", 1);
AuthenticationController = __decorateClass([
  controller("/v1/auth"),
  __decorateParam(0, inject(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.AUTHENTICATION_SERVICE)),
  __decorateParam(1, inject(UI_APPLICATION_IDENTIFIERS.JWT_AUTHENTICATION_HANDLER)),
  __decorateParam(2, inject(UI_IDENTIFIERS.UI_MAPPER))
], AuthenticationController);

export {
  AuthenticationController
};
//# sourceMappingURL=chunk-EPETXKTI.mjs.map