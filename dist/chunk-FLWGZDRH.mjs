import {
  CreateCoffeeUnitOfWorkRepositoryCommand
} from "./chunk-FZISDGRE.mjs";
import {
  DeleteCoffeeUnitOfWorkRepositoryCommand
} from "./chunk-NMCVMRIE.mjs";
import {
  FindOneCoffeeRepositoryQuery
} from "./chunk-DZXH2SBN.mjs";
import {
  DOMAIN_REPOSITORY_IDENTIFIERS,
  DOMAIN_UNIT_OF_WORK_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  __decorateClass,
  __decorateParam
} from "./chunk-CT3ESYKG.mjs";

// src/core/applicationServices/Coffee/CoffeeService.ts
import { inject, injectable } from "inversify";
var CoffeeService = class {
  constructor(coffeUnitOfWork, coffeRepository) {
    this.coffeUnitOfWork = coffeUnitOfWork;
    this.coffeRepository = coffeRepository;
  }
  findAll() {
    return this.coffeRepository.findAllCoffees();
  }
  findOne({ id }) {
    return this.coffeRepository.findOneCoffee(
      new FindOneCoffeeRepositoryQuery(id)
    );
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
    return this.coffeRepository.createCoffee(
      new CreateCoffeeUnitOfWorkRepositoryCommand(
        brand,
        name,
        type,
        imgUrl,
        description,
        burntLvl,
        CoffeeStatus,
        reflink || ""
      )
    );
  }
  update({ coffee, coffeeId }) {
    return this.coffeRepository.updateCoffee({ coffee, coffeeId });
  }
  delete(command) {
    return this.coffeUnitOfWork.delete(
      new DeleteCoffeeUnitOfWorkRepositoryCommand(command.id)
    );
  }
  // addReview({
  //   userId,
  //   coffeeId,
  //   look,
  //   smell,
  //   taste,
  // }: AddCoffeeReviewCommand): Promise<Coffee> {
  //   return this.CoffeUnitOfWork.addCoffeeReview(
  //     new AddCoffeeReviewUnitOfWorkRepositoryCommand(
  //       userId,
  //       coffeeId,
  //       look,
  //       smell,
  //       taste
  //     )
  //   );
  // }
  // sortAndPaginate({ sortBy, skip, take }: SearchQuery): Promise<Coffee> {
  //   return this.CoffeRepository.sortAndPaginate(
  //     new SearchRepositoryQuery(sortBy, skip, take)
  //   );
  // }
};
CoffeeService = __decorateClass([
  injectable(),
  __decorateParam(0, inject(DOMAIN_UNIT_OF_WORK_IDENTIFIERS.COFFEE_UNIT_OF_WORK)),
  __decorateParam(1, inject(DOMAIN_REPOSITORY_IDENTIFIERS.COFFEE_REPOSITORY))
], CoffeeService);

export {
  CoffeeService
};
//# sourceMappingURL=chunk-FLWGZDRH.mjs.map