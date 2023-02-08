import {
  isAuthenticated
} from "./chunk-JU2WBWK2.mjs";
import {
  getCurrentUser
} from "./chunk-OODWIYZF.mjs";
import {
  RemoveUserCommand
} from "./chunk-LUOTVOXW.mjs";
import {
  DOMAIN_APPLICATION_SERVICE_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  __decorateClass,
  __decorateParam
} from "./chunk-CT3ESYKG.mjs";

// src/ui/portal/User/rest/v1/UserController.ts
import { OK } from "http-status-codes";
import { inject } from "inversify";
import {
  BaseHttpController,
  controller,
  httpGet,
  httpPost,
  requestBody
} from "inversify-express-utils";
var UserController = class extends BaseHttpController {
  constructor(UserService) {
    super();
    this.UserService = UserService;
  }
  async get() {
    return this.json(OK);
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
  httpGet("/")
], UserController.prototype, "get", 1);
__decorateClass([
  httpGet("/currentUser")
], UserController.prototype, "getCurrentUser", 1);
__decorateClass([
  httpPost("/removeUser", isAuthenticated({ role: "MEMBER" /* MEMBER */ })),
  __decorateParam(0, requestBody())
], UserController.prototype, "Remove", 1);
UserController = __decorateClass([
  controller("/v1/user"),
  __decorateParam(0, inject(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.USER_SERVICE))
], UserController);

export {
  UserController
};
//# sourceMappingURL=chunk-KPPPJQLR.mjs.map