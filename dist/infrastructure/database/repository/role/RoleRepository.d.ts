import { FindRoleRepositoryQuery } from '../../../../core/domainServices/Role/requests/repository/query/FindRoleRepositoryQuery.js';
import { IRoleRepository } from '../../../../core/domainServices/Role/IRoleRepository.js';
import { Role as Role$1 } from '../../../../core/domain/Role/Role.js';
import { a as Role } from '../../../../Coffee-5b23241d.js';
import { Repository } from '../common/Repository.js';
import { FindRoleByNameRepositoryQuery } from '../../../../core/domainServices/Role/requests/repository/query/FindRoleByNameRepositoryQuery.js';
import { DBMapper } from '../../mappings/DBMapper.js';
import '../../entities/Base.js';
import 'typeorm';
import 'typeorm/common/ObjectType';
import 'typeorm/repository/Repository';
import '../common/IRepository.js';
import '../common/Query.js';
import '../common/UpdateQueryData.js';
import '@wufe/mapper';

declare class RoleRepository extends Repository<Role> implements IRoleRepository {
    private readonly dbMapper;
    constructor(dbMapper: DBMapper);
    findRole({ id }: FindRoleRepositoryQuery): Promise<Role$1>;
    findRoleByName({ name }: FindRoleByNameRepositoryQuery): Promise<Role$1>;
}

export { RoleRepository };
