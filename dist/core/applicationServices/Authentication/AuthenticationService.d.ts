import { IAuthenticationService } from './IAuthenticationService.js';
import { IUserUnitOfWork } from '../../domainServices/User/IUserUnitOfWork.js';
import { User } from '../../domain/User/User.js';
import { SignUpCommand } from './requests/repository/command/SignUpCommand.js';
import { AuthenticationQuery } from './requests/handler/query/AuthenticationQuery.js';
import { IUserRepository } from '../../domainServices/User/IUserRepository.js';
import '../../domainServices/User/request/UnitOfWorkRepository/command/AddUserUnitOfWorkRepositoryCommand.js';
import '../../domainServices/User/request/UnitOfWorkRepository/command/DeleteUserUnitOfWorkRepositoryCommand.js';
import '../../domainServices/User/request/Repository/command/AddUserRepositoryCommand.js';
import '../../domainServices/User/request/Repository/query/CheckIfUserAlreadyExistsRepositoryQuery.js';
import '../../domainServices/User/request/Repository/query/FindUserByEmailRepositoryQuery.js';
import '../../domainServices/User/request/Repository/query/GetUserRepositoryQuery.js';
import '../../domainServices/User/request/Repository/query/GetUsersRepositoryQuery.js';

declare class AuthenticationService implements IAuthenticationService {
    private readonly userUnitOfWork;
    private readonly userRepository;
    constructor(userUnitOfWork: IUserUnitOfWork, userRepository: IUserRepository);
    signUp({ nickname, email, password }: SignUpCommand): Promise<User>;
    verifyCredentials({ email, password, }: AuthenticationQuery): Promise<User | undefined>;
}

export { AuthenticationService };
