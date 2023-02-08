import { UpdateResult } from 'typeorm';
import { Coffee } from '../../domain/Coffee/Coffee.js';
import { CreateCoffeeRepositoryCommand } from './requests/repository/command/CreateCoffeeRepositoryCommand.js';
import { DeleteCoffeeRepositoryCommand } from './requests/repository/command/DeleteCoffeeRepositoryCommand.js';
import { FindOneCoffeeRepositoryQuery } from './requests/UnitOfWork/query/FindCoffeeRepositoryQuery.js';
import { UpdateCoffeeRepositoryCommand } from './requests/repository/command/UpdateCoffeeRepositoryCommand.js';

interface ICoffeeRepository {
    findAllCoffees(): Promise<Coffee[]>;
    findOneCoffee(query: FindOneCoffeeRepositoryQuery): Promise<Coffee>;
    createCoffee(command: CreateCoffeeRepositoryCommand): Promise<Coffee>;
    updateCoffee(command: UpdateCoffeeRepositoryCommand): Promise<UpdateResult>;
    deleteCoffee(command: DeleteCoffeeRepositoryCommand): Promise<Coffee>;
}

export { ICoffeeRepository };
