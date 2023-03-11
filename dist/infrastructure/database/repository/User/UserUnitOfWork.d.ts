import { User } from '../../../../core/domain/User/User.js';
import { IUserRepository } from '../../../../core/domainServices/User/IUserRepository.js';
import { IUserUnitOfWork } from '../../../../core/domainServices/User/IUserUnitOfWork.js';
import { AddUserUnitOfWorkRepositoryCommand } from '../../../../core/domainServices/User/request/UnitOfWorkRepository/command/AddUserUnitOfWorkRepositoryCommand.js';
import { DeleteUserUnitOfWorkRepositoryCommand } from '../../../../core/domainServices/User/request/UnitOfWorkRepository/command/DeleteUserUnitOfWorkRepositoryCommand.js';
import { IRoleRepository } from '../../../../core/domainServices/Role/IRoleRepository.js';
import '../../../../core/domainServices/User/request/Repository/command/AddUserRepositoryCommand.js';
import '../../../../core/domainServices/User/request/Repository/query/CheckIfUserAlreadyExistsRepositoryQuery.js';
import '../../../../core/domainServices/User/request/Repository/query/FindUserByEmailRepositoryQuery.js';
import '../../../../core/domainServices/User/request/Repository/query/GetUserRepositoryQuery.js';
import '../../../../core/domainServices/User/request/Repository/query/GetUsersRepositoryQuery.js';
import '../../../../core/domain/Role/Role.js';
import '../../../../core/domainServices/Role/requests/repository/query/FindRoleByNameRepositoryQuery.js';
import '../../../../core/domainServices/Role/requests/repository/query/FindRoleRepositoryQuery.js';

declare class UserUnitOfWork implements IUserUnitOfWork {
    private readonly userRepository;
    private readonly roleRepository;
    constructor(userRepository: IUserRepository, roleRepository: IRoleRepository);
    addUser({ email, password, nickname, }: AddUserUnitOfWorkRepositoryCommand): Promise<User>;
    deleteUser(command: DeleteUserUnitOfWorkRepositoryCommand): Promise<User>;
}

export { UserUnitOfWork };
