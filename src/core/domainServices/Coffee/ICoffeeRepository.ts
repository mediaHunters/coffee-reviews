import { UpdateResult } from 'typeorm';

import { Coffee } from 'core/domain/Coffee/Coffee';
import { CreateCoffeeRepositoryCommand } from 'core/domainServices/Coffee/requests/repository/command/CreateCoffeeRepositoryCommand';
import { DeleteCoffeeRepositoryCommand } from 'core/domainServices/Coffee/requests/repository/command/DeleteCoffeeRepositoryCommand';
import { FindOneCoffeeRepositoryQuery } from 'core/domainServices/Coffee/requests/UnitOfWork/query/FindCoffeeRepositoryQuery';
import { UpdateCoffeeRepositoryCommand } from 'core/domainServices/Coffee/requests/repository/command/UpdateCoffeeRepositoryCommand';
// import { SearchRepositoryQuery } from 'core/domainServices/Coffee/requests/repository/query/SearchRepositoryQuery';

export interface ICoffeeRepository {
  findAllCoffees(): Promise<Coffee[]>;
  findOneCoffee(query: FindOneCoffeeRepositoryQuery): Promise<Coffee>;
  createCoffee(command: CreateCoffeeRepositoryCommand): Promise<Coffee>;
  updateCoffee(command: UpdateCoffeeRepositoryCommand): Promise<UpdateResult>;
  deleteCoffee(command: DeleteCoffeeRepositoryCommand): Promise<Coffee>;
  // sortAndPaginate(query: SearchRepositoryQuery): Promise<Coffee>;
}
