import {
  DeleteUserUnitOfWorkRepositoryCommand
} from "./chunk-LCLRCZIE.mjs";
import {
  GetUserRepositoryQuery
} from "./chunk-3KMUEB3P.mjs";
import {
  GetUsersRepositoryQuery
} from "./chunk-GVONAOQJ.mjs";
import {
  DOMAIN_REPOSITORY_IDENTIFIERS,
  DOMAIN_UNIT_OF_WORK_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  __decorateClass,
  __decorateParam
} from "./chunk-IV6S7MV4.mjs";

// src/core/applicationServices/User/UserService.ts
import { inject, injectable } from "inversify";
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
  injectable(),
  __decorateParam(0, inject(DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY)),
  __decorateParam(1, inject(DOMAIN_UNIT_OF_WORK_IDENTIFIERS.USER_UNIT_OF_WORK))
], UserService);

export {
  UserService
};
//# sourceMappingURL=chunk-MZ4Y7GGI.mjs.map