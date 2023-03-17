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
const _baseError = require("../../../../core/common/errors/BaseError");
const _infrastructureErrors = require("../../../common/errors/InfrastructureErrors");
const _bunnyCdnClient = require("../../../cdn/BunnyCdnClient");
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
    __param(2, (0, _inversify.inject)(_infrastructureModuleSymbols.INFRASTRUCTURE_IDENTIFIERS.BUNNY_CDN_CLIENT)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _icoffeeRepository.ICoffeeRepository === "undefined" ? Object : _icoffeeRepository.ICoffeeRepository,
        typeof _iuserRepository.IUserRepository === "undefined" ? Object : _iuserRepository.IUserRepository,
        typeof _bunnyCdnClient.BunnyCdnClient === "undefined" ? Object : _bunnyCdnClient.BunnyCdnClient
    ])
], CoffeeUnitOfWork);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9yZXBvc2l0b3J5L0NvZmZlZS9Db2ZmZWVVbml0T2ZXb3JrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgaW5qZWN0YWJsZSB9IGZyb20gJ2ludmVyc2lmeSc7XG5cbmltcG9ydCB7IERPTUFJTl9SRVBPU0lUT1JZX0lERU5USUZJRVJTIH0gZnJvbSAnY29yZS9Db3JlTW9kdWxlU3ltYm9scyc7XG5pbXBvcnQgeyBDb2ZmZWUgfSBmcm9tICdjb3JlL2RvbWFpbi9Db2ZmZWUvQ29mZmVlJztcbmltcG9ydCB7IElDb2ZmZWVVbml0T2ZXb3JrIH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Db2ZmZWUvSUNvZmZlZVVuaXRPZldvcmsnO1xuaW1wb3J0IHsgQ3JlYXRlQ29mZmVlVW5pdE9mV29ya1JlcG9zaXRvcnlDb21tYW5kIH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Db2ZmZWUvcmVxdWVzdHMvVW5pdE9mV29yay9jb21tYW5kL0FkZENvZmZlZVVuaXRPZldvcmtSZXBvc2l0b3J5Q29tbWFuZCc7XG5pbXBvcnQgeyBJQ29mZmVlUmVwb3NpdG9yeSB9IGZyb20gJ2NvcmUvZG9tYWluU2VydmljZXMvQ29mZmVlL0lDb2ZmZWVSZXBvc2l0b3J5JztcbmltcG9ydCB7IERlbGV0ZUNvZmZlZVJlcG9zaXRvcnlDb21tYW5kIH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Db2ZmZWUvcmVxdWVzdHMvcmVwb3NpdG9yeS9jb21tYW5kL0RlbGV0ZUNvZmZlZVJlcG9zaXRvcnlDb21tYW5kJztcbmltcG9ydCB7IElVc2VyUmVwb3NpdG9yeSB9IGZyb20gJ2NvcmUvZG9tYWluU2VydmljZXMvVXNlci9JVXNlclJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ3JlYXRlQ29mZmVlUmVwb3NpdG9yeUNvbW1hbmQgfSBmcm9tICdjb3JlL2RvbWFpblNlcnZpY2VzL0NvZmZlZS9yZXF1ZXN0cy9yZXBvc2l0b3J5L2NvbW1hbmQvQ3JlYXRlQ29mZmVlUmVwb3NpdG9yeUNvbW1hbmQnO1xuaW1wb3J0IHsgSU5GUkFTVFJVQ1RVUkVfSURFTlRJRklFUlMgfSBmcm9tICdpbmZyYXN0cnVjdHVyZS9JbmZyYXN0cnVjdHVyZU1vZHVsZVN5bWJvbHMnO1xuaW1wb3J0IHsgQmFzZUVycm9yIH0gZnJvbSAnY29yZS9jb21tb24vZXJyb3JzL0Jhc2VFcnJvcic7XG5cbmltcG9ydCB7IEluZnJhc3RydWN0dXJlRXJyb3JzIH0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvY29tbW9uL2Vycm9ycy9JbmZyYXN0cnVjdHVyZUVycm9ycyc7XG5pbXBvcnQgeyBCdW5ueUNkbkNsaWVudCB9IGZyb20gJ2luZnJhc3RydWN0dXJlL2Nkbi9CdW5ueUNkbkNsaWVudCc7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb2ZmZWVVbml0T2ZXb3JrIGltcGxlbWVudHMgSUNvZmZlZVVuaXRPZldvcmsge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KERPTUFJTl9SRVBPU0lUT1JZX0lERU5USUZJRVJTLkNPRkZFRV9SRVBPU0lUT1JZKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29mZmVlUmVwb3NpdG9yeTogSUNvZmZlZVJlcG9zaXRvcnksXG4gICAgQGluamVjdChET01BSU5fUkVQT1NJVE9SWV9JREVOVElGSUVSUy5VU0VSX1JFUE9TSVRPUlkpXG4gICAgcHJpdmF0ZSByZWFkb25seSB1c2VyUmVwb3NpdG9yeTogSVVzZXJSZXBvc2l0b3J5LFxuICAgIEBpbmplY3QoSU5GUkFTVFJVQ1RVUkVfSURFTlRJRklFUlMuQlVOTllfQ0ROX0NMSUVOVClcbiAgICBwcml2YXRlIHJlYWRvbmx5IGJ1bm55Q2RuQ2xpZW50OiBCdW5ueUNkbkNsaWVudFxuICApIHt9XG5cbiAgYXN5bmMgY3JlYXRlKHtcbiAgICBicmFuZCxcbiAgICBuYW1lLFxuICAgIHR5cGUsXG4gICAgaW1hZ2UsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgYnVybnRMdmwsXG4gICAgcmVmbGluayxcbiAgICBDb2ZmZWVTdGF0dXMsXG4gIH06IENyZWF0ZUNvZmZlZVVuaXRPZldvcmtSZXBvc2l0b3J5Q29tbWFuZCk6IFByb21pc2U8Q29mZmVlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmJ1bm55Q2RuQ2xpZW50LnVwbG9hZEltYWdlKGltYWdlKTtcblxuICAgIGlmIChbNDAwLCA0MDFdLmluY2x1ZGVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICAgIHRocm93IG5ldyBCYXNlRXJyb3IoXG4gICAgICAgIEluZnJhc3RydWN0dXJlRXJyb3JzW0luZnJhc3RydWN0dXJlRXJyb3JzLkJBRF9SRVFVRVNUXVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jb2ZmZWVSZXBvc2l0b3J5LmNyZWF0ZUNvZmZlZShcbiAgICAgIG5ldyBDcmVhdGVDb2ZmZWVSZXBvc2l0b3J5Q29tbWFuZChcbiAgICAgICAgYnJhbmQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIHJlc3BvbnNlLnVybCxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGJ1cm50THZsLFxuICAgICAgICByZWZsaW5rLFxuICAgICAgICBDb2ZmZWVTdGF0dXNcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZGVsZXRlKHsgaWQgfTogRGVsZXRlQ29mZmVlUmVwb3NpdG9yeUNvbW1hbmQpOiBQcm9taXNlPENvZmZlZT4ge1xuICAgIHJldHVybiB0aGlzLmNvZmZlZVJlcG9zaXRvcnkuZGVsZXRlQ29mZmVlKFxuICAgICAgbmV3IERlbGV0ZUNvZmZlZVJlcG9zaXRvcnlDb21tYW5kKGlkKVxuICAgICk7XG4gIH1cblxuICAvLyBAVHJhbnNhY3Rpb25hbCh7XG4gIC8vICAgY29ubmVjdGlvbk5hbWU6ICgpID0+IHByb2Nlc3MuZW52Lk9STV9DT05ORUNUSU9OLFxuICAvLyB9KVxuICAvLyBhc3luYyBhZGRDb2ZmZWVSZXZpZXcoe1xuICAvLyAgIHVzZXJJZCxcbiAgLy8gICBjb2ZmZWVJZCxcbiAgLy8gICBsb29rLFxuICAvLyAgIHNtZWxsLFxuICAvLyAgIHRhc3RlLFxuICAvLyB9OiBBZGRSZXZpZXdSZXBvc2l0b3J5Q29tbWFuZCk6IFByb21pc2U8Q29mZmVlPiB7XG5cbiAgLy8gICByZXR1cm4gdGhpcy5jb2ZmZWVSZXBvc2l0b3J5LmFkZENvZmZlZVJldmlldyhcbiAgLy8gICAgIG5ldyBBZGRSZXZpZXdSZXBvc2l0b3J5Q29tbWFuZCh1c2VySWQsIGNvZmZlZUlkLCBsb29rLCBzbWVsbCwgdGFzdGUpXG4gIC8vICAgKTtcbiAgLy8gfVxufVxuIl0sIm5hbWVzIjpbIkNvZmZlZVVuaXRPZldvcmsiLCJjb25zdHJ1Y3RvciIsImNvZmZlZVJlcG9zaXRvcnkiLCJ1c2VyUmVwb3NpdG9yeSIsImJ1bm55Q2RuQ2xpZW50IiwiY3JlYXRlIiwiYnJhbmQiLCJuYW1lIiwidHlwZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJidXJudEx2bCIsInJlZmxpbmsiLCJDb2ZmZWVTdGF0dXMiLCJyZXNwb25zZSIsInVwbG9hZEltYWdlIiwiaW5jbHVkZXMiLCJzdGF0dXMiLCJCYXNlRXJyb3IiLCJJbmZyYXN0cnVjdHVyZUVycm9ycyIsIkJBRF9SRVFVRVNUIiwiY3JlYXRlQ29mZmVlIiwiQ3JlYXRlQ29mZmVlUmVwb3NpdG9yeUNvbW1hbmQiLCJ1cmwiLCJkZWxldGUiLCJpZCIsImRlbGV0ZUNvZmZlZSIsIkRlbGV0ZUNvZmZlZVJlcG9zaXRvcnlDb21tYW5kIiwiaW5qZWN0YWJsZSIsImluamVjdCIsIkRPTUFJTl9SRVBPU0lUT1JZX0lERU5USUZJRVJTIiwiQ09GRkVFX1JFUE9TSVRPUlkiLCJVU0VSX1JFUE9TSVRPUlkiLCJJTkZSQVNUUlVDVFVSRV9JREVOVElGSUVSUyIsIkJVTk5ZX0NETl9DTElFTlQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBaUJhQTs7YUFBQUE7OzJCQWpCc0I7bUNBRVc7bUNBSVo7K0NBQ1k7aUNBQ2Q7K0NBQ2M7NkNBQ0g7MkJBQ2pCO3NDQUVXO2dDQUNOOzs7Ozs7Ozs7Ozs7Ozs7SUFHbEJBLG1CQUFOO0lBQ0xDLFlBRW1CQyxrQkFFQUMsZ0JBRUFDLGVBQ2pCO2dDQUxpQkY7OEJBRUFDOzhCQUVBQztJQUNoQjtJQUVILE1BQU1DLE9BQU8sRUFDWEMsTUFBSyxFQUNMQyxLQUFJLEVBQ0pDLEtBQUksRUFDSkMsTUFBSyxFQUNMQyxZQUFXLEVBQ1hDLFNBQVEsRUFDUkMsUUFBTyxFQUNQQyxhQUFZLEVBQzRCLEVBQW1CO1FBQzNELE1BQU1DLFdBQVcsTUFBTSxJQUFJLENBQUNWLGNBQWMsQ0FBQ1csV0FBVyxDQUFDTjtRQUV2RCxJQUFJO1lBQUM7WUFBSztTQUFJLENBQUNPLFFBQVEsQ0FBQ0YsU0FBU0csTUFBTSxHQUFHO1lBQ3hDLE1BQU0sSUFBSUMsb0JBQVMsQ0FDakJDLDBDQUFvQixDQUFDQSwwQ0FBb0IsQ0FBQ0MsV0FBVyxDQUFDLEVBQ3REO1FBQ0osQ0FBQztRQUVELE9BQU8sSUFBSSxDQUFDbEIsZ0JBQWdCLENBQUNtQixZQUFZLENBQ3ZDLElBQUlDLDREQUE2QixDQUMvQmhCLE9BQ0FDLE1BQ0FDLE1BQ0FNLFNBQVNTLEdBQUcsRUFDWmIsYUFDQUMsVUFDQUMsU0FDQUM7SUFHTjtJQUVBVyxPQUFPLEVBQUVDLEdBQUUsRUFBaUMsRUFBbUI7UUFDN0QsT0FBTyxJQUFJLENBQUN2QixnQkFBZ0IsQ0FBQ3dCLFlBQVksQ0FDdkMsSUFBSUMsNERBQTZCLENBQUNGO0lBRXRDO0FBaUJGO0FBL0RhekI7SUFEWjRCLElBQUFBLHFCQUFVO0lBR05DLFdBQUFBLElBQUFBLGlCQUFNLEVBQUNDLGdEQUE2QixDQUFDQyxpQkFBaUI7SUFFdERGLFdBQUFBLElBQUFBLGlCQUFNLEVBQUNDLGdEQUE2QixDQUFDRSxlQUFlO0lBRXBESCxXQUFBQSxJQUFBQSxpQkFBTSxFQUFDSSx1REFBMEIsQ0FBQ0MsZ0JBQWdCOzs7ZUFIaEIsb0NBQWlCLDRCQUFqQixvQ0FBaUI7ZUFFbkIsZ0NBQWUsNEJBQWYsZ0NBQWU7ZUFFZiw4QkFBYyw0QkFBZCw4QkFBYzs7R0FQdENsQyJ9