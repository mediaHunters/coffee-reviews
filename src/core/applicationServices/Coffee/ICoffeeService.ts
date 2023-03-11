import { UpdateResult } from 'typeorm';

import { CreateCoffeeCommand } from 'core/applicationServices/Coffee/requests/command/AddCoffeeCommand';
import { DeleteCoffeeCommand } from 'core/applicationServices/Coffee/requests/command/DeleteCoffeeCommand';
import { UpdateCoffeeCommand } from 'core/applicationServices/Coffee/requests/command/UpdateCoffeeCommand';
import { FindOneCoffeeQuery } from 'core/applicationServices/Coffee/requests/query/FindOneCoffeeQuery';
import { Coffee } from 'core/domain/Coffee/Coffee';

export interface ICoffeeService {
  findAll(): Promise<Coffee[]>;
  findOne(query: FindOneCoffeeQuery): Promise<Coffee>;
  create(command: CreateCoffeeCommand): Promise<Coffee>;
  update(command: Partial<UpdateCoffeeCommand>): Promise<UpdateResult>;
  delete(command: DeleteCoffeeCommand): Promise<Coffee>;
  // sortAndPaginate(query: SearchQuery): Promise<Coffee>;
}
