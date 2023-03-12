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
const _infrastructureModuleSymbols = require("../../../InfrastructureModuleSymbols");
const _bunnyCdn = require("../../../cdn/BunnyCdn");
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
let CoffeeUnitOfWork = class CoffeeUnitOfWork {
    constructor(coffeeRepository, userRepository, bunnyCdnClient){
        this.coffeeRepository = coffeeRepository;
        this.userRepository = userRepository;
        this.bunnyCdnClient = bunnyCdnClient;
    }
    async create({ brand , name , type , image , description , burntLvl , reflink , CoffeeStatus  }) {
        const response = await this.bunnyCdnClient.uploadImage(image);
        if ([
            400,
            401
        ].includes(response.status)) {
            throw new _baseError.BaseError(_infrastructureErrors.InfrastructureErrors[_infrastructureErrors.InfrastructureErrors.BAD_REQUEST]);
        }
        return this.coffeeRepository.createCoffee(new _createCoffeeRepositoryCommand.CreateCoffeeRepositoryCommand(brand, name, type, response.url, description, burntLvl, reflink, CoffeeStatus));
    }
    delete({ id  }) {
        return this.coffeeRepository.deleteCoffee(new _deleteCoffeeRepositoryCommand.DeleteCoffeeRepositoryCommand(id));
    }
};
CoffeeUnitOfWork = __decorate([
    (0, _inversify.injectable)(),
    __param(0, (0, _inversify.inject)(_coreModuleSymbols.DOMAIN_REPOSITORY_IDENTIFIERS.COFFEE_REPOSITORY)),
    __param(1, (0, _inversify.inject)(_coreModuleSymbols.DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY)),
    __param(2, (0, _inversify.inject)(_infrastructureModuleSymbols.INFRASTRUCTURE_IDENTIFIERS.BUNNY_CDN)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _icoffeeRepository.ICoffeeRepository === "undefined" ? Object : _icoffeeRepository.ICoffeeRepository,
        typeof _iuserRepository.IUserRepository === "undefined" ? Object : _iuserRepository.IUserRepository,
        typeof _bunnyCdn.BunnyCdn === "undefined" ? Object : _bunnyCdn.BunnyCdn
    ])
], CoffeeUnitOfWork);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9yZXBvc2l0b3J5L0NvZmZlZS9Db2ZmZWVVbml0T2ZXb3JrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgaW5qZWN0YWJsZSB9IGZyb20gJ2ludmVyc2lmeSc7XG5cbmltcG9ydCB7IERPTUFJTl9SRVBPU0lUT1JZX0lERU5USUZJRVJTIH0gZnJvbSAnY29yZS9Db3JlTW9kdWxlU3ltYm9scyc7XG5pbXBvcnQgeyBDb2ZmZWUgfSBmcm9tICdjb3JlL2RvbWFpbi9Db2ZmZWUvQ29mZmVlJztcbmltcG9ydCB7IElDb2ZmZWVVbml0T2ZXb3JrIH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Db2ZmZWUvSUNvZmZlZVVuaXRPZldvcmsnO1xuaW1wb3J0IHsgQ3JlYXRlQ29mZmVlVW5pdE9mV29ya1JlcG9zaXRvcnlDb21tYW5kIH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Db2ZmZWUvcmVxdWVzdHMvVW5pdE9mV29yay9jb21tYW5kL0FkZENvZmZlZVVuaXRPZldvcmtSZXBvc2l0b3J5Q29tbWFuZCc7XG5pbXBvcnQgeyBJQ29mZmVlUmVwb3NpdG9yeSB9IGZyb20gJ2NvcmUvZG9tYWluU2VydmljZXMvQ29mZmVlL0lDb2ZmZWVSZXBvc2l0b3J5JztcbmltcG9ydCB7IERlbGV0ZUNvZmZlZVJlcG9zaXRvcnlDb21tYW5kIH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Db2ZmZWUvcmVxdWVzdHMvcmVwb3NpdG9yeS9jb21tYW5kL0RlbGV0ZUNvZmZlZVJlcG9zaXRvcnlDb21tYW5kJztcbmltcG9ydCB7IElVc2VyUmVwb3NpdG9yeSB9IGZyb20gJ2NvcmUvZG9tYWluU2VydmljZXMvVXNlci9JVXNlclJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ3JlYXRlQ29mZmVlUmVwb3NpdG9yeUNvbW1hbmQgfSBmcm9tICdjb3JlL2RvbWFpblNlcnZpY2VzL0NvZmZlZS9yZXF1ZXN0cy9yZXBvc2l0b3J5L2NvbW1hbmQvQ3JlYXRlQ29mZmVlUmVwb3NpdG9yeUNvbW1hbmQnO1xuaW1wb3J0IHsgSU5GUkFTVFJVQ1RVUkVfSURFTlRJRklFUlMgfSBmcm9tICdpbmZyYXN0cnVjdHVyZS9JbmZyYXN0cnVjdHVyZU1vZHVsZVN5bWJvbHMnO1xuaW1wb3J0IHsgQnVubnlDZG4gfSBmcm9tICdpbmZyYXN0cnVjdHVyZS9jZG4vQnVubnlDZG4nO1xuaW1wb3J0IHsgQmFzZUVycm9yIH0gZnJvbSAnY29yZS9jb21tb24vZXJyb3JzL0Jhc2VFcnJvcic7XG5cbmltcG9ydCB7IEluZnJhc3RydWN0dXJlRXJyb3JzIH0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvY29tbW9uL2Vycm9ycy9JbmZyYXN0cnVjdHVyZUVycm9ycyc7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb2ZmZWVVbml0T2ZXb3JrIGltcGxlbWVudHMgSUNvZmZlZVVuaXRPZldvcmsge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KERPTUFJTl9SRVBPU0lUT1JZX0lERU5USUZJRVJTLkNPRkZFRV9SRVBPU0lUT1JZKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29mZmVlUmVwb3NpdG9yeTogSUNvZmZlZVJlcG9zaXRvcnksXG4gICAgQGluamVjdChET01BSU5fUkVQT1NJVE9SWV9JREVOVElGSUVSUy5VU0VSX1JFUE9TSVRPUlkpXG4gICAgcHJpdmF0ZSByZWFkb25seSB1c2VyUmVwb3NpdG9yeTogSVVzZXJSZXBvc2l0b3J5LFxuICAgIEBpbmplY3QoSU5GUkFTVFJVQ1RVUkVfSURFTlRJRklFUlMuQlVOTllfQ0ROKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgYnVubnlDZG5DbGllbnQ6IEJ1bm55Q2RuXG4gICkge31cblxuICBhc3luYyBjcmVhdGUoe1xuICAgIGJyYW5kLFxuICAgIG5hbWUsXG4gICAgdHlwZSxcbiAgICBpbWFnZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBidXJudEx2bCxcbiAgICByZWZsaW5rLFxuICAgIENvZmZlZVN0YXR1cyxcbiAgfTogQ3JlYXRlQ29mZmVlVW5pdE9mV29ya1JlcG9zaXRvcnlDb21tYW5kKTogUHJvbWlzZTxDb2ZmZWU+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuYnVubnlDZG5DbGllbnQudXBsb2FkSW1hZ2UoaW1hZ2UpO1xuXG4gICAgaWYgKFs0MDAsIDQwMV0uaW5jbHVkZXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgICAgdGhyb3cgbmV3IEJhc2VFcnJvcihcbiAgICAgICAgSW5mcmFzdHJ1Y3R1cmVFcnJvcnNbSW5mcmFzdHJ1Y3R1cmVFcnJvcnMuQkFEX1JFUVVFU1RdXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNvZmZlZVJlcG9zaXRvcnkuY3JlYXRlQ29mZmVlKFxuICAgICAgbmV3IENyZWF0ZUNvZmZlZVJlcG9zaXRvcnlDb21tYW5kKFxuICAgICAgICBicmFuZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgcmVzcG9uc2UudXJsLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgYnVybnRMdmwsXG4gICAgICAgIHJlZmxpbmssXG4gICAgICAgIENvZmZlZVN0YXR1c1xuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBkZWxldGUoeyBpZCB9OiBEZWxldGVDb2ZmZWVSZXBvc2l0b3J5Q29tbWFuZCk6IFByb21pc2U8Q29mZmVlPiB7XG4gICAgcmV0dXJuIHRoaXMuY29mZmVlUmVwb3NpdG9yeS5kZWxldGVDb2ZmZWUoXG4gICAgICBuZXcgRGVsZXRlQ29mZmVlUmVwb3NpdG9yeUNvbW1hbmQoaWQpXG4gICAgKTtcbiAgfVxuXG4gIC8vIEBUcmFuc2FjdGlvbmFsKHtcbiAgLy8gICBjb25uZWN0aW9uTmFtZTogKCkgPT4gcHJvY2Vzcy5lbnYuT1JNX0NPTk5FQ1RJT04sXG4gIC8vIH0pXG4gIC8vIGFzeW5jIGFkZENvZmZlZVJldmlldyh7XG4gIC8vICAgdXNlcklkLFxuICAvLyAgIGNvZmZlZUlkLFxuICAvLyAgIGxvb2ssXG4gIC8vICAgc21lbGwsXG4gIC8vICAgdGFzdGUsXG4gIC8vIH06IEFkZFJldmlld1JlcG9zaXRvcnlDb21tYW5kKTogUHJvbWlzZTxDb2ZmZWU+IHtcblxuICAvLyAgIHJldHVybiB0aGlzLmNvZmZlZVJlcG9zaXRvcnkuYWRkQ29mZmVlUmV2aWV3KFxuICAvLyAgICAgbmV3IEFkZFJldmlld1JlcG9zaXRvcnlDb21tYW5kKHVzZXJJZCwgY29mZmVlSWQsIGxvb2ssIHNtZWxsLCB0YXN0ZSlcbiAgLy8gICApO1xuICAvLyB9XG59XG4iXSwibmFtZXMiOlsiQ29mZmVlVW5pdE9mV29yayIsImNvbnN0cnVjdG9yIiwiY29mZmVlUmVwb3NpdG9yeSIsInVzZXJSZXBvc2l0b3J5IiwiYnVubnlDZG5DbGllbnQiLCJjcmVhdGUiLCJicmFuZCIsIm5hbWUiLCJ0eXBlIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImJ1cm50THZsIiwicmVmbGluayIsIkNvZmZlZVN0YXR1cyIsInJlc3BvbnNlIiwidXBsb2FkSW1hZ2UiLCJpbmNsdWRlcyIsInN0YXR1cyIsIkJhc2VFcnJvciIsIkluZnJhc3RydWN0dXJlRXJyb3JzIiwiQkFEX1JFUVVFU1QiLCJjcmVhdGVDb2ZmZWUiLCJDcmVhdGVDb2ZmZWVSZXBvc2l0b3J5Q29tbWFuZCIsInVybCIsImRlbGV0ZSIsImlkIiwiZGVsZXRlQ29mZmVlIiwiRGVsZXRlQ29mZmVlUmVwb3NpdG9yeUNvbW1hbmQiLCJpbmplY3RhYmxlIiwiaW5qZWN0IiwiRE9NQUlOX1JFUE9TSVRPUllfSURFTlRJRklFUlMiLCJDT0ZGRUVfUkVQT1NJVE9SWSIsIlVTRVJfUkVQT1NJVE9SWSIsIklORlJBU1RSVUNUVVJFX0lERU5USUZJRVJTIiwiQlVOTllfQ0ROIl0sIm1hcHBpbmdzIjoiOzs7OytCQWlCYUE7O2FBQUFBOzsyQkFqQnNCO21DQUVXO21DQUlaOytDQUNZO2lDQUNkOytDQUNjOzZDQUNIOzBCQUNsQjsyQkFDQztzQ0FFVzs7Ozs7Ozs7Ozs7Ozs7O0lBR3hCQSxtQkFBTjtJQUNMQyxZQUVtQkMsa0JBRUFDLGdCQUVBQyxlQUNqQjtnQ0FMaUJGOzhCQUVBQzs4QkFFQUM7SUFDaEI7SUFFSCxNQUFNQyxPQUFPLEVBQ1hDLE1BQUssRUFDTEMsS0FBSSxFQUNKQyxLQUFJLEVBQ0pDLE1BQUssRUFDTEMsWUFBVyxFQUNYQyxTQUFRLEVBQ1JDLFFBQU8sRUFDUEMsYUFBWSxFQUM0QixFQUFtQjtRQUMzRCxNQUFNQyxXQUFXLE1BQU0sSUFBSSxDQUFDVixjQUFjLENBQUNXLFdBQVcsQ0FBQ047UUFFdkQsSUFBSTtZQUFDO1lBQUs7U0FBSSxDQUFDTyxRQUFRLENBQUNGLFNBQVNHLE1BQU0sR0FBRztZQUN4QyxNQUFNLElBQUlDLG9CQUFTLENBQ2pCQywwQ0FBb0IsQ0FBQ0EsMENBQW9CLENBQUNDLFdBQVcsQ0FBQyxFQUN0RDtRQUNKLENBQUM7UUFFRCxPQUFPLElBQUksQ0FBQ2xCLGdCQUFnQixDQUFDbUIsWUFBWSxDQUN2QyxJQUFJQyw0REFBNkIsQ0FDL0JoQixPQUNBQyxNQUNBQyxNQUNBTSxTQUFTUyxHQUFHLEVBQ1piLGFBQ0FDLFVBQ0FDLFNBQ0FDO0lBR047SUFFQVcsT0FBTyxFQUFFQyxHQUFFLEVBQWlDLEVBQW1CO1FBQzdELE9BQU8sSUFBSSxDQUFDdkIsZ0JBQWdCLENBQUN3QixZQUFZLENBQ3ZDLElBQUlDLDREQUE2QixDQUFDRjtJQUV0QztBQWlCRjtBQS9EYXpCO0lBRFo0QixJQUFBQSxxQkFBVTtJQUdOQyxXQUFBQSxJQUFBQSxpQkFBTSxFQUFDQyxnREFBNkIsQ0FBQ0MsaUJBQWlCO0lBRXRERixXQUFBQSxJQUFBQSxpQkFBTSxFQUFDQyxnREFBNkIsQ0FBQ0UsZUFBZTtJQUVwREgsV0FBQUEsSUFBQUEsaUJBQU0sRUFBQ0ksdURBQTBCLENBQUNDLFNBQVM7OztlQUhULG9DQUFpQiw0QkFBakIsb0NBQWlCO2VBRW5CLGdDQUFlLDRCQUFmLGdDQUFlO2VBRWYsa0JBQVEsNEJBQVIsa0JBQVE7O0dBUGhDbEMifQ==