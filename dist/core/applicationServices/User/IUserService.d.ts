import { RemoveUserCommand } from './requests/command/RemoveUserCommand.js';
import { FetchUserQuery } from './requests/query/FetchUserQuery.js';
import { User } from '../../domain/User/User.js';

interface IUserService {
    removeUser(command: RemoveUserCommand): Promise<User>;
    fetchUser(query: FetchUserQuery): Promise<User>;
    fetchUsers(): Promise<User[]>;
}

export { IUserService };
