import { IUserRepository } from '../../../../core/domainServices/User/IUserRepository.js';
import { DBMapper } from '../../mappings/DBMapper.js';
import { User as User$1 } from '../../../../core/domain/User/User.js';
import { U as User } from '../../../../Coffee-5b23241d.js';
import { AddUserRepositoryCommand } from '../../../../core/domainServices/User/request/Repository/command/AddUserRepositoryCommand.js';
import { Repository } from '../common/Repository.js';
import { FindUserByEmailRepositoryQuery } from '../../../../core/domainServices/User/request/Repository/query/FindUserByEmailRepositoryQuery.js';
import { GetUserRepositoryQuery } from '../../../../core/domainServices/User/request/Repository/query/GetUserRepositoryQuery.js';
import { DeleteUserUnitOfWorkRepositoryCommand } from '../../../../core/domainServices/User/request/UnitOfWorkRepository/command/DeleteUserUnitOfWorkRepositoryCommand.js';
import { CheckIfUserAlreadyExistsRepositoryQuery } from '../../../../core/domainServices/User/request/Repository/query/CheckIfUserAlreadyExistsRepositoryQuery.js';
import '../../../../core/domainServices/User/request/Repository/query/GetUsersRepositoryQuery.js';
import '@wufe/mapper';
import '../../entities/Base.js';
import 'typeorm';
import 'typeorm/common/ObjectType';
import 'typeorm/repository/Repository';
import '../common/IRepository.js';
import '../common/Query.js';
import '../common/UpdateQueryData.js';

declare class UserRepository extends Repository<User> implements IUserRepository {
    private readonly dbMapper;
    constructor(dbMapper: DBMapper);
    addUser({ nickname, email, password, roleId, }: AddUserRepositoryCommand): Promise<User$1>;
    removeUser({ id, }: DeleteUserUnitOfWorkRepositoryCommand): Promise<User$1>;
    findUserByEmail({ email, }: FindUserByEmailRepositoryQuery): Promise<User$1>;
    getUser({ id }: GetUserRepositoryQuery): Promise<User$1>;
    getUsers(): Promise<User$1[]>;
    checkIfUserAlreadyExists({ nickname, email, }: CheckIfUserAlreadyExistsRepositoryQuery): Promise<User$1[]>;
}

export { UserRepository };
