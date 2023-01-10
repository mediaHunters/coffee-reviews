import { Coffee } from 'core/domain/Coffee/Coffee';
import { AddCoffeeUnitOfWorkRepositoryCommand } from 'core/domainServices/Coffee/requests/UnitOfWork/command/AddCoffeeUnitOfWorkRepositoryCommand';
import { DeleteUserUnitOfWorkRepositoryCommand } from 'core/domainServices/User/request/UnitOfWorkRepository/command/DeleteUserUnitOfWorkRepositoryCommand';

export interface ICoffeeUnitOfWork {
  addUser(command: AddCoffeeUnitOfWorkRepositoryCommand): Promise<Coffee>;
  deleteCoffee(command: DeleteUserUnitOfWorkRepositoryCommand): Promise<Coffee>;
}
