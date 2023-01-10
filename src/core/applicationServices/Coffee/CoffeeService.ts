import { inject, injectable } from 'inversify';

import { ICoffeeService } from 'core/applicationServices/Coffee/ICoffeeService';
import { DOMAIN_UNIT_OF_WORK_IDENTIFIERS } from 'core/CoreModuleSymbols';
import { Coffee } from 'core/domain/Coffee/Coffee';
import { ICoffeeUnitOfWork } from 'core/domainServices/Coffee/ICoffeeUnitOfWork';
import { AddCoffeeUnitOfWorkRepositoryCommand } from 'core/domainServices/Coffee/requests/UnitOfWork/command/AddCoffeeUnitOfWorkRepositoryCommand';
import { AddCoffeeCommand } from 'core/applicationServices/Coffee/requests/command/AddCoffeeCommand';
import { DeleteCoffeeCommand } from 'core/applicationServices/Coffee/requests/command/DeleteCoffeeCommand';
import { DeleteCoffeeUnitOfWorkRepositoryCommand } from 'core/domainServices/Coffee/requests/UnitOfWork/command/DeleteCoffeeUnitOfWorkRepositoryCommand';

@injectable()
export class CoffeeService implements ICoffeeService {
  constructor(
    @inject(DOMAIN_UNIT_OF_WORK_IDENTIFIERS.COFFEE_UNIT_OF_WORK)
    private readonly CoffeUnitOfWork: ICoffeeUnitOfWork
  ) {}

  add({
    brand,
    name,
    type,
    imgUrl,
    description,
    burntLvl,
    reflink,
    CoffeeStatus,
  }: AddCoffeeCommand): Promise<Coffee> {
    return this.CoffeUnitOfWork.addUser(
      new AddCoffeeUnitOfWorkRepositoryCommand(
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

  delete(command: DeleteCoffeeCommand): Promise<Coffee> {
    return this.CoffeUnitOfWork.deleteCoffee(
      new DeleteCoffeeUnitOfWorkRepositoryCommand(command.id)
    );
  }
}
