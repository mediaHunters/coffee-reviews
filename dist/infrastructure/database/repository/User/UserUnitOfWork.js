"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserUnitOfWork", {
    enumerable: true,
    get: ()=>UserUnitOfWork
});
const _inversify = require("inversify");
const _coreModuleSymbols = require("../../../../core/CoreModuleSymbols");
const _iuserRepository = require("../../../../core/domainServices/User/IUserRepository");
const _findRoleByNameRepositoryQuery = require("../../../../core/domainServices/Role/requests/repository/query/FindRoleByNameRepositoryQuery");
const _addUserRepositoryCommand = require("../../../../core/domainServices/User/request/Repository/command/AddUserRepositoryCommand");
const _iroleRepository = require("../../../../core/domainServices/Role/IRoleRepository");
const _userRole = require("../../enum/UserRole");
const _checkIfUserAlreadyExistsRepositoryQuery = require("../../../../core/domainServices/User/request/Repository/query/CheckIfUserAlreadyExistsRepositoryQuery");
const _baseError = require("../../../../core/common/errors/BaseError");
const _infrastructureErrors = require("../../../common/errors/InfrastructureErrors");
var __decorate = (void 0) && (void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (void 0) && (void 0).__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (void 0) && (void 0).__param || function(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
};
let UserUnitOfWork = class UserUnitOfWork {
    constructor(userRepository, roleRepository){
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }
    async addUser({ email , password , nickname  }) {
        const checkIfUserExist = await this.userRepository.checkIfUserAlreadyExists(new _checkIfUserAlreadyExistsRepositoryQuery.CheckIfUserAlreadyExistsRepositoryQuery(nickname, email));
        if (checkIfUserExist.length > 0) {
            throw new _baseError.BaseError(_infrastructureErrors.InfrastructureErrors[_infrastructureErrors.InfrastructureErrors.USER_ALREADY_EXIST]);
        }
        const { id  } = await this.roleRepository.findRoleByName(new _findRoleByNameRepositoryQuery.FindRoleByNameRepositoryQuery(_userRole.USER_ROLE.ADMIN));
        return this.userRepository.addUser(new _addUserRepositoryCommand.AddUserRepositoryCommand(nickname, email, password, id));
    }
    deleteUser(command) {
        return this.userRepository.removeUser(command);
    }
};
UserUnitOfWork = __decorate([
    (0, _inversify.injectable)(),
    __param(0, (0, _inversify.inject)(_coreModuleSymbols.DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY)),
    __param(1, (0, _inversify.inject)(_coreModuleSymbols.DOMAIN_REPOSITORY_IDENTIFIERS.ROLE_REPOSITORY)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _iuserRepository.IUserRepository === "undefined" ? Object : _iuserRepository.IUserRepository,
        typeof _iroleRepository.IRoleRepository === "undefined" ? Object : _iroleRepository.IRoleRepository
    ])
], UserUnitOfWork);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9yZXBvc2l0b3J5L1VzZXIvVXNlclVuaXRPZldvcmsudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBpbmplY3RhYmxlIH0gZnJvbSAnaW52ZXJzaWZ5JztcblxuaW1wb3J0IHsgRE9NQUlOX1JFUE9TSVRPUllfSURFTlRJRklFUlMgfSBmcm9tICdjb3JlL0NvcmVNb2R1bGVTeW1ib2xzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdjb3JlL2RvbWFpbi9Vc2VyL1VzZXInO1xuaW1wb3J0IHsgSVVzZXJSZXBvc2l0b3J5IH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Vc2VyL0lVc2VyUmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBJVXNlclVuaXRPZldvcmsgfSBmcm9tICdjb3JlL2RvbWFpblNlcnZpY2VzL1VzZXIvSVVzZXJVbml0T2ZXb3JrJztcbmltcG9ydCB7IEFkZFVzZXJVbml0T2ZXb3JrUmVwb3NpdG9yeUNvbW1hbmQgfSBmcm9tICdjb3JlL2RvbWFpblNlcnZpY2VzL1VzZXIvcmVxdWVzdC9Vbml0T2ZXb3JrUmVwb3NpdG9yeS9jb21tYW5kL0FkZFVzZXJVbml0T2ZXb3JrUmVwb3NpdG9yeUNvbW1hbmQnO1xuaW1wb3J0IHsgRGVsZXRlVXNlclVuaXRPZldvcmtSZXBvc2l0b3J5Q29tbWFuZCB9IGZyb20gJ2NvcmUvZG9tYWluU2VydmljZXMvVXNlci9yZXF1ZXN0L1VuaXRPZldvcmtSZXBvc2l0b3J5L2NvbW1hbmQvRGVsZXRlVXNlclVuaXRPZldvcmtSZXBvc2l0b3J5Q29tbWFuZCc7XG5pbXBvcnQgeyBGaW5kUm9sZUJ5TmFtZVJlcG9zaXRvcnlRdWVyeSB9IGZyb20gJ2NvcmUvZG9tYWluU2VydmljZXMvUm9sZS9yZXF1ZXN0cy9yZXBvc2l0b3J5L3F1ZXJ5L0ZpbmRSb2xlQnlOYW1lUmVwb3NpdG9yeVF1ZXJ5JztcbmltcG9ydCB7IEFkZFVzZXJSZXBvc2l0b3J5Q29tbWFuZCB9IGZyb20gJ2NvcmUvZG9tYWluU2VydmljZXMvVXNlci9yZXF1ZXN0L1JlcG9zaXRvcnkvY29tbWFuZC9BZGRVc2VyUmVwb3NpdG9yeUNvbW1hbmQnO1xuaW1wb3J0IHsgSVJvbGVSZXBvc2l0b3J5IH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Sb2xlL0lSb2xlUmVwb3NpdG9yeSc7XG5cbmltcG9ydCB7IFVTRVJfUk9MRSB9IGZyb20gJ2luZnJhc3RydWN0dXJlL2RhdGFiYXNlL2VudW0vVXNlclJvbGUnO1xuaW1wb3J0IHsgQ2hlY2tJZlVzZXJBbHJlYWR5RXhpc3RzUmVwb3NpdG9yeVF1ZXJ5IH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Vc2VyL3JlcXVlc3QvUmVwb3NpdG9yeS9xdWVyeS9DaGVja0lmVXNlckFscmVhZHlFeGlzdHNSZXBvc2l0b3J5UXVlcnknO1xuaW1wb3J0IHsgQmFzZUVycm9yIH0gZnJvbSAnY29yZS9jb21tb24vZXJyb3JzL0Jhc2VFcnJvcic7XG5pbXBvcnQgeyBJbmZyYXN0cnVjdHVyZUVycm9ycyB9IGZyb20gJ2luZnJhc3RydWN0dXJlL2NvbW1vbi9lcnJvcnMvSW5mcmFzdHJ1Y3R1cmVFcnJvcnMnO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclVuaXRPZldvcmsgaW1wbGVtZW50cyBJVXNlclVuaXRPZldvcmsge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KERPTUFJTl9SRVBPU0lUT1JZX0lERU5USUZJRVJTLlVTRVJfUkVQT1NJVE9SWSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IHVzZXJSZXBvc2l0b3J5OiBJVXNlclJlcG9zaXRvcnksXG4gICAgQGluamVjdChET01BSU5fUkVQT1NJVE9SWV9JREVOVElGSUVSUy5ST0xFX1JFUE9TSVRPUlkpXG4gICAgcHJpdmF0ZSByZWFkb25seSByb2xlUmVwb3NpdG9yeTogSVJvbGVSZXBvc2l0b3J5XG4gICkge31cblxuICBhc3luYyBhZGRVc2VyKHtcbiAgICBlbWFpbCxcbiAgICBwYXNzd29yZCxcbiAgICBuaWNrbmFtZSxcbiAgfTogQWRkVXNlclVuaXRPZldvcmtSZXBvc2l0b3J5Q29tbWFuZCk6IFByb21pc2U8VXNlcj4ge1xuICAgIGNvbnN0IGNoZWNrSWZVc2VyRXhpc3QgPSBhd2FpdCB0aGlzLnVzZXJSZXBvc2l0b3J5LmNoZWNrSWZVc2VyQWxyZWFkeUV4aXN0cyhcbiAgICAgIG5ldyBDaGVja0lmVXNlckFscmVhZHlFeGlzdHNSZXBvc2l0b3J5UXVlcnkobmlja25hbWUsIGVtYWlsKVxuICAgICk7XG5cbiAgICBpZiAoY2hlY2tJZlVzZXJFeGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgQmFzZUVycm9yKFxuICAgICAgICBJbmZyYXN0cnVjdHVyZUVycm9yc1tJbmZyYXN0cnVjdHVyZUVycm9ycy5VU0VSX0FMUkVBRFlfRVhJU1RdXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCB7IGlkIH0gPSBhd2FpdCB0aGlzLnJvbGVSZXBvc2l0b3J5LmZpbmRSb2xlQnlOYW1lKFxuICAgICAgbmV3IEZpbmRSb2xlQnlOYW1lUmVwb3NpdG9yeVF1ZXJ5KFVTRVJfUk9MRS5BRE1JTilcbiAgICApO1xuICAgIHJldHVybiB0aGlzLnVzZXJSZXBvc2l0b3J5LmFkZFVzZXIoXG4gICAgICBuZXcgQWRkVXNlclJlcG9zaXRvcnlDb21tYW5kKG5pY2tuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGlkKVxuICAgICk7XG4gIH1cblxuICBkZWxldGVVc2VyKGNvbW1hbmQ6IERlbGV0ZVVzZXJVbml0T2ZXb3JrUmVwb3NpdG9yeUNvbW1hbmQpOiBQcm9taXNlPFVzZXI+IHtcbiAgICByZXR1cm4gdGhpcy51c2VyUmVwb3NpdG9yeS5yZW1vdmVVc2VyKGNvbW1hbmQpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVXNlclVuaXRPZldvcmsiLCJjb25zdHJ1Y3RvciIsInVzZXJSZXBvc2l0b3J5Iiwicm9sZVJlcG9zaXRvcnkiLCJhZGRVc2VyIiwiZW1haWwiLCJwYXNzd29yZCIsIm5pY2tuYW1lIiwiY2hlY2tJZlVzZXJFeGlzdCIsImNoZWNrSWZVc2VyQWxyZWFkeUV4aXN0cyIsIkNoZWNrSWZVc2VyQWxyZWFkeUV4aXN0c1JlcG9zaXRvcnlRdWVyeSIsImxlbmd0aCIsIkJhc2VFcnJvciIsIkluZnJhc3RydWN0dXJlRXJyb3JzIiwiVVNFUl9BTFJFQURZX0VYSVNUIiwiaWQiLCJmaW5kUm9sZUJ5TmFtZSIsIkZpbmRSb2xlQnlOYW1lUmVwb3NpdG9yeVF1ZXJ5IiwiVVNFUl9ST0xFIiwiQURNSU4iLCJBZGRVc2VyUmVwb3NpdG9yeUNvbW1hbmQiLCJkZWxldGVVc2VyIiwiY29tbWFuZCIsInJlbW92ZVVzZXIiLCJpbmplY3RhYmxlIiwiaW5qZWN0IiwiRE9NQUlOX1JFUE9TSVRPUllfSURFTlRJRklFUlMiLCJVU0VSX1JFUE9TSVRPUlkiLCJST0xFX1JFUE9TSVRPUlkiXSwibWFwcGluZ3MiOiI7Ozs7K0JBa0JhQTs7YUFBQUE7OzJCQWxCc0I7bUNBRVc7aUNBRWQ7K0NBSWM7MENBQ0w7aUNBQ1Q7MEJBRU47eURBQzhCOzJCQUM5QjtzQ0FDVzs7Ozs7Ozs7Ozs7Ozs7O0lBR3hCQSxpQkFBTjtJQUNMQyxZQUVtQkMsZ0JBRUFDLGVBQ2pCOzhCQUhpQkQ7OEJBRUFDO0lBQ2hCO0lBRUgsTUFBTUMsUUFBUSxFQUNaQyxNQUFLLEVBQ0xDLFNBQVEsRUFDUkMsU0FBUSxFQUMyQixFQUFpQjtRQUNwRCxNQUFNQyxtQkFBbUIsTUFBTSxJQUFJLENBQUNOLGNBQWMsQ0FBQ08sd0JBQXdCLENBQ3pFLElBQUlDLGdGQUF1QyxDQUFDSCxVQUFVRjtRQUd4RCxJQUFJRyxpQkFBaUJHLE1BQU0sR0FBRyxHQUFHO1lBQy9CLE1BQU0sSUFBSUMsb0JBQVMsQ0FDakJDLDBDQUFvQixDQUFDQSwwQ0FBb0IsQ0FBQ0Msa0JBQWtCLENBQUMsRUFDN0Q7UUFDSixDQUFDO1FBQ0QsTUFBTSxFQUFFQyxHQUFFLEVBQUUsR0FBRyxNQUFNLElBQUksQ0FBQ1osY0FBYyxDQUFDYSxjQUFjLENBQ3JELElBQUlDLDREQUE2QixDQUFDQyxtQkFBUyxDQUFDQyxLQUFLO1FBRW5ELE9BQU8sSUFBSSxDQUFDakIsY0FBYyxDQUFDRSxPQUFPLENBQ2hDLElBQUlnQixrREFBd0IsQ0FBQ2IsVUFBVUYsT0FBT0MsVUFBVVM7SUFFNUQ7SUFFQU0sV0FBV0MsT0FBOEMsRUFBaUI7UUFDeEUsT0FBTyxJQUFJLENBQUNwQixjQUFjLENBQUNxQixVQUFVLENBQUNEO0lBQ3hDO0FBQ0Y7QUFqQ2F0QjtJQURad0IsSUFBQUEscUJBQVU7SUFHTkMsV0FBQUEsSUFBQUEsaUJBQU0sRUFBQ0MsZ0RBQTZCLENBQUNDLGVBQWU7SUFFcERGLFdBQUFBLElBQUFBLGlCQUFNLEVBQUNDLGdEQUE2QixDQUFDRSxlQUFlOzs7ZUFEcEIsZ0NBQWUsNEJBQWYsZ0NBQWU7ZUFFZixnQ0FBZSw0QkFBZixnQ0FBZTs7R0FMdkM1QiJ9