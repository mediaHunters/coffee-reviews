import {
  FindUserByEmailRepositoryQuery
} from "./chunk-XM2A6W4W.mjs";
import {
  AddUserUnitOfWorkRepositoryCommand
} from "./chunk-S3FGAREY.mjs";
import {
  DOMAIN_REPOSITORY_IDENTIFIERS,
  DOMAIN_UNIT_OF_WORK_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  __decorateClass,
  __decorateParam,
  __name
} from "./chunk-C22X3M6A.mjs";

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
__name(AuthenticationService, "AuthenticationService");
AuthenticationService = __decorateClass([
  injectable(),
  __decorateParam(0, inject(DOMAIN_UNIT_OF_WORK_IDENTIFIERS.USER_UNIT_OF_WORK)),
  __decorateParam(1, inject(DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY))
], AuthenticationService);

export {
  AuthenticationService
};
//# sourceMappingURL=chunk-Y4T7IYIU.mjs.map