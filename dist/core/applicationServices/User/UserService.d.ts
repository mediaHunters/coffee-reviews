import { IUserService } from './IUserService.js';
import { FetchUserQuery } from './requests/query/FetchUserQuery.js';
import { User } from '../../domain/User/User.js';
import { IUserRepository } from '../../domainServices/User/IUserRepository.js';
import { RemoveUserCommand } from './requests/command/RemoveUserCommand.js';
import { IUserUnitOfWork } from '../../domainServices/User/IUserUnitOfWork.js';
import '../../domainServices/User/request/Repository/command/AddUserRepositoryCommand.js';
import '../../domainServices/User/request/Repository/query/CheckIfUserAlreadyExistsRepositoryQuery.js';
import '../../domainServices/User/request/Repository/query/FindUserByEmailRepositoryQuery.js';
import '../../domainServices/User/request/Repository/query/GetUserRepositoryQuery.js';
import '../../domainServices/User/request/Repository/query/GetUsersRepositoryQuery.js';
import '../../domainServices/User/request/UnitOfWorkRepository/command/DeleteUserUnitOfWorkRepositoryCommand.js';
import '../../domainServices/User/request/UnitOfWorkRepository/command/AddUserUnitOfWorkRepositoryCommand.js';

declare class UserService implements IUserService {
    private readonly userRepository;
    private readonly userUnitOfWork;
    constructor(userRepository: IUserRepository, userUnitOfWork: IUserUnitOfWork);
    removeUser({ id }: RemoveUserCommand): Promise<User>;
    fetchUser({ id }: FetchUserQuery): Promise<User>;
    fetchUsers(): Promise<User[]>;
}

export { UserService };
