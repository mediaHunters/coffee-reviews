import {
  CreateCoffeeRepositoryCommand
} from "./chunk-AP25PHGL.mjs";
import {
  DeleteCoffeeRepositoryCommand
} from "./chunk-Y4VHNI27.mjs";
import {
  DOMAIN_REPOSITORY_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  __decorateClass,
  __decorateParam
} from "./chunk-IV6S7MV4.mjs";

// src/infrastructure/database/repository/Coffee/CoffeeUnitOfWork.ts
import { inject, injectable } from "inversify";
var CoffeeUnitOfWork = class {
  constructor(coffeeRepository, userRepository) {
    this.coffeeRepository = coffeeRepository;
    this.userRepository = userRepository;
  }
  create({
    brand,
    name,
    type,
    imgUrl,
    description,
    burntLvl,
    reflink,
    CoffeeStatus
  }) {
    return this.coffeeRepository.createCoffee(
      new CreateCoffeeRepositoryCommand(
        brand,
        name,
        type,
        imgUrl,
        description,
        burntLvl,
        reflink,
        CoffeeStatus
      )
    );
  }
  delete({ id }) {
    return this.coffeeRepository.deleteCoffee(
      new DeleteCoffeeRepositoryCommand(id)
    );
  }
  // @Transactional({
  //   connectionName: () => process.env.ORM_CONNECTION,
  // })
  // async addCoffeeReview({
  //   userId,
  //   coffeeId,
  //   look,
  //   smell,
  //   taste,
  // }: AddReviewRepositoryCommand): Promise<Coffee> {
  //   return this.coffeeRepository.addCoffeeReview(
  //     new AddReviewRepositoryCommand(userId, coffeeId, look, smell, taste)
  //   );
  // }
};
CoffeeUnitOfWork = __decorateClass([
  injectable(),
  __decorateParam(0, inject(DOMAIN_REPOSITORY_IDENTIFIERS.COFFEE_REPOSITORY)),
  __decorateParam(1, inject(DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY))
], CoffeeUnitOfWork);

export {
  CoffeeUnitOfWork
};
//# sourceMappingURL=chunk-ZWLPZ7ZS.mjs.map