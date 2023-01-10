import { AddCoffeeCommand } from 'core/applicationServices/Coffee/requests/command/AddCoffeeCommand';
import { DeleteCoffeeCommand } from 'core/applicationServices/Coffee/requests/command/DeleteCoffeeCommand';
import { Coffee } from 'core/domain/Coffee/Coffee';

export interface ICoffeeService {
  add(command: AddCoffeeCommand): Promise<Coffee>;
  delete(command: DeleteCoffeeCommand): Promise<Coffee>;
}
