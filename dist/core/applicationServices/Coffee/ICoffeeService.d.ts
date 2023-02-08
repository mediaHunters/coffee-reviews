import { UpdateResult } from 'typeorm';
import { CreateCoffeeCommand } from './requests/command/AddCoffeeCommand.js';
import { DeleteCoffeeCommand } from './requests/command/DeleteCoffeeCommand.js';
import { UpdateCoffeeCommand } from './requests/command/UpdateCoffeeCommand.js';
import { FindOneCoffeeQuery } from './requests/query/FindOneCoffeeQuery.js';
import { Coffee } from '../../domain/Coffee/Coffee.js';

interface ICoffeeService {
    findAll(): Promise<Coffee[]>;
    findOne(query: FindOneCoffeeQuery): Promise<Coffee>;
    create(command: CreateCoffeeCommand): Promise<Coffee>;
    update(command: Partial<UpdateCoffeeCommand>): Promise<UpdateResult>;
    delete(command: DeleteCoffeeCommand): Promise<Coffee>;
}

export { ICoffeeService };
