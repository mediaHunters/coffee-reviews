import {
  Repository
} from "./chunk-HYGVCY55.mjs";
import {
  InfrastructureErrors
} from "./chunk-ENM6OMP3.mjs";
import {
  User
} from "./chunk-IOQQNHD2.mjs";
import {
  Role
} from "./chunk-3C5KPKXZ.mjs";
import {
  DATABASE_MAPPING_IDENTIFIERS,
  INFRASTRUCTURE_IDENTIFIERS
} from "./chunk-XLG4QA2P.mjs";
import {
  BaseError
} from "./chunk-2CGUJ2VR.mjs";
import {
  DOMAIN_MAPPING_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  __decorateClass,
  __decorateParam,
  __name
} from "./chunk-C22X3M6A.mjs";

// src/infrastructure/database/repository/User/UserRepository.ts
import { inject } from "inversify";
import { hashSync } from "bcrypt";
var UserRepository = class extends Repository {
  constructor(dbMapper) {
    super(User);
    this.dbMapper = dbMapper;
  }
  async addUser({
    nickname,
    email,
    password,
    roleId
  }) {
    const user = new User();
    user.nickname = nickname;
    user.email = email;
    user.password = hashSync(password, 10);
    const memberRole = new Role();
    memberRole.id = roleId;
    user.role = memberRole;
    const savedUser = await this.save(user);
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY
      },
      savedUser
    );
  }
  async removeUser({
    id
  }) {
    const result = await this.custom().createQueryBuilder().leftJoinAndSelect("User.role", "Role").where("User.id = :id ", { id }).getOne();
    if (!result) {
      throw new BaseError(
        InfrastructureErrors[0 /* USER_NOT_FOUND */]
      );
    }
    await this.remove(result);
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY
      },
      result
    );
  }
  async findUserByEmail({
    email
  }) {
    const result = await this.custom().createQueryBuilder().leftJoinAndSelect("User.role", "role").where("User.email = :email", { email }).getMany();
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY
      },
      result[0]
    );
  }
  async getUser({ id }) {
    const result = await this.custom().createQueryBuilder().leftJoinAndSelect("User.role", "Role").where("User.id = :id ", { id }).getOne();
    if (!result) {
      throw new BaseError(
        InfrastructureErrors[0 /* USER_NOT_FOUND */]
      );
    }
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY
      },
      result
    );
  }
  async getUsers() {
    const users = await this.custom().createQueryBuilder().leftJoinAndSelect("User.role", "role").getMany();
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY
      },
      users
    );
  }
  async checkIfUserAlreadyExists({
    nickname,
    email
  }) {
    const result = await this.custom().createQueryBuilder().leftJoinAndSelect("User.role", "role").where("User.nickname = :nickname OR User.email = :email", {
      nickname,
      email
    }).getMany();
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY
      },
      result
    );
  }
};
__name(UserRepository, "UserRepository");
UserRepository = __decorateClass([
  __decorateParam(0, inject(INFRASTRUCTURE_IDENTIFIERS.DB_MAPPER))
], UserRepository);

export {
  UserRepository
};
//# sourceMappingURL=chunk-W2MLJHFZ.mjs.map