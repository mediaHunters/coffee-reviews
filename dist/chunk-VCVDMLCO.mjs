import {
  AddUserUnitOfWorkRepositoryCommand
} from "./chunk-NVHV3LZV.mjs";
import {
  FindUserByEmailRepositoryQuery
} from "./chunk-TZRMYLTD.mjs";
import {
  DOMAIN_REPOSITORY_IDENTIFIERS,
  DOMAIN_UNIT_OF_WORK_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  __decorateClass,
  __decorateParam
} from "./chunk-IV6S7MV4.mjs";

// src/core/applicationServices/Authentication/AuthenticationService.ts
import { inject, injectable } from "inversify";
import { compare } from "bcrypt";
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
    if (!user || !await compare(password, user?.password || "")) {
      return void 0;
    }
    return user;
  }
};
AuthenticationService = __decorateClass([
  injectable(),
  __decorateParam(0, inject(DOMAIN_UNIT_OF_WORK_IDENTIFIERS.USER_UNIT_OF_WORK)),
  __decorateParam(1, inject(DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY))
], AuthenticationService);

export {
  AuthenticationService
};
//# sourceMappingURL=chunk-VCVDMLCO.mjs.map