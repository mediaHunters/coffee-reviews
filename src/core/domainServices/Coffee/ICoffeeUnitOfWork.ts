import { Coffee } from 'core/domain/Coffee/Coffee';
import { CreateCoffeeUnitOfWorkRepositoryCommand } from 'core/domainServices/Coffee/requests/UnitOfWork/command/AddCoffeeUnitOfWorkRepositoryCommand';
import { DeleteCoffeeUnitOfWorkRepositoryCommand } from 'core/domainServices/Coffee/requests/UnitOfWork/command/DeleteCoffeeUnitOfWorkRepositoryCommand';

export interface ICoffeeUnitOfWork {
  create(command: CreateCoffeeUnitOfWorkRepositoryCommand): Promise<Coffee>;
  delete(command: DeleteCoffeeUnitOfWorkRepositoryCommand): Promise<Coffee>;
}
