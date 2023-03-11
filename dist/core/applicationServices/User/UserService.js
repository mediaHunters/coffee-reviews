"use strict";
<<<<<<< HEAD
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);

// src/core/applicationServices/User/UserService.ts
var UserService_exports = {};
__export(UserService_exports, {
  UserService: () => UserService
});
module.exports = __toCommonJS(UserService_exports);
var import_inversify = require("inversify");

// src/core/domainServices/User/request/Repository/query/GetUserRepositoryQuery.ts
var GetUserRepositoryQuery = class {
  constructor(id) {
    this.id = id;
  }
};

// src/core/domainServices/User/request/Repository/query/GetUsersRepositoryQuery.ts
var GetUsersRepositoryQuery = class {
};

// src/core/CoreModuleSymbols.ts
var DOMAIN_APPLICATION_SERVICE_IDENTIFIERS = {
  USER_SERVICE: Symbol.for("UserService"),
  AUTHENTICATION_SERVICE: Symbol.for("AuthenticationService"),
  COFFEE_SERVICE: Symbol.for("CoffeeService"),
  REVIEW_SERVICE: Symbol.for("ReviewService")
};
var DOMAIN_MAPPING_IDENTIFIERS = {
  USER_DOMAIN: Symbol.for("UserDomain"),
  ROLE_DOMAIN: Symbol.for("RoleDomain"),
  COFFEE_DOMAIN: Symbol.for("CoffeeDomain"),
  REVIEW_DOMAIN: Symbol.for("ReviewDomain")
};
var DOMAIN_REPOSITORY_IDENTIFIERS = {
  ROLE_REPOSITORY: Symbol.for("RoleRepository"),
  USER_REPOSITORY: Symbol.for("UserRepository"),
  COFFEE_REPOSITORY: Symbol.for("CoffeeRepository"),
  REVIEW_REPOSITORY: Symbol.for("ReviewRepository")
};
var DOMAIN_UNIT_OF_WORK_IDENTIFIERS = {
  USER_UNIT_OF_WORK: Symbol.for("UserUnitOfWork"),
  COFFEE_UNIT_OF_WORK: Symbol.for("CoffeeUnitOfWork")
};

// src/core/domainServices/User/request/UnitOfWorkRepository/command/DeleteUserUnitOfWorkRepositoryCommand.ts
var DeleteUserUnitOfWorkRepositoryCommand = class {
  constructor(id) {
    this.id = id;
  }
};

