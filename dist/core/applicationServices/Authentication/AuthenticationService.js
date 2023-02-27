"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthenticationService", {
    enumerable: true,
    get: ()=>AuthenticationService
});
const _inversify = require("inversify");
const _bcrypt = require("bcrypt");
const _coreModuleSymbols = require("../../CoreModuleSymbols");
const _iuserUnitOfWork = require("../../domainServices/User/IUserUnitOfWork");
const _addUserUnitOfWorkRepositoryCommand = require("../../domainServices/User/request/UnitOfWorkRepository/command/AddUserUnitOfWorkRepositoryCommand");
const _iuserRepository = require("../../domainServices/User/IUserRepository");
const _findUserByEmailRepositoryQuery = require("../../domainServices/User/request/Repository/query/FindUserByEmailRepositoryQuery");
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
let AuthenticationService = class AuthenticationService {
    constructor(userUnitOfWork, userRepository){
        this.userUnitOfWork = userUnitOfWork;
        this.userRepository = userRepository;
    }
    signUp({ nickname , email , password  }) {
        return this.userUnitOfWork.addUser(new _addUserUnitOfWorkRepositoryCommand.AddUserUnitOfWorkRepositoryCommand(email, password, nickname));
    }
    async verifyCredentials({ email , password  }) {
        const user = await this.userRepository.findUserByEmail(new _findUserByEmailRepositoryQuery.FindUserByEmailRepositoryQuery(email));
        if (!user || !await (0, _bcrypt.compare)(password, user?.password || '')) {
            return undefined;
        }
        return user;
    }
};
AuthenticationService = __decorate([
    (0, _inversify.injectable)(),
    __param(0, (0, _inversify.inject)(_coreModuleSymbols.DOMAIN_UNIT_OF_WORK_IDENTIFIERS.USER_UNIT_OF_WORK)),
    __param(1, (0, _inversify.inject)(_coreModuleSymbols.DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _iuserUnitOfWork.IUserUnitOfWork === "undefined" ? Object : _iuserUnitOfWork.IUserUnitOfWork,
        typeof _iuserRepository.IUserRepository === "undefined" ? Object : _iuserRepository.IUserRepository
    ])
], AuthenticationService);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvQXV0aGVudGljYXRpb24vQXV0aGVudGljYXRpb25TZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgaW5qZWN0YWJsZSB9IGZyb20gJ2ludmVyc2lmeSc7XG5cbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tICdiY3J5cHQnO1xuXG5pbXBvcnQge1xuICBET01BSU5fUkVQT1NJVE9SWV9JREVOVElGSUVSUyxcbiAgRE9NQUlOX1VOSVRfT0ZfV09SS19JREVOVElGSUVSUyxcbn0gZnJvbSAnY29yZS9Db3JlTW9kdWxlU3ltYm9scyc7XG5cbmltcG9ydCB7IElBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICdjb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvQXV0aGVudGljYXRpb24vSUF1dGhlbnRpY2F0aW9uU2VydmljZSc7XG5pbXBvcnQgeyBJVXNlclVuaXRPZldvcmsgfSBmcm9tICdjb3JlL2RvbWFpblNlcnZpY2VzL1VzZXIvSVVzZXJVbml0T2ZXb3JrJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdjb3JlL2RvbWFpbi9Vc2VyL1VzZXInO1xuaW1wb3J0IHsgQWRkVXNlclVuaXRPZldvcmtSZXBvc2l0b3J5Q29tbWFuZCB9IGZyb20gJ2NvcmUvZG9tYWluU2VydmljZXMvVXNlci9yZXF1ZXN0L1VuaXRPZldvcmtSZXBvc2l0b3J5L2NvbW1hbmQvQWRkVXNlclVuaXRPZldvcmtSZXBvc2l0b3J5Q29tbWFuZCc7XG5pbXBvcnQgeyBTaWduVXBDb21tYW5kIH0gZnJvbSAnY29yZS9hcHBsaWNhdGlvblNlcnZpY2VzL0F1dGhlbnRpY2F0aW9uL3JlcXVlc3RzL3JlcG9zaXRvcnkvY29tbWFuZC9TaWduVXBDb21tYW5kJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25RdWVyeSB9IGZyb20gJ2NvcmUvYXBwbGljYXRpb25TZXJ2aWNlcy9BdXRoZW50aWNhdGlvbi9yZXF1ZXN0cy9oYW5kbGVyL3F1ZXJ5L0F1dGhlbnRpY2F0aW9uUXVlcnknO1xuaW1wb3J0IHsgSVVzZXJSZXBvc2l0b3J5IH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Vc2VyL0lVc2VyUmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBGaW5kVXNlckJ5RW1haWxSZXBvc2l0b3J5UXVlcnkgfSBmcm9tICdjb3JlL2RvbWFpblNlcnZpY2VzL1VzZXIvcmVxdWVzdC9SZXBvc2l0b3J5L3F1ZXJ5L0ZpbmRVc2VyQnlFbWFpbFJlcG9zaXRvcnlRdWVyeSc7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblNlcnZpY2UgaW1wbGVtZW50cyBJQXV0aGVudGljYXRpb25TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQGluamVjdChET01BSU5fVU5JVF9PRl9XT1JLX0lERU5USUZJRVJTLlVTRVJfVU5JVF9PRl9XT1JLKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgdXNlclVuaXRPZldvcms6IElVc2VyVW5pdE9mV29yayxcbiAgICBAaW5qZWN0KERPTUFJTl9SRVBPU0lUT1JZX0lERU5USUZJRVJTLlVTRVJfUkVQT1NJVE9SWSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IHVzZXJSZXBvc2l0b3J5OiBJVXNlclJlcG9zaXRvcnlcbiAgKSB7fVxuXG4gIHNpZ25VcCh7IG5pY2tuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfTogU2lnblVwQ29tbWFuZCk6IFByb21pc2U8VXNlcj4ge1xuICAgIHJldHVybiB0aGlzLnVzZXJVbml0T2ZXb3JrLmFkZFVzZXIoXG4gICAgICBuZXcgQWRkVXNlclVuaXRPZldvcmtSZXBvc2l0b3J5Q29tbWFuZChlbWFpbCwgcGFzc3dvcmQsIG5pY2tuYW1lKVxuICAgICk7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlDcmVkZW50aWFscyh7XG4gICAgZW1haWwsXG4gICAgcGFzc3dvcmQsXG4gIH06IEF1dGhlbnRpY2F0aW9uUXVlcnkpOiBQcm9taXNlPFVzZXIgfCB1bmRlZmluZWQ+IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy51c2VyUmVwb3NpdG9yeS5maW5kVXNlckJ5RW1haWwoXG4gICAgICBuZXcgRmluZFVzZXJCeUVtYWlsUmVwb3NpdG9yeVF1ZXJ5KGVtYWlsKVxuICAgICk7XG5cbiAgICBpZiAoIXVzZXIgfHwgIShhd2FpdCBjb21wYXJlKHBhc3N3b3JkLCB1c2VyPy5wYXNzd29yZCB8fCAnJykpKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiB1c2VyO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQXV0aGVudGljYXRpb25TZXJ2aWNlIiwiY29uc3RydWN0b3IiLCJ1c2VyVW5pdE9mV29yayIsInVzZXJSZXBvc2l0b3J5Iiwic2lnblVwIiwibmlja25hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYWRkVXNlciIsIkFkZFVzZXJVbml0T2ZXb3JrUmVwb3NpdG9yeUNvbW1hbmQiLCJ2ZXJpZnlDcmVkZW50aWFscyIsInVzZXIiLCJmaW5kVXNlckJ5RW1haWwiLCJGaW5kVXNlckJ5RW1haWxSZXBvc2l0b3J5UXVlcnkiLCJjb21wYXJlIiwidW5kZWZpbmVkIiwiaW5qZWN0YWJsZSIsImluamVjdCIsIkRPTUFJTl9VTklUX09GX1dPUktfSURFTlRJRklFUlMiLCJVU0VSX1VOSVRfT0ZfV09SSyIsIkRPTUFJTl9SRVBPU0lUT1JZX0lERU5USUZJRVJTIiwiVVNFUl9SRVBPU0lUT1JZIl0sIm1hcHBpbmdzIjoiOzs7OytCQW9CYUE7O2FBQUFBOzsyQkFwQnNCO3dCQUVYO21DQUtqQjtpQ0FHeUI7b0RBRW1CO2lDQUluQjtnREFDZTs7Ozs7Ozs7Ozs7Ozs7O0lBR2xDQSx3QkFBTjtJQUNMQyxZQUVtQkMsZ0JBRUFDLGVBQ2pCOzhCQUhpQkQ7OEJBRUFDO0lBQ2hCO0lBRUhDLE9BQU8sRUFBRUMsU0FBUSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBaUIsRUFBaUI7UUFDbEUsT0FBTyxJQUFJLENBQUNMLGNBQWMsQ0FBQ00sT0FBTyxDQUNoQyxJQUFJQyxzRUFBa0MsQ0FBQ0gsT0FBT0MsVUFBVUY7SUFFNUQ7SUFFQSxNQUFNSyxrQkFBa0IsRUFDdEJKLE1BQUssRUFDTEMsU0FBUSxFQUNZLEVBQTZCO1FBQ2pELE1BQU1JLE9BQU8sTUFBTSxJQUFJLENBQUNSLGNBQWMsQ0FBQ1MsZUFBZSxDQUNwRCxJQUFJQyw4REFBOEIsQ0FBQ1A7UUFHckMsSUFBSSxDQUFDSyxRQUFRLENBQUUsTUFBTUcsSUFBQUEsZUFBTyxFQUFDUCxVQUFVSSxNQUFNSixZQUFZLEtBQU07WUFDN0QsT0FBT1E7UUFDVCxDQUFDO1FBRUQsT0FBT0o7SUFDVDtBQUNGO0FBNUJhWDtJQURaZ0IsSUFBQUEscUJBQVU7SUFHTkMsV0FBQUEsSUFBQUEsaUJBQU0sRUFBQ0Msa0RBQStCLENBQUNDLGlCQUFpQjtJQUV4REYsV0FBQUEsSUFBQUEsaUJBQU0sRUFBQ0csZ0RBQTZCLENBQUNDLGVBQWU7OztlQURwQixnQ0FBZSw0QkFBZixnQ0FBZTtlQUVmLGdDQUFlLDRCQUFmLGdDQUFlOztHQUx2Q3JCIn0=