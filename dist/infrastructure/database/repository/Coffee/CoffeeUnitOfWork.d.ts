import { Coffee } from '../../../../core/domain/Coffee/Coffee.js';
import { ICoffeeUnitOfWork } from '../../../../core/domainServices/Coffee/ICoffeeUnitOfWork.js';
import { CreateCoffeeUnitOfWorkRepositoryCommand } from '../../../../core/domainServices/Coffee/requests/UnitOfWork/command/AddCoffeeUnitOfWorkRepositoryCommand.js';
import { ICoffeeRepository } from '../../../../core/domainServices/Coffee/ICoffeeRepository.js';
import { DeleteCoffeeRepositoryCommand } from '../../../../core/domainServices/Coffee/requests/repository/command/DeleteCoffeeRepositoryCommand.js';
import { IUserRepository } from '../../../../core/domainServices/User/IUserRepository.js';
import '../../../../core/domainServices/Coffee/requests/UnitOfWork/command/DeleteCoffeeUnitOfWorkRepositoryCommand.js';
import 'typeorm';
import '../../../../core/domainServices/Coffee/requests/repository/command/CreateCoffeeRepositoryCommand.js';
import '../../../../core/domainServices/Coffee/requests/UnitOfWork/query/FindCoffeeRepositoryQuery.js';
import '../../../../core/domainServices/Coffee/requests/repository/command/UpdateCoffeeRepositoryCommand.js';
import '../../../../core/domain/User/User.js';
import '../../../../core/domainServices/User/request/Repository/command/AddUserRepositoryCommand.js';
import '../../../../core/domainServices/User/request/Repository/query/CheckIfUserAlreadyExistsRepositoryQuery.js';
import '../../../../core/domainServices/User/request/Repository/query/FindUserByEmailRepositoryQuery.js';
import '../../../../core/domainServices/User/request/Repository/query/GetUserRepositoryQuery.js';
import '../../../../core/domainServices/User/request/Repository/query/GetUsersRepositoryQuery.js';
import '../../../../core/domainServices/User/request/UnitOfWorkRepository/command/DeleteUserUnitOfWorkRepositoryCommand.js';

declare class CoffeeUnitOfWork implements ICoffeeUnitOfWork {
    private readonly coffeeRepository;
    private readonly userRepository;
    constructor(coffeeRepository: ICoffeeRepository, userRepository: IUserRepository);
    create({ brand, name, type, imgUrl, description, burntLvl, reflink, CoffeeStatus, }: CreateCoffeeUnitOfWorkRepositoryCommand): Promise<Coffee>;
    delete({ id }: DeleteCoffeeRepositoryCommand): Promise<Coffee>;
}

export { CoffeeUnitOfWork };
