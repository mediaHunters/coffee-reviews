import { inject, injectable } from 'inversify';

import { UpdateResult } from 'typeorm';

import { ICoffeeService } from 'core/applicationServices/Coffee/ICoffeeService';
import {
  DOMAIN_REPOSITORY_IDENTIFIERS,
  DOMAIN_UNIT_OF_WORK_IDENTIFIERS,
} from 'core/CoreModuleSymbols';
import { Coffee } from 'core/domain/Coffee/Coffee';
import { ICoffeeUnitOfWork } from 'core/domainServices/Coffee/ICoffeeUnitOfWork';
import { CreateCoffeeUnitOfWorkRepositoryCommand } from 'core/domainServices/Coffee/requests/UnitOfWork/command/AddCoffeeUnitOfWorkRepositoryCommand';
import { DeleteCoffeeCommand } from 'core/applicationServices/Coffee/requests/command/DeleteCoffeeCommand';
import { DeleteCoffeeUnitOfWorkRepositoryCommand } from 'core/domainServices/Coffee/requests/UnitOfWork/command/DeleteCoffeeUnitOfWorkRepositoryCommand';
import { ICoffeeRepository } from 'core/domainServices/Coffee/ICoffeeRepository';
import { FindOneCoffeeRepositoryQuery } from 'core/domainServices/Coffee/requests/UnitOfWork/query/FindCoffeeRepositoryQuery';
import { CreateCoffeeCommand } from 'core/applicationServices/Coffee/requests/command/AddCoffeeCommand';
import { UpdateCoffeeCommand } from 'core/applicationServices/Coffee/requests/command/UpdateCoffeeCommand';

@injectable()
export class CoffeeService implements ICoffeeService {
  constructor(
    @inject(DOMAIN_UNIT_OF_WORK_IDENTIFIERS.COFFEE_UNIT_OF_WORK)
    private readonly coffeUnitOfWork: ICoffeeUnitOfWork,
    @inject(DOMAIN_REPOSITORY_IDENTIFIERS.COFFEE_REPOSITORY)
    private readonly coffeRepository: ICoffeeRepository
  ) {}

  findAll(): Promise<Coffee[]> {
    return this.coffeRepository.findAllCoffees();
  }

  findOne({ id }: FindOneCoffeeRepositoryQuery): Promise<Coffee> {
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
    CoffeeStatus,
  }: CreateCoffeeCommand): Promise<Coffee> {
    return this.coffeRepository.createCoffee(
      new CreateCoffeeUnitOfWorkRepositoryCommand(
        brand,
        name,
        type,
        imgUrl,
        description,
        burntLvl,
        CoffeeStatus,
        reflink || ''
      )
    );
  }

  update({ coffee, coffeeId }: UpdateCoffeeCommand): Promise<UpdateResult> {
    return this.coffeRepository.updateCoffee({ coffee, coffeeId });
  }

  delete(command: DeleteCoffeeCommand): Promise<Coffee> {
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
}
