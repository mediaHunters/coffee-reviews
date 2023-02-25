import {
  CreateCoffeeRepositoryCommand
} from "./chunk-NAINITHB.mjs";
import {
  DeleteCoffeeRepositoryCommand
} from "./chunk-5KQ6QEID.mjs";
import {
  DOMAIN_REPOSITORY_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  __decorateClass,
  __decorateParam,
  __name
} from "./chunk-C22X3M6A.mjs";

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
__name(CoffeeUnitOfWork, "CoffeeUnitOfWork");
CoffeeUnitOfWork = __decorateClass([
  injectable(),
  __decorateParam(0, inject(DOMAIN_REPOSITORY_IDENTIFIERS.COFFEE_REPOSITORY)),
  __decorateParam(1, inject(DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY))
], CoffeeUnitOfWork);

export {
  CoffeeUnitOfWork
};
//# sourceMappingURL=chunk-YCF6IIFP.mjs.map