import { Role } from "core/domain/Role/Role";
import { FindRoleByNameRepositoryQuery } from "core/domainServices/Role/requests/UnitOfWork/query/FindRoleByNameRepositoryQuery";
import { FindRoleRepositoryQuery } from "core/domainServices/Role/requests/UnitOfWork/query/FindRoleRepositoryQuery";

export interface IRoleRepository {
  findRole(request: FindRoleRepositoryQuery): Promise<Role>;
  findRoleByName(request: FindRoleByNameRepositoryQuery): Promise<Role>;
}
