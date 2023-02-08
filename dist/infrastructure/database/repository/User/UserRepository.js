"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);

// src/infrastructure/database/repository/User/UserRepository.ts
var UserRepository_exports = {};
__export(UserRepository_exports, {
  UserRepository: () => UserRepository
});
module.exports = __toCommonJS(UserRepository_exports);
var import_inversify2 = require("inversify");
var import_bcrypt = require("bcrypt");

// src/core/CoreModuleSymbols.ts
var DOMAIN_APPLICATION_SERVICE_IDENTIFIERS = {
  USER_SERVICE: Symbol.for("UserService"),
  AUTHENTICATION_SERVICE: Symbol.for("AuthenticationService"),
  COFFEE_SERVICE: Symbol.for("CoffeeService"),
  REVIEW_SERVICE: Symbol.for("ReviewService")
};
var DOMAIN_MAPPING_IDENTIFIERS = {
  USER_DOMAIN: Symbol.for("UserDomain"),
  ROLE_DOMAIN: Symbol.for("RoleDomain"),
  COFFEE_DOMAIN: Symbol.for("CoffeeDomain"),
  REVIEW_DOMAIN: Symbol.for("ReviewDomain")
};
var DOMAIN_REPOSITORY_IDENTIFIERS = {
  ROLE_REPOSITORY: Symbol.for("RoleRepository"),
  USER_REPOSITORY: Symbol.for("UserRepository"),
  COFFEE_REPOSITORY: Symbol.for("CoffeeRepository"),
  REVIEW_REPOSITORY: Symbol.for("ReviewRepository")
};
var DOMAIN_UNIT_OF_WORK_IDENTIFIERS = {
  USER_UNIT_OF_WORK: Symbol.for("UserUnitOfWork"),
  COFFEE_UNIT_OF_WORK: Symbol.for("CoffeeUnitOfWork")
};

// src/infrastructure/InfrastructureModuleSymbols.ts
var DATABASE_IDENTIFIERS = {
  ORM: Symbol.for("Orm")
};
var INFRASTRUCTURE_IDENTIFIERS = {
  DB_MAPPER: Symbol.for("DBMapper")
};
var DATABASE_MAPPING_IDENTIFIERS = {
  USER_ENTITY: Symbol.for("UserEntity"),
  ROLE_ENTITY: Symbol.for("RoleEntity"),
  COFFEE_ENTITY: Symbol.for("CoffeeEntity"),
  REVIEW_ENTITY: Symbol.for("ReviewEntity")
};

// src/infrastructure/database/entities/User.ts
var import_typeorm2 = require("typeorm");

// src/infrastructure/database/entities/Base.ts
var import_typeorm = require("typeorm");
var Model = class extends import_typeorm.BaseEntity {
};
__decorateClass([
  (0, import_typeorm.PrimaryGeneratedColumn)("uuid")
], Model.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.CreateDateColumn)()
], Model.prototype, "createdAt", 2);
__decorateClass([
  (0, import_typeorm.UpdateDateColumn)()
], Model.prototype, "updatedAt", 2);

// src/infrastructure/database/entities/User.ts
var User = class extends Model {
  toJson() {
    return {
      ...this,
      password: void 0
    };
  }
};
__decorateClass([
  (0, import_typeorm2.Column)("text", {
    nullable: true
  })
], User.prototype, "firstName", 2);
__decorateClass([
  (0, import_typeorm2.Column)("text", {
    nullable: true
  })
], User.prototype, "lastName", 2);
__decorateClass([
  (0, import_typeorm2.Column)("text", { unique: true })
], User.prototype, "nickname", 2);
__decorateClass([
  (0, import_typeorm2.Column)("text")
], User.prototype, "email", 2);
__decorateClass([
  (0, import_typeorm2.Column)("text")
], User.prototype, "password", 2);
__decorateClass([
  (0, import_typeorm2.ManyToOne)("Role", (role) => role.user)
], User.prototype, "role", 2);
__decorateClass([
  (0, import_typeorm2.OneToMany)("Review", (review) => review.user)
], User.prototype, "reviews", 2);
User = __decorateClass([
  (0, import_typeorm2.Entity)()
], User);

