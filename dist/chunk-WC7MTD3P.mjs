import {
  AddUserRepositoryCommand
} from "./chunk-PBL77IDG.mjs";
import {
  CheckIfUserAlreadyExistsRepositoryQuery
} from "./chunk-L4YTJVYZ.mjs";
import {
  FindRoleByNameRepositoryQuery
} from "./chunk-MS6C3LD6.mjs";
import {
  InfrastructureErrors
} from "./chunk-ENM6OMP3.mjs";
import {
  BaseError
} from "./chunk-6TCJVVRE.mjs";
import {
  DOMAIN_REPOSITORY_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  __decorateClass,
  __decorateParam
} from "./chunk-IV6S7MV4.mjs";

// src/infrastructure/database/repository/User/UserUnitOfWork.ts
import { inject, injectable } from "inversify";
var UserUnitOfWork = class {
  constructor(userRepository, roleRepository) {
    this.userRepository = userRepository;
    this.roleRepository = roleRepository;
  }
  async addUser({
    email,
    password,
    nickname
  }) {
    const checkIfUserExist = await this.userRepository.checkIfUserAlreadyExists(
      new CheckIfUserAlreadyExistsRepositoryQuery(nickname, email)
    );
    if (checkIfUserExist.length > 0) {
      throw new BaseError(
        InfrastructureErrors[1 /* USER_ALREADY_EXIST */]
      );
    }
    const { id } = await this.roleRepository.findRoleByName(
      new FindRoleByNameRepositoryQuery("ADMIN" /* ADMIN */)
    );
    return this.userRepository.addUser(
      new AddUserRepositoryCommand(nickname, email, password, id)
    );
  }
  deleteUser(command) {
    return this.userRepository.removeUser(command);
  }
};
UserUnitOfWork = __decorateClass([
  injectable(),
  __decorateParam(0, inject(DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY)),
  __decorateParam(1, inject(DOMAIN_REPOSITORY_IDENTIFIERS.ROLE_REPOSITORY))
], UserUnitOfWork);

export {
  UserUnitOfWork
};
//# sourceMappingURL=chunk-WC7MTD3P.mjs.map