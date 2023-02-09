import {
  Coffee
} from "./chunk-WAAZK5KM.mjs";
import {
  Repository
} from "./chunk-4U7NPKTN.mjs";
import {
  InfrastructureErrors
} from "./chunk-ENM6OMP3.mjs";
import {
  BaseError
} from "./chunk-6TCJVVRE.mjs";
import {
  DOMAIN_MAPPING_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  DATABASE_MAPPING_IDENTIFIERS,
  INFRASTRUCTURE_IDENTIFIERS
} from "./chunk-XLG4QA2P.mjs";
import {
  __decorateClass,
  __decorateParam
} from "./chunk-IV6S7MV4.mjs";

// src/infrastructure/database/repository/Coffee/CoffeeRepository.ts
import { inject } from "inversify";
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
  __decorateParam(0, inject(INFRASTRUCTURE_IDENTIFIERS.DB_MAPPER))
], CoffeeRepository);

export {
  CoffeeRepository
};
//# sourceMappingURL=chunk-3ICYLAAJ.mjs.map