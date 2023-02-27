"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CoffeeUnitOfWork", {
    enumerable: true,
    get: ()=>CoffeeUnitOfWork
});
const _inversify = require("inversify");
const _coreModuleSymbols = require("../../../../core/CoreModuleSymbols");
const _icoffeeRepository = require("../../../../core/domainServices/Coffee/ICoffeeRepository");
const _deleteCoffeeRepositoryCommand = require("../../../../core/domainServices/Coffee/requests/repository/command/DeleteCoffeeRepositoryCommand");
const _iuserRepository = require("../../../../core/domainServices/User/IUserRepository");
const _createCoffeeRepositoryCommand = require("../../../../core/domainServices/Coffee/requests/repository/command/CreateCoffeeRepositoryCommand");
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
let CoffeeUnitOfWork = class CoffeeUnitOfWork {
    constructor(coffeeRepository, userRepository){
        this.coffeeRepository = coffeeRepository;
        this.userRepository = userRepository;
    }
    create({ brand , name , type , imgUrl , description , burntLvl , reflink , CoffeeStatus  }) {
        return this.coffeeRepository.createCoffee(new _createCoffeeRepositoryCommand.CreateCoffeeRepositoryCommand(brand, name, type, imgUrl, description, burntLvl, reflink, CoffeeStatus));
    }
    delete({ id  }) {
        return this.coffeeRepository.deleteCoffee(new _deleteCoffeeRepositoryCommand.DeleteCoffeeRepositoryCommand(id));
    }
};
CoffeeUnitOfWork = __decorate([
    (0, _inversify.injectable)(),
    __param(0, (0, _inversify.inject)(_coreModuleSymbols.DOMAIN_REPOSITORY_IDENTIFIERS.COFFEE_REPOSITORY)),
    __param(1, (0, _inversify.inject)(_coreModuleSymbols.DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _icoffeeRepository.ICoffeeRepository === "undefined" ? Object : _icoffeeRepository.ICoffeeRepository,
        typeof _iuserRepository.IUserRepository === "undefined" ? Object : _iuserRepository.IUserRepository
    ])
], CoffeeUnitOfWork);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9yZXBvc2l0b3J5L0NvZmZlZS9Db2ZmZWVVbml0T2ZXb3JrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgaW5qZWN0YWJsZSB9IGZyb20gJ2ludmVyc2lmeSc7XG5cbmltcG9ydCB7IERPTUFJTl9SRVBPU0lUT1JZX0lERU5USUZJRVJTIH0gZnJvbSAnY29yZS9Db3JlTW9kdWxlU3ltYm9scyc7XG5pbXBvcnQgeyBDb2ZmZWUgfSBmcm9tICdjb3JlL2RvbWFpbi9Db2ZmZWUvQ29mZmVlJztcbmltcG9ydCB7IElDb2ZmZWVVbml0T2ZXb3JrIH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Db2ZmZWUvSUNvZmZlZVVuaXRPZldvcmsnO1xuaW1wb3J0IHsgQ3JlYXRlQ29mZmVlVW5pdE9mV29ya1JlcG9zaXRvcnlDb21tYW5kIH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Db2ZmZWUvcmVxdWVzdHMvVW5pdE9mV29yay9jb21tYW5kL0FkZENvZmZlZVVuaXRPZldvcmtSZXBvc2l0b3J5Q29tbWFuZCc7XG5pbXBvcnQgeyBJQ29mZmVlUmVwb3NpdG9yeSB9IGZyb20gJ2NvcmUvZG9tYWluU2VydmljZXMvQ29mZmVlL0lDb2ZmZWVSZXBvc2l0b3J5JztcbmltcG9ydCB7IERlbGV0ZUNvZmZlZVJlcG9zaXRvcnlDb21tYW5kIH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Db2ZmZWUvcmVxdWVzdHMvcmVwb3NpdG9yeS9jb21tYW5kL0RlbGV0ZUNvZmZlZVJlcG9zaXRvcnlDb21tYW5kJztcbmltcG9ydCB7IElVc2VyUmVwb3NpdG9yeSB9IGZyb20gJ2NvcmUvZG9tYWluU2VydmljZXMvVXNlci9JVXNlclJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ3JlYXRlQ29mZmVlUmVwb3NpdG9yeUNvbW1hbmQgfSBmcm9tICdjb3JlL2RvbWFpblNlcnZpY2VzL0NvZmZlZS9yZXF1ZXN0cy9yZXBvc2l0b3J5L2NvbW1hbmQvQ3JlYXRlQ29mZmVlUmVwb3NpdG9yeUNvbW1hbmQnO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29mZmVlVW5pdE9mV29yayBpbXBsZW1lbnRzIElDb2ZmZWVVbml0T2ZXb3JrIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQGluamVjdChET01BSU5fUkVQT1NJVE9SWV9JREVOVElGSUVSUy5DT0ZGRUVfUkVQT1NJVE9SWSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvZmZlZVJlcG9zaXRvcnk6IElDb2ZmZWVSZXBvc2l0b3J5LFxuICAgIEBpbmplY3QoRE9NQUlOX1JFUE9TSVRPUllfSURFTlRJRklFUlMuVVNFUl9SRVBPU0lUT1JZKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgdXNlclJlcG9zaXRvcnk6IElVc2VyUmVwb3NpdG9yeVxuICApIHt9XG5cbiAgY3JlYXRlKHtcbiAgICBicmFuZCxcbiAgICBuYW1lLFxuICAgIHR5cGUsXG4gICAgaW1nVXJsLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGJ1cm50THZsLFxuICAgIHJlZmxpbmssXG4gICAgQ29mZmVlU3RhdHVzLFxuICB9OiBDcmVhdGVDb2ZmZWVVbml0T2ZXb3JrUmVwb3NpdG9yeUNvbW1hbmQpOiBQcm9taXNlPENvZmZlZT4ge1xuICAgIHJldHVybiB0aGlzLmNvZmZlZVJlcG9zaXRvcnkuY3JlYXRlQ29mZmVlKFxuICAgICAgbmV3IENyZWF0ZUNvZmZlZVJlcG9zaXRvcnlDb21tYW5kKFxuICAgICAgICBicmFuZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgaW1nVXJsLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgYnVybnRMdmwsXG4gICAgICAgIHJlZmxpbmssXG4gICAgICAgIENvZmZlZVN0YXR1c1xuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBkZWxldGUoeyBpZCB9OiBEZWxldGVDb2ZmZWVSZXBvc2l0b3J5Q29tbWFuZCk6IFByb21pc2U8Q29mZmVlPiB7XG4gICAgcmV0dXJuIHRoaXMuY29mZmVlUmVwb3NpdG9yeS5kZWxldGVDb2ZmZWUoXG4gICAgICBuZXcgRGVsZXRlQ29mZmVlUmVwb3NpdG9yeUNvbW1hbmQoaWQpXG4gICAgKTtcbiAgfVxuXG4gIC8vIEBUcmFuc2FjdGlvbmFsKHtcbiAgLy8gICBjb25uZWN0aW9uTmFtZTogKCkgPT4gcHJvY2Vzcy5lbnYuT1JNX0NPTk5FQ1RJT04sXG4gIC8vIH0pXG4gIC8vIGFzeW5jIGFkZENvZmZlZVJldmlldyh7XG4gIC8vICAgdXNlcklkLFxuICAvLyAgIGNvZmZlZUlkLFxuICAvLyAgIGxvb2ssXG4gIC8vICAgc21lbGwsXG4gIC8vICAgdGFzdGUsXG4gIC8vIH06IEFkZFJldmlld1JlcG9zaXRvcnlDb21tYW5kKTogUHJvbWlzZTxDb2ZmZWU+IHtcblxuICAvLyAgIHJldHVybiB0aGlzLmNvZmZlZVJlcG9zaXRvcnkuYWRkQ29mZmVlUmV2aWV3KFxuICAvLyAgICAgbmV3IEFkZFJldmlld1JlcG9zaXRvcnlDb21tYW5kKHVzZXJJZCwgY29mZmVlSWQsIGxvb2ssIHNtZWxsLCB0YXN0ZSlcbiAgLy8gICApO1xuICAvLyB9XG59XG4iXSwibmFtZXMiOlsiQ29mZmVlVW5pdE9mV29yayIsImNvbnN0cnVjdG9yIiwiY29mZmVlUmVwb3NpdG9yeSIsInVzZXJSZXBvc2l0b3J5IiwiY3JlYXRlIiwiYnJhbmQiLCJuYW1lIiwidHlwZSIsImltZ1VybCIsImRlc2NyaXB0aW9uIiwiYnVybnRMdmwiLCJyZWZsaW5rIiwiQ29mZmVlU3RhdHVzIiwiY3JlYXRlQ29mZmVlIiwiQ3JlYXRlQ29mZmVlUmVwb3NpdG9yeUNvbW1hbmQiLCJkZWxldGUiLCJpZCIsImRlbGV0ZUNvZmZlZSIsIkRlbGV0ZUNvZmZlZVJlcG9zaXRvcnlDb21tYW5kIiwiaW5qZWN0YWJsZSIsImluamVjdCIsIkRPTUFJTl9SRVBPU0lUT1JZX0lERU5USUZJRVJTIiwiQ09GRkVFX1JFUE9TSVRPUlkiLCJVU0VSX1JFUE9TSVRPUlkiXSwibWFwcGluZ3MiOiI7Ozs7K0JBWWFBOzthQUFBQTs7MkJBWnNCO21DQUVXO21DQUlaOytDQUNZO2lDQUNkOytDQUNjOzs7Ozs7Ozs7Ozs7Ozs7SUFHakNBLG1CQUFOO0lBQ0xDLFlBRW1CQyxrQkFFQUMsZUFDakI7Z0NBSGlCRDs4QkFFQUM7SUFDaEI7SUFFSEMsT0FBTyxFQUNMQyxNQUFLLEVBQ0xDLEtBQUksRUFDSkMsS0FBSSxFQUNKQyxPQUFNLEVBQ05DLFlBQVcsRUFDWEMsU0FBUSxFQUNSQyxRQUFPLEVBQ1BDLGFBQVksRUFDNEIsRUFBbUI7UUFDM0QsT0FBTyxJQUFJLENBQUNWLGdCQUFnQixDQUFDVyxZQUFZLENBQ3ZDLElBQUlDLDREQUE2QixDQUMvQlQsT0FDQUMsTUFDQUMsTUFDQUMsUUFDQUMsYUFDQUMsVUFDQUMsU0FDQUM7SUFHTjtJQUVBRyxPQUFPLEVBQUVDLEdBQUUsRUFBaUMsRUFBbUI7UUFDN0QsT0FBTyxJQUFJLENBQUNkLGdCQUFnQixDQUFDZSxZQUFZLENBQ3ZDLElBQUlDLDREQUE2QixDQUFDRjtJQUV0QztBQWlCRjtBQXJEYWhCO0lBRFptQixJQUFBQSxxQkFBVTtJQUdOQyxXQUFBQSxJQUFBQSxpQkFBTSxFQUFDQyxnREFBNkIsQ0FBQ0MsaUJBQWlCO0lBRXRERixXQUFBQSxJQUFBQSxpQkFBTSxFQUFDQyxnREFBNkIsQ0FBQ0UsZUFBZTs7O2VBRGxCLG9DQUFpQiw0QkFBakIsb0NBQWlCO2VBRW5CLGdDQUFlLDRCQUFmLGdDQUFlOztHQUx2Q3ZCIn0=