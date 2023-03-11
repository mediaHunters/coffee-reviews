import { User } from '../../domain/User/User.js';
import { AddUserUnitOfWorkRepositoryCommand } from './request/UnitOfWorkRepository/command/AddUserUnitOfWorkRepositoryCommand.js';
import { DeleteUserUnitOfWorkRepositoryCommand } from './request/UnitOfWorkRepository/command/DeleteUserUnitOfWorkRepositoryCommand.js';

interface IUserUnitOfWork {
    addUser(request: AddUserUnitOfWorkRepositoryCommand): Promise<User>;
    deleteUser(request: DeleteUserUnitOfWorkRepositoryCommand): Promise<User>;
}

export { IUserUnitOfWork };
