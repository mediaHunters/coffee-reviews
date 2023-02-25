import {
  GetUsersRepositoryQuery
} from "./chunk-R3N5HVTI.mjs";
import {
  GetUserRepositoryQuery
} from "./chunk-D3FBFW6B.mjs";
import {
  DeleteUserUnitOfWorkRepositoryCommand
} from "./chunk-LWHELALN.mjs";
import {
  DOMAIN_REPOSITORY_IDENTIFIERS,
  DOMAIN_UNIT_OF_WORK_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  __decorateClass,
  __decorateParam,
  __name
} from "./chunk-C22X3M6A.mjs";

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
__name(UserService, "UserService");
UserService = __decorateClass([
  injectable(),
  __decorateParam(0, inject(DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY)),
  __decorateParam(1, inject(DOMAIN_UNIT_OF_WORK_IDENTIFIERS.USER_UNIT_OF_WORK))
], UserService);

export {
  UserService
};
//# sourceMappingURL=chunk-HVS34UTZ.mjs.map