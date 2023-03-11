import {
  Authentication
} from "./chunk-TOQOQODP.mjs";
import {
  APP_TOKEN_LIFE,
  APP_TOKEN_SECRET
} from "./chunk-LQ4FDPEO.mjs";
import {
  UserInterfaceError
} from "./chunk-XRVKF5DQ.mjs";
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

// src/ui/common/config/application/express/auth/JWTAuthenticationHandler.ts
import { inject, injectable } from "inversify";
import { NOT_FOUND } from "http-status-codes";
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
      throw new UserInterfaceError(NOT_FOUND, "USER_NOT_FOUND");
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
  injectable(),
  __decorateParam(0, inject(UI_APPLICATION_IDENTIFIERS.JWT_TOKEN_UTIL)),
  __decorateParam(1, inject(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.AUTHENTICATION_SERVICE)),
  __decorateParam(2, inject(UI_IDENTIFIERS.UI_MAPPER))
], JWTAuthenticationHandler);

export {
  JWTAuthenticationHandler
};
//# sourceMappingURL=chunk-PAHVYZ3D.mjs.map