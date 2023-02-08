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

// src/infrastructure/database/repository/Coffee/CoffeeRepository.ts
var CoffeeRepository_exports = {};
__export(CoffeeRepository_exports, {
  CoffeeRepository: () => CoffeeRepository
});
module.exports = __toCommonJS(CoffeeRepository_exports);
var import_inversify2 = require("inversify");

// src/infrastructure/database/repository/common/Repository.ts
var import_typeorm = require("typeorm");
var import_inversify = require("inversify");
var Repository = class extends import_typeorm.AbstractRepository {
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
    return (0, import_typeorm.getRepository)(this.entity, this.getConnectionName());
  }
};
Repository = __decorateClass([
  (0, import_inversify.injectable)()
], Repository);

// src/infrastructure/database/entities/Coffee.ts
var import_typeorm3 = require("typeorm");

// src/core/domain/Coffee/CoffeeType.ts
var COFFEE_TYPE = /* @__PURE__ */ ((COFFEE_TYPE2) => {
  COFFEE_TYPE2["BEANS"] = "BEANS";
  COFFEE_TYPE2["POWDER"] = "POWDER";
  return COFFEE_TYPE2;
})(COFFEE_TYPE || {});

// src/core/domain/Coffee/CoffeeBurnLvl.ts
var COFFEE_BURNT_LVL = /* @__PURE__ */ ((COFFEE_BURNT_LVL2) => {
  COFFEE_BURNT_LVL2["LIGHT_ROAST"] = "LIGHT_ROAST";
  COFFEE_BURNT_LVL2["MEDUIM_ROAST"] = "MEDIUM_ROAST";
  COFFEE_BURNT_LVL2["DARK_ROAST"] = "DARK_ROAST";
  return COFFEE_BURNT_LVL2;
})(COFFEE_BURNT_LVL || {});

// src/infrastructure/database/enum/CoffeStatus.ts
var COFFEE_STATUS = /* @__PURE__ */ ((COFFEE_STATUS2) => {
  COFFEE_STATUS2["WAITING_QUEUE"] = "WAITING_QUEUE";
  COFFEE_STATUS2["VERIFIED"] = "VERIFIED";
  COFFEE_STATUS2["BLOCKED"] = "BLOCKED";
  return COFFEE_STATUS2;
})(COFFEE_STATUS || {});

// src/infrastructure/database/entities/Base.ts
var import_typeorm2 = require("typeorm");
var Model = class extends import_typeorm2.BaseEntity {
};
__decorateClass([
  (0, import_typeorm2.PrimaryGeneratedColumn)("uuid")
], Model.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm2.CreateDateColumn)()
], Model.prototype, "createdAt", 2);
__decorateClass([
  (0, import_typeorm2.UpdateDateColumn)()
], Model.prototype, "updatedAt", 2);

// src/infrastructure/database/entities/Coffee.ts
var Coffee = class extends Model {
};
__decorateClass([
  (0, import_typeorm3.Column)("text")
], Coffee.prototype, "brand", 2);
__decorateClass([
  (0, import_typeorm3.Column)("text")
], Coffee.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm3.Column)({
    enum: COFFEE_TYPE,
    nullable: false,
    type: "enum"
  })
], Coffee.prototype, "type", 2);
__decorateClass([
  (0, import_typeorm3.Column)("text")
], Coffee.prototype, "imgUrl", 2);
__decorateClass([
  (0, import_typeorm3.Column)("text")
], Coffee.prototype, "description", 2);
__decorateClass([
  (0, import_typeorm3.Column)({
    enum: COFFEE_BURNT_LVL,
    nullable: false,
    type: "enum"
  })
], Coffee.prototype, "burntLvl", 2);
__decorateClass([
  (0, import_typeorm3.Column)("text")
], Coffee.prototype, "reflink", 2);
__decorateClass([
  (0, import_typeorm3.Column)({
    enum: COFFEE_STATUS,
    nullable: false,
    type: "enum",
    default: "WAITING_QUEUE" /* WAITING_QUEUE */
  })
], Coffee.prototype, "CoffeeStatus", 2);
__decorateClass([
  (0, import_typeorm3.OneToMany)("Review", (Review) => Review.coffee, {
    cascade: true
  })
], Coffee.prototype, "reviews", 2);
Coffee = __decorateClass([
  (0, import_typeorm3.Entity)()
], Coffee);

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

// src/infrastructure/database/repository/Coffee/CoffeeRepository.ts
var CoffeeRepository = class extends Repository {
  constructor(dbMapper) {
    super(Coffee);
    this.dbMapper = dbMapper;
  }
  async findAllCoffees() {
    const coffees = await this.custom().createQueryBuilder().leftJoinAndSelect("Coffee.reviews", "Review").getMany();
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.COFFEE_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.COFFEE_ENTITY
      },
      coffees
    );
  }
  async findOneCoffee({ id }) {
    const coffee = await this.custom().createQueryBuilder().leftJoinAndSelect("Coffee.reviews", "Review").where("Coffee.id = :id ", { id }).getOne();
    if (!coffee) {
      throw new BaseError(
        InfrastructureErrors[3 /* COFFEE_NOT_FOUND */]
      );
    }
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.COFFEE_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.COFFEE_ENTITY
      },
      coffee
    );
  }
  async createCoffee({
    CoffeeStatus,
    brand,
    name,
    type,
    imgUrl,
    description,
    burntLvl,
    reflink
  }) {
    const coffee = new Coffee();
    coffee.brand = brand;
    coffee.name = name;
    coffee.type = type;
    coffee.imgUrl = imgUrl;
    coffee.description = description;
    coffee.burntLvl = burntLvl;
    coffee.reflink = reflink;
    coffee.CoffeeStatus = CoffeeStatus;
    coffee.createdAt = /* @__PURE__ */ new Date();
    coffee.type = type;
    coffee.reviews = [];
    const savedCoffee = await this.save(coffee);
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.COFFEE_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.COFFEE_ENTITY
      },
      savedCoffee
    );
  }
  async updateCoffee({
    coffee,
    coffeeId
  }) {
    const updatedCoffee = await this.custom().createQueryBuilder().update(Coffee).set({ ...coffee }).where("id = :id", { id: coffeeId }).execute();
    return updatedCoffee;
  }
  // TODO: make it transational
  async deleteCoffee({ id }) {
    const result = await this.custom().createQueryBuilder().leftJoinAndSelect("Coffee.reviews", "Review").where("Coffee.id = :id ", { id }).getOne();
    if (!result) {
      throw new BaseError(
        InfrastructureErrors[3 /* COFFEE_NOT_FOUND */]
      );
    }
    this.remove(result);
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.COFFEE_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.COFFEE_ENTITY
      },
      result
    );
  }
  // sortAndPaginate({
  //   sortBy,
  //   skip,
  //   take,
  // }: SearchRepositoryQuery): Promise<Coffee> {
  //   // const result = await this.custom().createQueryBuilder().addOrderBy(sortB, skip, take))
  // }
};
CoffeeRepository = __decorateClass([
  __decorateParam(0, (0, import_inversify2.inject)(INFRASTRUCTURE_IDENTIFIERS.DB_MAPPER))
], CoffeeRepository);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CoffeeRepository
});
//# sourceMappingURL=CoffeeRepository.js.map