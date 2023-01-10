import { Coffee } from 'core/domain/Coffee/Coffee';
import { AddCoffeeRepositoryCommand } from 'core/domainServices/Coffee/requests/repository/command/AddCoffeeRepositoryCommand';
import { DeleteCoffeeRepositoryCommand } from 'core/domainServices/Coffee/requests/repository/command/DeleteCoffeeRepositoryCommand';

export interface ICoffeeRepository {
  addCoffee(command: AddCoffeeRepositoryCommand): Promise<Coffee>;
  deleteCoffee(command: DeleteCoffeeRepositoryCommand): Promise<Coffee>;
  getAllCoffees(): Promise<Coffee[]>;
  getCoffee(): Promise<Coffee>;
}
