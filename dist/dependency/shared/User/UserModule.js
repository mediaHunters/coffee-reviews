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

// src/dependency/shared/User/UserModule.ts
var UserModule_exports = {};
__export(UserModule_exports, {
  UserModule: () => UserModule
});
module.exports = __toCommonJS(UserModule_exports);

// src/dependency/BaseModule.ts
var import_inversify = require("inversify");
var BaseModule = class extends import_inversify.ContainerModule {
};

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

// src/infrastructure/database/repository/User/UserRepository.ts
var import_inversify3 = require("inversify");
var import_bcrypt = require("bcrypt");

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
var import_inversify2 = require("inversify");
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
  (0, import_inversify2.injectable)()
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
  __decorateParam(0, (0, import_inversify3.inject)(INFRASTRUCTURE_IDENTIFIERS.DB_MAPPER))
], UserRepository);

// src/core/applicationServices/User/UserService.ts
var import_inversify4 = require("inversify");

// src/core/domainServices/User/request/Repository/query/GetUserRepositoryQuery.ts
var GetUserRepositoryQuery = class {
  constructor(id) {
    this.id = id;
  }
};

// src/core/domainServices/User/request/Repository/query/GetUsersRepositoryQuery.ts
var GetUsersRepositoryQuery = class {
};

// src/core/domainServices/User/request/UnitOfWorkRepository/command/DeleteUserUnitOfWorkRepositoryCommand.ts
var DeleteUserUnitOfWorkRepositoryCommand = class {
  constructor(id) {
    this.id = id;
  }
};

// src/core/applicationServices/User/UserService.ts
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
  (0, import_inversify4.injectable)(),
  __decorateParam(0, (0, import_inversify4.inject)(DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY)),
  __decorateParam(1, (0, import_inversify4.inject)(DOMAIN_UNIT_OF_WORK_IDENTIFIERS.USER_UNIT_OF_WORK))
], UserService);

// src/infrastructure/database/repository/User/UserUnitOfWork.ts
var import_inversify5 = require("inversify");

// src/core/domainServices/Role/requests/repository/query/FindRoleByNameRepositoryQuery.ts
var FindRoleByNameRepositoryQuery = class {
  constructor(name) {
    this.name = name;
  }
};

// src/core/domainServices/User/request/Repository/command/AddUserRepositoryCommand.ts
var AddUserRepositoryCommand = class {
  constructor(nickname, email, password, roleId) {
    this.nickname = nickname;
    this.email = email;
    this.password = password;
    this.roleId = roleId;
  }
};

// src/core/domainServices/User/request/Repository/query/CheckIfUserAlreadyExistsRepositoryQuery.ts
var CheckIfUserAlreadyExistsRepositoryQuery = class {
  constructor(nickname, email) {
    this.nickname = nickname;
    this.email = email;
  }
};

// src/infrastructure/database/repository/User/UserUnitOfWork.ts
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
  (0, import_inversify5.injectable)(),
  __decorateParam(0, (0, import_inversify5.inject)(DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY)),
  __decorateParam(1, (0, import_inversify5.inject)(DOMAIN_REPOSITORY_IDENTIFIERS.ROLE_REPOSITORY))
], UserUnitOfWork);

// src/dependency/shared/User/UserModule.ts
var UserModule = class extends BaseModule {
  constructor() {
    super((bind) => {
      this.init(bind);
    });
  }
  init(bind) {
    this.provideUserRepository(bind);
    this.provideUserUnitOfWork(bind);
    this.provideUserService(bind);
  }
  provideUserRepository(bind) {
    bind(DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY).to(
      UserRepository
    );
  }
  provideUserUnitOfWork(bind) {
    bind(DOMAIN_UNIT_OF_WORK_IDENTIFIERS.USER_UNIT_OF_WORK).to(
      UserUnitOfWork
    );
  }
  provideUserService(bind) {
    bind(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.USER_SERVICE).to(
      UserService
    );
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserModule
});
//# sourceMappingURL=UserModule.js.map