// src/infrastructure/database/repository/common/Repository.ts
var import_typeorm3 = require("typeorm");
var import_inversify = require("inversify");
var Repository = class extends import_typeorm3.AbstractRepository {
  constructor(entity) {
    super();
    this.entity = entity;
  }
  async find(id) {
    return this.getDBRepository().findOne(id);
  }
  findBy(condition) {
    return this.getDBRepository().find(condition);
  }
  async findMany(ids) {
    return this.getDBRepository().findByIds(ids);
  }
  async findAll() {
    return this.getDBRepository().find();
  }
  async query(query, parameters) {
    return this.getDBRepository().query(query, parameters);
  }
  async update(condition, data) {
    return !!await this.getDBRepository().update(condition, data);
  }
  async updateAll(condition, data) {
    return !!await this.getDBRepository().update(condition, data);
  }
  async delete(condition) {
    return !!await this.getDBRepository().delete(condition);
  }
  async deleteAll(condition) {
    return !!await this.getDBRepository().delete(condition);
  }
  async remove(entity) {
    return this.getDBRepository().remove(entity);
  }
  async removeAll(entities) {
    return this.getDBRepository().remove(entities);
  }
  async save(entity) {
    return this.getDBRepository().save(entity);
  }
  async saveAll(entities) {
    return this.getDBRepository().save(entities);
  }
  custom() {
    return this.getDBRepository();
  }
  getConnectionName() {
    return process.env.ORM_CONNECTION;
  }
  getDBRepository() {
    return (0, import_typeorm3.getRepository)(this.entity, this.getConnectionName());
  }
};
Repository = __decorateClass([
  (0, import_inversify.injectable)()
], Repository);

// src/infrastructure/database/entities/Role.ts
var import_typeorm4 = require("typeorm");

// src/infrastructure/database/enum/UserRole.ts
var USER_ROLE = /* @__PURE__ */ ((USER_ROLE2) => {
  USER_ROLE2["ADMIN"] = "ADMIN";
  USER_ROLE2["MEMBER"] = "MEMBER";
  return USER_ROLE2;
})(USER_ROLE || {});

// src/infrastructure/database/entities/Role.ts
var Role = class extends Model {
};
__decorateClass([
  (0, import_typeorm4.Column)({
    default: "MEMBER" /* MEMBER */,
    enum: USER_ROLE,
    nullable: false,
    type: "enum"
  })
], Role.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm4.OneToMany)("User", (user) => user.role)
], Role.prototype, "user", 2);
Role = __decorateClass([
  (0, import_typeorm4.Entity)()
], Role);

// src/infrastructure/common/errors/InfrastructureErrors.ts
var InfrastructureErrors = /* @__PURE__ */ ((InfrastructureErrors2) => {
  InfrastructureErrors2[InfrastructureErrors2["USER_NOT_FOUND"] = 0] = "USER_NOT_FOUND";
  InfrastructureErrors2[InfrastructureErrors2["USER_ALREADY_EXIST"] = 1] = "USER_ALREADY_EXIST";
  InfrastructureErrors2[InfrastructureErrors2["ROLE_NOT_FOUND"] = 2] = "ROLE_NOT_FOUND";
  InfrastructureErrors2[InfrastructureErrors2["COFFEE_NOT_FOUND"] = 3] = "COFFEE_NOT_FOUND";
  InfrastructureErrors2[InfrastructureErrors2["REVIEW_NOT_FOUND"] = 4] = "REVIEW_NOT_FOUND";
  return InfrastructureErrors2;
})(InfrastructureErrors || {});

// src/core/common/errors/BaseError.ts
var BaseError = class {
  constructor(code, message = "", name = "") {
    this.code = code;
    this.message = message;
    this.name = name;
  }
};

// src/infrastructure/database/repository/User/UserRepository.ts
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
    user.password = (0, import_bcrypt.hashSync)(password, 10);
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
UserRepository = __decorateClass([
  __decorateParam(0, (0, import_inversify2.inject)(INFRASTRUCTURE_IDENTIFIERS.DB_MAPPER))
], UserRepository);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserRepository
});
//# sourceMappingURL=UserRepository.js.map