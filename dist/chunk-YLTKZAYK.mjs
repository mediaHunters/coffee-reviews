import {
  CheckIfUserAlreadyExistsRepositoryQuery
} from "./chunk-EE4RWO7D.mjs";
import {
  FindRoleByNameRepositoryQuery
} from "./chunk-2NUDN65D.mjs";
import {
  AddUserRepositoryCommand
} from "./chunk-B3EAGH3A.mjs";
import {
  InfrastructureErrors
} from "./chunk-ENM6OMP3.mjs";
import {
  BaseError
} from "./chunk-2CGUJ2VR.mjs";
import {
  DOMAIN_REPOSITORY_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  __decorateClass,
  __decorateParam,
  __name
} from "./chunk-C22X3M6A.mjs";

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
__name(UserUnitOfWork, "UserUnitOfWork");
UserUnitOfWork = __decorateClass([
  injectable(),
  __decorateParam(0, inject(DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY)),
  __decorateParam(1, inject(DOMAIN_REPOSITORY_IDENTIFIERS.ROLE_REPOSITORY))
], UserUnitOfWork);

export {
  UserUnitOfWork
};
//# sourceMappingURL=chunk-YLTKZAYK.mjs.map