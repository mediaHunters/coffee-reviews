import { UpdateResult } from 'typeorm';
import { ICoffeeService } from './ICoffeeService.js';
import { Coffee } from '../../domain/Coffee/Coffee.js';
import { ICoffeeUnitOfWork } from '../../domainServices/Coffee/ICoffeeUnitOfWork.js';
import { DeleteCoffeeCommand } from './requests/command/DeleteCoffeeCommand.js';
import { ICoffeeRepository } from '../../domainServices/Coffee/ICoffeeRepository.js';
import { FindOneCoffeeRepositoryQuery } from '../../domainServices/Coffee/requests/UnitOfWork/query/FindCoffeeRepositoryQuery.js';
import { CreateCoffeeCommand } from './requests/command/AddCoffeeCommand.js';
import { UpdateCoffeeCommand } from './requests/command/UpdateCoffeeCommand.js';
import './requests/query/FindOneCoffeeQuery.js';
import '../../domainServices/Coffee/requests/UnitOfWork/command/AddCoffeeUnitOfWorkRepositoryCommand.js';
import '../../domainServices/Coffee/requests/UnitOfWork/command/DeleteCoffeeUnitOfWorkRepositoryCommand.js';
import '../../domainServices/Coffee/requests/repository/command/CreateCoffeeRepositoryCommand.js';
import '../../domainServices/Coffee/requests/repository/command/DeleteCoffeeRepositoryCommand.js';
import '../../domainServices/Coffee/requests/repository/command/UpdateCoffeeRepositoryCommand.js';

declare class CoffeeService implements ICoffeeService {
    private readonly coffeUnitOfWork;
    private readonly coffeRepository;
    constructor(coffeUnitOfWork: ICoffeeUnitOfWork, coffeRepository: ICoffeeRepository);
    findAll(): Promise<Coffee[]>;
    findOne({ id }: FindOneCoffeeRepositoryQuery): Promise<Coffee>;
    create({ brand, name, type, imgUrl, description, burntLvl, reflink, CoffeeStatus, }: CreateCoffeeCommand): Promise<Coffee>;
    update({ coffee, coffeeId }: UpdateCoffeeCommand): Promise<UpdateResult>;
    delete(command: DeleteCoffeeCommand): Promise<Coffee>;
}

export { CoffeeService };
