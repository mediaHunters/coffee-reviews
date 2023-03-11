import { User } from '../../domain/User/User.js';
import { AddUserRepositoryCommand } from './request/Repository/command/AddUserRepositoryCommand.js';
import { CheckIfUserAlreadyExistsRepositoryQuery } from './request/Repository/query/CheckIfUserAlreadyExistsRepositoryQuery.js';
import { FindUserByEmailRepositoryQuery } from './request/Repository/query/FindUserByEmailRepositoryQuery.js';
import { GetUserRepositoryQuery } from './request/Repository/query/GetUserRepositoryQuery.js';
import { GetUsersRepositoryQuery } from './request/Repository/query/GetUsersRepositoryQuery.js';
import { DeleteUserUnitOfWorkRepositoryCommand } from './request/UnitOfWorkRepository/command/DeleteUserUnitOfWorkRepositoryCommand.js';

interface IUserRepository {
    getUsers(request: GetUsersRepositoryQuery): Promise<User[]>;
    findUserByEmail(request: FindUserByEmailRepositoryQuery): Promise<User>;
    getUser(request: GetUserRepositoryQuery): Promise<User>;
    addUser(command: AddUserRepositoryCommand): Promise<User>;
    removeUser(command: DeleteUserUnitOfWorkRepositoryCommand): Promise<User>;
    checkIfUserAlreadyExists(query: CheckIfUserAlreadyExistsRepositoryQuery): Promise<User[]>;
}

export { IUserRepository };
