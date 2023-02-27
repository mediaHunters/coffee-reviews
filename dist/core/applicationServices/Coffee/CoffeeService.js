"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CoffeeService", {
    enumerable: true,
    get: ()=>CoffeeService
});
const _inversify = require("inversify");
const _coreModuleSymbols = require("../../CoreModuleSymbols");
const _icoffeeUnitOfWork = require("../../domainServices/Coffee/ICoffeeUnitOfWork");
const _addCoffeeUnitOfWorkRepositoryCommand = require("../../domainServices/Coffee/requests/UnitOfWork/command/AddCoffeeUnitOfWorkRepositoryCommand");
const _deleteCoffeeUnitOfWorkRepositoryCommand = require("../../domainServices/Coffee/requests/UnitOfWork/command/DeleteCoffeeUnitOfWorkRepositoryCommand");
const _icoffeeRepository = require("../../domainServices/Coffee/ICoffeeRepository");
const _findCoffeeRepositoryQuery = require("../../domainServices/Coffee/requests/UnitOfWork/query/FindCoffeeRepositoryQuery");
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
let CoffeeService = class CoffeeService {
    constructor(coffeUnitOfWork, coffeRepository){
        this.coffeUnitOfWork = coffeUnitOfWork;
        this.coffeRepository = coffeRepository;
    }
    findAll() {
        return this.coffeRepository.findAllCoffees();
    }
    findOne({ id  }) {
        return this.coffeRepository.findOneCoffee(new _findCoffeeRepositoryQuery.FindOneCoffeeRepositoryQuery(id));
    }
    create({ brand , name , type , imgUrl , description , burntLvl , reflink , CoffeeStatus  }) {
        return this.coffeRepository.createCoffee(new _addCoffeeUnitOfWorkRepositoryCommand.CreateCoffeeUnitOfWorkRepositoryCommand(brand, name, type, imgUrl, description, burntLvl, CoffeeStatus, reflink || ''));
    }
    update({ coffee , coffeeId  }) {
        return this.coffeRepository.updateCoffee({
            coffee,
            coffeeId
        });
    }
    delete(command) {
        return this.coffeUnitOfWork.delete(new _deleteCoffeeUnitOfWorkRepositoryCommand.DeleteCoffeeUnitOfWorkRepositoryCommand(command.id));
    }
};
CoffeeService = __decorate([
    (0, _inversify.injectable)(),
    __param(0, (0, _inversify.inject)(_coreModuleSymbols.DOMAIN_UNIT_OF_WORK_IDENTIFIERS.COFFEE_UNIT_OF_WORK)),
    __param(1, (0, _inversify.inject)(_coreModuleSymbols.DOMAIN_REPOSITORY_IDENTIFIERS.COFFEE_REPOSITORY)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _icoffeeUnitOfWork.ICoffeeUnitOfWork === "undefined" ? Object : _icoffeeUnitOfWork.ICoffeeUnitOfWork,
        typeof _icoffeeRepository.ICoffeeRepository === "undefined" ? Object : _icoffeeRepository.ICoffeeRepository
    ])
], CoffeeService);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvQ29mZmVlL0NvZmZlZVNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBpbmplY3RhYmxlIH0gZnJvbSAnaW52ZXJzaWZ5JztcblxuaW1wb3J0IHsgVXBkYXRlUmVzdWx0IH0gZnJvbSAndHlwZW9ybSc7XG5cbmltcG9ydCB7IElDb2ZmZWVTZXJ2aWNlIH0gZnJvbSAnY29yZS9hcHBsaWNhdGlvblNlcnZpY2VzL0NvZmZlZS9JQ29mZmVlU2VydmljZSc7XG5pbXBvcnQge1xuICBET01BSU5fUkVQT1NJVE9SWV9JREVOVElGSUVSUyxcbiAgRE9NQUlOX1VOSVRfT0ZfV09SS19JREVOVElGSUVSUyxcbn0gZnJvbSAnY29yZS9Db3JlTW9kdWxlU3ltYm9scyc7XG5pbXBvcnQgeyBDb2ZmZWUgfSBmcm9tICdjb3JlL2RvbWFpbi9Db2ZmZWUvQ29mZmVlJztcbmltcG9ydCB7IElDb2ZmZWVVbml0T2ZXb3JrIH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Db2ZmZWUvSUNvZmZlZVVuaXRPZldvcmsnO1xuaW1wb3J0IHsgQ3JlYXRlQ29mZmVlVW5pdE9mV29ya1JlcG9zaXRvcnlDb21tYW5kIH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Db2ZmZWUvcmVxdWVzdHMvVW5pdE9mV29yay9jb21tYW5kL0FkZENvZmZlZVVuaXRPZldvcmtSZXBvc2l0b3J5Q29tbWFuZCc7XG5pbXBvcnQgeyBEZWxldGVDb2ZmZWVDb21tYW5kIH0gZnJvbSAnY29yZS9hcHBsaWNhdGlvblNlcnZpY2VzL0NvZmZlZS9yZXF1ZXN0cy9jb21tYW5kL0RlbGV0ZUNvZmZlZUNvbW1hbmQnO1xuaW1wb3J0IHsgRGVsZXRlQ29mZmVlVW5pdE9mV29ya1JlcG9zaXRvcnlDb21tYW5kIH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Db2ZmZWUvcmVxdWVzdHMvVW5pdE9mV29yay9jb21tYW5kL0RlbGV0ZUNvZmZlZVVuaXRPZldvcmtSZXBvc2l0b3J5Q29tbWFuZCc7XG5pbXBvcnQgeyBJQ29mZmVlUmVwb3NpdG9yeSB9IGZyb20gJ2NvcmUvZG9tYWluU2VydmljZXMvQ29mZmVlL0lDb2ZmZWVSZXBvc2l0b3J5JztcbmltcG9ydCB7IEZpbmRPbmVDb2ZmZWVSZXBvc2l0b3J5UXVlcnkgfSBmcm9tICdjb3JlL2RvbWFpblNlcnZpY2VzL0NvZmZlZS9yZXF1ZXN0cy9Vbml0T2ZXb3JrL3F1ZXJ5L0ZpbmRDb2ZmZWVSZXBvc2l0b3J5UXVlcnknO1xuaW1wb3J0IHsgQ3JlYXRlQ29mZmVlQ29tbWFuZCB9IGZyb20gJ2NvcmUvYXBwbGljYXRpb25TZXJ2aWNlcy9Db2ZmZWUvcmVxdWVzdHMvY29tbWFuZC9BZGRDb2ZmZWVDb21tYW5kJztcbmltcG9ydCB7IFVwZGF0ZUNvZmZlZUNvbW1hbmQgfSBmcm9tICdjb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvQ29mZmVlL3JlcXVlc3RzL2NvbW1hbmQvVXBkYXRlQ29mZmVlQ29tbWFuZCc7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb2ZmZWVTZXJ2aWNlIGltcGxlbWVudHMgSUNvZmZlZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KERPTUFJTl9VTklUX09GX1dPUktfSURFTlRJRklFUlMuQ09GRkVFX1VOSVRfT0ZfV09SSylcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvZmZlVW5pdE9mV29yazogSUNvZmZlZVVuaXRPZldvcmssXG4gICAgQGluamVjdChET01BSU5fUkVQT1NJVE9SWV9JREVOVElGSUVSUy5DT0ZGRUVfUkVQT1NJVE9SWSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvZmZlUmVwb3NpdG9yeTogSUNvZmZlZVJlcG9zaXRvcnlcbiAgKSB7fVxuXG4gIGZpbmRBbGwoKTogUHJvbWlzZTxDb2ZmZWVbXT4ge1xuICAgIHJldHVybiB0aGlzLmNvZmZlUmVwb3NpdG9yeS5maW5kQWxsQ29mZmVlcygpO1xuICB9XG5cbiAgZmluZE9uZSh7IGlkIH06IEZpbmRPbmVDb2ZmZWVSZXBvc2l0b3J5UXVlcnkpOiBQcm9taXNlPENvZmZlZT4ge1xuICAgIHJldHVybiB0aGlzLmNvZmZlUmVwb3NpdG9yeS5maW5kT25lQ29mZmVlKFxuICAgICAgbmV3IEZpbmRPbmVDb2ZmZWVSZXBvc2l0b3J5UXVlcnkoaWQpXG4gICAgKTtcbiAgfVxuXG4gIGNyZWF0ZSh7XG4gICAgYnJhbmQsXG4gICAgbmFtZSxcbiAgICB0eXBlLFxuICAgIGltZ1VybCxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBidXJudEx2bCxcbiAgICByZWZsaW5rLFxuICAgIENvZmZlZVN0YXR1cyxcbiAgfTogQ3JlYXRlQ29mZmVlQ29tbWFuZCk6IFByb21pc2U8Q29mZmVlPiB7XG4gICAgcmV0dXJuIHRoaXMuY29mZmVSZXBvc2l0b3J5LmNyZWF0ZUNvZmZlZShcbiAgICAgIG5ldyBDcmVhdGVDb2ZmZWVVbml0T2ZXb3JrUmVwb3NpdG9yeUNvbW1hbmQoXG4gICAgICAgIGJyYW5kLFxuICAgICAgICBuYW1lLFxuICAgICAgICB0eXBlLFxuICAgICAgICBpbWdVcmwsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBidXJudEx2bCxcbiAgICAgICAgQ29mZmVlU3RhdHVzLFxuICAgICAgICByZWZsaW5rIHx8ICcnXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHVwZGF0ZSh7IGNvZmZlZSwgY29mZmVlSWQgfTogVXBkYXRlQ29mZmVlQ29tbWFuZCk6IFByb21pc2U8VXBkYXRlUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuY29mZmVSZXBvc2l0b3J5LnVwZGF0ZUNvZmZlZSh7IGNvZmZlZSwgY29mZmVlSWQgfSk7XG4gIH1cblxuICBkZWxldGUoY29tbWFuZDogRGVsZXRlQ29mZmVlQ29tbWFuZCk6IFByb21pc2U8Q29mZmVlPiB7XG4gICAgcmV0dXJuIHRoaXMuY29mZmVVbml0T2ZXb3JrLmRlbGV0ZShcbiAgICAgIG5ldyBEZWxldGVDb2ZmZWVVbml0T2ZXb3JrUmVwb3NpdG9yeUNvbW1hbmQoY29tbWFuZC5pZClcbiAgICApO1xuICB9XG5cbiAgLy8gYWRkUmV2aWV3KHtcbiAgLy8gICB1c2VySWQsXG4gIC8vICAgY29mZmVlSWQsXG4gIC8vICAgbG9vayxcbiAgLy8gICBzbWVsbCxcbiAgLy8gICB0YXN0ZSxcbiAgLy8gfTogQWRkQ29mZmVlUmV2aWV3Q29tbWFuZCk6IFByb21pc2U8Q29mZmVlPiB7XG4gIC8vICAgcmV0dXJuIHRoaXMuQ29mZmVVbml0T2ZXb3JrLmFkZENvZmZlZVJldmlldyhcbiAgLy8gICAgIG5ldyBBZGRDb2ZmZWVSZXZpZXdVbml0T2ZXb3JrUmVwb3NpdG9yeUNvbW1hbmQoXG4gIC8vICAgICAgIHVzZXJJZCxcbiAgLy8gICAgICAgY29mZmVlSWQsXG4gIC8vICAgICAgIGxvb2ssXG4gIC8vICAgICAgIHNtZWxsLFxuICAvLyAgICAgICB0YXN0ZVxuICAvLyAgICAgKVxuICAvLyAgICk7XG4gIC8vIH1cblxuICAvLyBzb3J0QW5kUGFnaW5hdGUoeyBzb3J0QnksIHNraXAsIHRha2UgfTogU2VhcmNoUXVlcnkpOiBQcm9taXNlPENvZmZlZT4ge1xuICAvLyAgIHJldHVybiB0aGlzLkNvZmZlUmVwb3NpdG9yeS5zb3J0QW5kUGFnaW5hdGUoXG4gIC8vICAgICBuZXcgU2VhcmNoUmVwb3NpdG9yeVF1ZXJ5KHNvcnRCeSwgc2tpcCwgdGFrZSlcbiAgLy8gICApO1xuICAvLyB9XG59XG4iXSwibmFtZXMiOlsiQ29mZmVlU2VydmljZSIsImNvbnN0cnVjdG9yIiwiY29mZmVVbml0T2ZXb3JrIiwiY29mZmVSZXBvc2l0b3J5IiwiZmluZEFsbCIsImZpbmRBbGxDb2ZmZWVzIiwiZmluZE9uZSIsImlkIiwiZmluZE9uZUNvZmZlZSIsIkZpbmRPbmVDb2ZmZWVSZXBvc2l0b3J5UXVlcnkiLCJjcmVhdGUiLCJicmFuZCIsIm5hbWUiLCJ0eXBlIiwiaW1nVXJsIiwiZGVzY3JpcHRpb24iLCJidXJudEx2bCIsInJlZmxpbmsiLCJDb2ZmZWVTdGF0dXMiLCJjcmVhdGVDb2ZmZWUiLCJDcmVhdGVDb2ZmZWVVbml0T2ZXb3JrUmVwb3NpdG9yeUNvbW1hbmQiLCJ1cGRhdGUiLCJjb2ZmZWUiLCJjb2ZmZWVJZCIsInVwZGF0ZUNvZmZlZSIsImRlbGV0ZSIsImNvbW1hbmQiLCJEZWxldGVDb2ZmZWVVbml0T2ZXb3JrUmVwb3NpdG9yeUNvbW1hbmQiLCJpbmplY3RhYmxlIiwiaW5qZWN0IiwiRE9NQUlOX1VOSVRfT0ZfV09SS19JREVOVElGSUVSUyIsIkNPRkZFRV9VTklUX09GX1dPUksiLCJET01BSU5fUkVQT1NJVE9SWV9JREVOVElGSUVSUyIsIkNPRkZFRV9SRVBPU0lUT1JZIl0sIm1hcHBpbmdzIjoiOzs7OytCQW9CYUE7O2FBQUFBOzsyQkFwQnNCO21DQVE1QjttQ0FFMkI7c0RBQ3NCO3lEQUVBO21DQUN0QjsyQ0FDVzs7Ozs7Ozs7Ozs7Ozs7O0lBS2hDQSxnQkFBTjtJQUNMQyxZQUVtQkMsaUJBRUFDLGdCQUNqQjsrQkFIaUJEOytCQUVBQztJQUNoQjtJQUVIQyxVQUE2QjtRQUMzQixPQUFPLElBQUksQ0FBQ0QsZUFBZSxDQUFDRSxjQUFjO0lBQzVDO0lBRUFDLFFBQVEsRUFBRUMsR0FBRSxFQUFnQyxFQUFtQjtRQUM3RCxPQUFPLElBQUksQ0FBQ0osZUFBZSxDQUFDSyxhQUFhLENBQ3ZDLElBQUlDLHVEQUE0QixDQUFDRjtJQUVyQztJQUVBRyxPQUFPLEVBQ0xDLE1BQUssRUFDTEMsS0FBSSxFQUNKQyxLQUFJLEVBQ0pDLE9BQU0sRUFDTkMsWUFBVyxFQUNYQyxTQUFRLEVBQ1JDLFFBQU8sRUFDUEMsYUFBWSxFQUNRLEVBQW1CO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDZixlQUFlLENBQUNnQixZQUFZLENBQ3RDLElBQUlDLDZFQUF1QyxDQUN6Q1QsT0FDQUMsTUFDQUMsTUFDQUMsUUFDQUMsYUFDQUMsVUFDQUUsY0FDQUQsV0FBVztJQUdqQjtJQUVBSSxPQUFPLEVBQUVDLE9BQU0sRUFBRUMsU0FBUSxFQUF1QixFQUF5QjtRQUN2RSxPQUFPLElBQUksQ0FBQ3BCLGVBQWUsQ0FBQ3FCLFlBQVksQ0FBQztZQUFFRjtZQUFRQztRQUFTO0lBQzlEO0lBRUFFLE9BQU9DLE9BQTRCLEVBQW1CO1FBQ3BELE9BQU8sSUFBSSxDQUFDeEIsZUFBZSxDQUFDdUIsTUFBTSxDQUNoQyxJQUFJRSxnRkFBdUMsQ0FBQ0QsUUFBUW5CLEVBQUU7SUFFMUQ7QUF5QkY7QUEzRWFQO0lBRFo0QixJQUFBQSxxQkFBVTtJQUdOQyxXQUFBQSxJQUFBQSxpQkFBTSxFQUFDQyxrREFBK0IsQ0FBQ0MsbUJBQW1CO0lBRTFERixXQUFBQSxJQUFBQSxpQkFBTSxFQUFDRyxnREFBNkIsQ0FBQ0MsaUJBQWlCOzs7ZUFEckIsb0NBQWlCLDRCQUFqQixvQ0FBaUI7ZUFFakIsb0NBQWlCLDRCQUFqQixvQ0FBaUI7O0dBTDFDakMifQ==