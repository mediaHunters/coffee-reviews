import { Role } from '../../domain/Role/Role.js';
import { FindRoleByNameRepositoryQuery } from './requests/repository/query/FindRoleByNameRepositoryQuery.js';
import { FindRoleRepositoryQuery } from './requests/repository/query/FindRoleRepositoryQuery.js';

interface IRoleRepository {
    findRole(request: FindRoleRepositoryQuery): Promise<Role>;
    findRoleByName(request: FindRoleByNameRepositoryQuery): Promise<Role>;
}

export { IRoleRepository };