// src/core/applicationServices/User/UserService.ts
var UserService = class {
  constructor(userRepository, userUnitOfWork) {
    this.userRepository = userRepository;
    this.userUnitOfWork = userUnitOfWork;
  }
  removeUser({ id }) {
    return this.userUnitOfWork.deleteUser(
      new DeleteUserUnitOfWorkRepositoryCommand(id)
    );
  }
  fetchUser({ id }) {
    return this.userRepository.getUser(new GetUserRepositoryQuery(id));
  }
  fetchUsers() {
    return this.userRepository.getUsers(new GetUsersRepositoryQuery());
  }
};
UserService = __decorateClass([
  (0, import_inversify.injectable)(),
  __decorateParam(0, (0, import_inversify.inject)(DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY)),
  __decorateParam(1, (0, import_inversify.inject)(DOMAIN_UNIT_OF_WORK_IDENTIFIERS.USER_UNIT_OF_WORK))
], UserService);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserService
});
//# sourceMappingURL=UserService.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserService", {
    enumerable: true,
    get: ()=>UserService
});
const _inversify = require("inversify");
const _getUserRepositoryQuery = require("../../domainServices/User/request/Repository/query/GetUserRepositoryQuery");
const _iuserRepository = require("../../domainServices/User/IUserRepository");
const _getUsersRepositoryQuery = require("../../domainServices/User/request/Repository/query/GetUsersRepositoryQuery");
const _coreModuleSymbols = require("../../CoreModuleSymbols");
const _iuserUnitOfWork = require("../../domainServices/User/IUserUnitOfWork");
const _deleteUserUnitOfWorkRepositoryCommand = require("../../domainServices/User/request/UnitOfWorkRepository/command/DeleteUserUnitOfWorkRepositoryCommand");
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
let UserService = class UserService {
    constructor(userRepository, userUnitOfWork){
        this.userRepository = userRepository;
        this.userUnitOfWork = userUnitOfWork;
    }
    removeUser({ id  }) {
        return this.userUnitOfWork.deleteUser(new _deleteUserUnitOfWorkRepositoryCommand.DeleteUserUnitOfWorkRepositoryCommand(id));
    }
    fetchUser({ id  }) {
        return this.userRepository.getUser(new _getUserRepositoryQuery.GetUserRepositoryQuery(id));
    }
    fetchUsers() {
        return this.userRepository.getUsers(new _getUsersRepositoryQuery.GetUsersRepositoryQuery());
    }
};
UserService = __decorate([
    (0, _inversify.injectable)(),
    __param(0, (0, _inversify.inject)(_coreModuleSymbols.DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY)),
    __param(1, (0, _inversify.inject)(_coreModuleSymbols.DOMAIN_UNIT_OF_WORK_IDENTIFIERS.USER_UNIT_OF_WORK)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _iuserRepository.IUserRepository === "undefined" ? Object : _iuserRepository.IUserRepository,
        typeof _iuserUnitOfWork.IUserUnitOfWork === "undefined" ? Object : _iuserUnitOfWork.IUserUnitOfWork
    ])
], UserService);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvVXNlci9Vc2VyU2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QsIGluamVjdGFibGUgfSBmcm9tICdpbnZlcnNpZnknO1xuXG5pbXBvcnQgeyBHZXRVc2VyUmVwb3NpdG9yeVF1ZXJ5IH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Vc2VyL3JlcXVlc3QvUmVwb3NpdG9yeS9xdWVyeS9HZXRVc2VyUmVwb3NpdG9yeVF1ZXJ5JztcbmltcG9ydCB7IElVc2VyU2VydmljZSB9IGZyb20gJ2NvcmUvYXBwbGljYXRpb25TZXJ2aWNlcy9Vc2VyL0lVc2VyU2VydmljZSc7XG5pbXBvcnQgeyBGZXRjaFVzZXJRdWVyeSB9IGZyb20gJ2NvcmUvYXBwbGljYXRpb25TZXJ2aWNlcy9Vc2VyL3JlcXVlc3RzL3F1ZXJ5L0ZldGNoVXNlclF1ZXJ5JztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdjb3JlL2RvbWFpbi9Vc2VyL1VzZXInO1xuaW1wb3J0IHsgSVVzZXJSZXBvc2l0b3J5IH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Vc2VyL0lVc2VyUmVwb3NpdG9yeSc7XG5cbmltcG9ydCB7IEdldFVzZXJzUmVwb3NpdG9yeVF1ZXJ5IH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Vc2VyL3JlcXVlc3QvUmVwb3NpdG9yeS9xdWVyeS9HZXRVc2Vyc1JlcG9zaXRvcnlRdWVyeSc7XG5pbXBvcnQge1xuICBET01BSU5fUkVQT1NJVE9SWV9JREVOVElGSUVSUyxcbiAgRE9NQUlOX1VOSVRfT0ZfV09SS19JREVOVElGSUVSUyxcbn0gZnJvbSAnY29yZS9Db3JlTW9kdWxlU3ltYm9scyc7XG5pbXBvcnQgeyBSZW1vdmVVc2VyQ29tbWFuZCB9IGZyb20gJ2NvcmUvYXBwbGljYXRpb25TZXJ2aWNlcy9Vc2VyL3JlcXVlc3RzL2NvbW1hbmQvUmVtb3ZlVXNlckNvbW1hbmQnO1xuaW1wb3J0IHsgSVVzZXJVbml0T2ZXb3JrIH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Vc2VyL0lVc2VyVW5pdE9mV29yayc7XG5pbXBvcnQgeyBEZWxldGVVc2VyVW5pdE9mV29ya1JlcG9zaXRvcnlDb21tYW5kIH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Vc2VyL3JlcXVlc3QvVW5pdE9mV29ya1JlcG9zaXRvcnkvY29tbWFuZC9EZWxldGVVc2VyVW5pdE9mV29ya1JlcG9zaXRvcnlDb21tYW5kJztcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIGltcGxlbWVudHMgSVVzZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQGluamVjdChET01BSU5fUkVQT1NJVE9SWV9JREVOVElGSUVSUy5VU0VSX1JFUE9TSVRPUlkpXG4gICAgcHJpdmF0ZSByZWFkb25seSB1c2VyUmVwb3NpdG9yeTogSVVzZXJSZXBvc2l0b3J5LFxuICAgIEBpbmplY3QoRE9NQUlOX1VOSVRfT0ZfV09SS19JREVOVElGSUVSUy5VU0VSX1VOSVRfT0ZfV09SSylcbiAgICBwcml2YXRlIHJlYWRvbmx5IHVzZXJVbml0T2ZXb3JrOiBJVXNlclVuaXRPZldvcmtcbiAgKSB7fVxuXG4gIHJlbW92ZVVzZXIoeyBpZCB9OiBSZW1vdmVVc2VyQ29tbWFuZCk6IFByb21pc2U8VXNlcj4ge1xuICAgIHJldHVybiB0aGlzLnVzZXJVbml0T2ZXb3JrLmRlbGV0ZVVzZXIoXG4gICAgICBuZXcgRGVsZXRlVXNlclVuaXRPZldvcmtSZXBvc2l0b3J5Q29tbWFuZChpZClcbiAgICApO1xuICB9XG5cbiAgZmV0Y2hVc2VyKHsgaWQgfTogRmV0Y2hVc2VyUXVlcnkpOiBQcm9taXNlPFVzZXI+IHtcbiAgICByZXR1cm4gdGhpcy51c2VyUmVwb3NpdG9yeS5nZXRVc2VyKG5ldyBHZXRVc2VyUmVwb3NpdG9yeVF1ZXJ5KGlkKSk7XG4gIH1cblxuICBmZXRjaFVzZXJzKCk6IFByb21pc2U8VXNlcltdPiB7XG4gICAgcmV0dXJuIHRoaXMudXNlclJlcG9zaXRvcnkuZ2V0VXNlcnMobmV3IEdldFVzZXJzUmVwb3NpdG9yeVF1ZXJ5KCkpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVXNlclNlcnZpY2UiLCJjb25zdHJ1Y3RvciIsInVzZXJSZXBvc2l0b3J5IiwidXNlclVuaXRPZldvcmsiLCJyZW1vdmVVc2VyIiwiaWQiLCJkZWxldGVVc2VyIiwiRGVsZXRlVXNlclVuaXRPZldvcmtSZXBvc2l0b3J5Q29tbWFuZCIsImZldGNoVXNlciIsImdldFVzZXIiLCJHZXRVc2VyUmVwb3NpdG9yeVF1ZXJ5IiwiZmV0Y2hVc2VycyIsImdldFVzZXJzIiwiR2V0VXNlcnNSZXBvc2l0b3J5UXVlcnkiLCJpbmplY3RhYmxlIiwiaW5qZWN0IiwiRE9NQUlOX1JFUE9TSVRPUllfSURFTlRJRklFUlMiLCJVU0VSX1JFUE9TSVRPUlkiLCJET01BSU5fVU5JVF9PRl9XT1JLX0lERU5USUZJRVJTIiwiVVNFUl9VTklUX09GX1dPUksiXSwibWFwcGluZ3MiOiI7Ozs7K0JBa0JhQTs7YUFBQUE7OzJCQWxCc0I7d0NBRUk7aUNBSVA7eUNBRVE7bUNBSWpDO2lDQUV5Qjt1REFDc0I7Ozs7Ozs7Ozs7Ozs7OztJQUd6Q0EsY0FBTjtJQUNMQyxZQUVtQkMsZ0JBRUFDLGVBQ2pCOzhCQUhpQkQ7OEJBRUFDO0lBQ2hCO0lBRUhDLFdBQVcsRUFBRUMsR0FBRSxFQUFxQixFQUFpQjtRQUNuRCxPQUFPLElBQUksQ0FBQ0YsY0FBYyxDQUFDRyxVQUFVLENBQ25DLElBQUlDLDRFQUFxQyxDQUFDRjtJQUU5QztJQUVBRyxVQUFVLEVBQUVILEdBQUUsRUFBa0IsRUFBaUI7UUFDL0MsT0FBTyxJQUFJLENBQUNILGNBQWMsQ0FBQ08sT0FBTyxDQUFDLElBQUlDLDhDQUFzQixDQUFDTDtJQUNoRTtJQUVBTSxhQUE4QjtRQUM1QixPQUFPLElBQUksQ0FBQ1QsY0FBYyxDQUFDVSxRQUFRLENBQUMsSUFBSUMsZ0RBQXVCO0lBQ2pFO0FBQ0Y7QUFyQmFiO0lBRFpjLElBQUFBLHFCQUFVO0lBR05DLFdBQUFBLElBQUFBLGlCQUFNLEVBQUNDLGdEQUE2QixDQUFDQyxlQUFlO0lBRXBERixXQUFBQSxJQUFBQSxpQkFBTSxFQUFDRyxrREFBK0IsQ0FBQ0MsaUJBQWlCOzs7ZUFEeEIsZ0NBQWUsNEJBQWYsZ0NBQWU7ZUFFZixnQ0FBZSw0QkFBZixnQ0FBZTs7R0FMdkNuQiJ9
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6
