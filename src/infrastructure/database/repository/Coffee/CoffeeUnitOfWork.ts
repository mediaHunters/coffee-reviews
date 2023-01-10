import { inject, injectable } from 'inversify';

import { DOMAIN_REPOSITORY_IDENTIFIERS } from 'core/CoreModuleSymbols';
import { Coffee } from 'core/domain/Coffee/Coffee';
import { ICoffeeUnitOfWork } from 'core/domainServices/Coffee/ICoffeeUnitOfWork';
import { AddCoffeeUnitOfWorkRepositoryCommand } from 'core/domainServices/Coffee/requests/UnitOfWork/command/AddCoffeeUnitOfWorkRepositoryCommand';
import { DeleteUserUnitOfWorkRepositoryCommand } from 'core/domainServices/User/request/UnitOfWorkRepository/command/DeleteUserUnitOfWorkRepositoryCommand';
import { ICoffeeRepository } from 'core/domainServices/Coffee/ICoffeeRepository';
import { AddCoffeeRepositoryCommand } from 'core/domainServices/Coffee/requests/repository/command/AddCoffeeRepositoryCommand';
import { DeleteCoffeeRepositoryCommand } from 'core/domainServices/Coffee/requests/repository/command/DeleteCoffeeRepositoryCommand';

@injectable()
export class CoffeeUnitOfWork implements ICoffeeUnitOfWork {
  constructor(
    @inject(DOMAIN_REPOSITORY_IDENTIFIERS.COFFEE_REPOSITORY)
    private readonly coffeeRepository: ICoffeeRepository
  ) {}

  addUser({
    brand,
    name,
    type,
    imgUrl,
    description,
    burntLvl,
    reflink,
    CoffeeStatus,
  }: AddCoffeeUnitOfWorkRepositoryCommand): Promise<Coffee> {
    return this.coffeeRepository.addCoffee(
      new AddCoffeeRepositoryCommand(
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

  deleteCoffee({ id }: DeleteUserUnitOfWorkRepositoryCommand): Promise<Coffee> {
    return this.coffeeRepository.deleteCoffee(
      new DeleteCoffeeRepositoryCommand(id)
    );
  }
}
