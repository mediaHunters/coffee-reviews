import { Coffee } from '../../domain/Coffee/Coffee.js';
import { CreateCoffeeUnitOfWorkRepositoryCommand } from './requests/UnitOfWork/command/AddCoffeeUnitOfWorkRepositoryCommand.js';
import { DeleteCoffeeUnitOfWorkRepositoryCommand } from './requests/UnitOfWork/command/DeleteCoffeeUnitOfWorkRepositoryCommand.js';

interface ICoffeeUnitOfWork {
    create(command: CreateCoffeeUnitOfWorkRepositoryCommand): Promise<Coffee>;
    delete(command: DeleteCoffeeUnitOfWorkRepositoryCommand): Promise<Coffee>;
}

export { ICoffeeUnitOfWork };
