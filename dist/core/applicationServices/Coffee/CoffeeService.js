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
    create({ brand , name , type , image , description , burntLvl , reflink , CoffeeStatus  }) {
        return this.coffeUnitOfWork.create(new _addCoffeeUnitOfWorkRepositoryCommand.CreateCoffeeUnitOfWorkRepositoryCommand(brand, name, type, image, description, burntLvl, CoffeeStatus, reflink || ''));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvQ29mZmVlL0NvZmZlZVNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBpbmplY3RhYmxlIH0gZnJvbSAnaW52ZXJzaWZ5JztcblxuaW1wb3J0IHsgVXBkYXRlUmVzdWx0IH0gZnJvbSAndHlwZW9ybSc7XG5cbmltcG9ydCB7IElDb2ZmZWVTZXJ2aWNlIH0gZnJvbSAnY29yZS9hcHBsaWNhdGlvblNlcnZpY2VzL0NvZmZlZS9JQ29mZmVlU2VydmljZSc7XG5pbXBvcnQge1xuICBET01BSU5fUkVQT1NJVE9SWV9JREVOVElGSUVSUyxcbiAgRE9NQUlOX1VOSVRfT0ZfV09SS19JREVOVElGSUVSUyxcbn0gZnJvbSAnY29yZS9Db3JlTW9kdWxlU3ltYm9scyc7XG5pbXBvcnQgeyBDb2ZmZWUgfSBmcm9tICdjb3JlL2RvbWFpbi9Db2ZmZWUvQ29mZmVlJztcbmltcG9ydCB7IElDb2ZmZWVVbml0T2ZXb3JrIH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Db2ZmZWUvSUNvZmZlZVVuaXRPZldvcmsnO1xuaW1wb3J0IHsgQ3JlYXRlQ29mZmVlVW5pdE9mV29ya1JlcG9zaXRvcnlDb21tYW5kIH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Db2ZmZWUvcmVxdWVzdHMvVW5pdE9mV29yay9jb21tYW5kL0FkZENvZmZlZVVuaXRPZldvcmtSZXBvc2l0b3J5Q29tbWFuZCc7XG5pbXBvcnQgeyBEZWxldGVDb2ZmZWVDb21tYW5kIH0gZnJvbSAnY29yZS9hcHBsaWNhdGlvblNlcnZpY2VzL0NvZmZlZS9yZXF1ZXN0cy9jb21tYW5kL0RlbGV0ZUNvZmZlZUNvbW1hbmQnO1xuaW1wb3J0IHsgRGVsZXRlQ29mZmVlVW5pdE9mV29ya1JlcG9zaXRvcnlDb21tYW5kIH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Db2ZmZWUvcmVxdWVzdHMvVW5pdE9mV29yay9jb21tYW5kL0RlbGV0ZUNvZmZlZVVuaXRPZldvcmtSZXBvc2l0b3J5Q29tbWFuZCc7XG5pbXBvcnQgeyBJQ29mZmVlUmVwb3NpdG9yeSB9IGZyb20gJ2NvcmUvZG9tYWluU2VydmljZXMvQ29mZmVlL0lDb2ZmZWVSZXBvc2l0b3J5JztcbmltcG9ydCB7IEZpbmRPbmVDb2ZmZWVSZXBvc2l0b3J5UXVlcnkgfSBmcm9tICdjb3JlL2RvbWFpblNlcnZpY2VzL0NvZmZlZS9yZXF1ZXN0cy9Vbml0T2ZXb3JrL3F1ZXJ5L0ZpbmRDb2ZmZWVSZXBvc2l0b3J5UXVlcnknO1xuaW1wb3J0IHsgQ3JlYXRlQ29mZmVlQ29tbWFuZCB9IGZyb20gJ2NvcmUvYXBwbGljYXRpb25TZXJ2aWNlcy9Db2ZmZWUvcmVxdWVzdHMvY29tbWFuZC9BZGRDb2ZmZWVDb21tYW5kJztcbmltcG9ydCB7IFVwZGF0ZUNvZmZlZUNvbW1hbmQgfSBmcm9tICdjb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvQ29mZmVlL3JlcXVlc3RzL2NvbW1hbmQvVXBkYXRlQ29mZmVlQ29tbWFuZCc7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb2ZmZWVTZXJ2aWNlIGltcGxlbWVudHMgSUNvZmZlZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KERPTUFJTl9VTklUX09GX1dPUktfSURFTlRJRklFUlMuQ09GRkVFX1VOSVRfT0ZfV09SSylcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvZmZlVW5pdE9mV29yazogSUNvZmZlZVVuaXRPZldvcmssXG4gICAgQGluamVjdChET01BSU5fUkVQT1NJVE9SWV9JREVOVElGSUVSUy5DT0ZGRUVfUkVQT1NJVE9SWSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvZmZlUmVwb3NpdG9yeTogSUNvZmZlZVJlcG9zaXRvcnlcbiAgKSB7fVxuXG4gIGZpbmRBbGwoKTogUHJvbWlzZTxDb2ZmZWVbXT4ge1xuICAgIHJldHVybiB0aGlzLmNvZmZlUmVwb3NpdG9yeS5maW5kQWxsQ29mZmVlcygpO1xuICB9XG5cbiAgZmluZE9uZSh7IGlkIH06IEZpbmRPbmVDb2ZmZWVSZXBvc2l0b3J5UXVlcnkpOiBQcm9taXNlPENvZmZlZT4ge1xuICAgIHJldHVybiB0aGlzLmNvZmZlUmVwb3NpdG9yeS5maW5kT25lQ29mZmVlKFxuICAgICAgbmV3IEZpbmRPbmVDb2ZmZWVSZXBvc2l0b3J5UXVlcnkoaWQpXG4gICAgKTtcbiAgfVxuXG4gIGNyZWF0ZSh7XG4gICAgYnJhbmQsXG4gICAgbmFtZSxcbiAgICB0eXBlLFxuICAgIGltYWdlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGJ1cm50THZsLFxuICAgIHJlZmxpbmssXG4gICAgQ29mZmVlU3RhdHVzLFxuICB9OiBDcmVhdGVDb2ZmZWVDb21tYW5kKTogUHJvbWlzZTxDb2ZmZWU+IHtcbiAgICByZXR1cm4gdGhpcy5jb2ZmZVVuaXRPZldvcmsuY3JlYXRlKFxuICAgICAgbmV3IENyZWF0ZUNvZmZlZVVuaXRPZldvcmtSZXBvc2l0b3J5Q29tbWFuZChcbiAgICAgICAgYnJhbmQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGltYWdlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgYnVybnRMdmwsXG4gICAgICAgIENvZmZlZVN0YXR1cyxcbiAgICAgICAgcmVmbGluayB8fCAnJ1xuICAgICAgKVxuICAgICk7XG4gIH1cblxuICB1cGRhdGUoeyBjb2ZmZWUsIGNvZmZlZUlkIH06IFVwZGF0ZUNvZmZlZUNvbW1hbmQpOiBQcm9taXNlPFVwZGF0ZVJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLmNvZmZlUmVwb3NpdG9yeS51cGRhdGVDb2ZmZWUoeyBjb2ZmZWUsIGNvZmZlZUlkIH0pO1xuICB9XG5cbiAgZGVsZXRlKGNvbW1hbmQ6IERlbGV0ZUNvZmZlZUNvbW1hbmQpOiBQcm9taXNlPENvZmZlZT4ge1xuICAgIHJldHVybiB0aGlzLmNvZmZlVW5pdE9mV29yay5kZWxldGUoXG4gICAgICBuZXcgRGVsZXRlQ29mZmVlVW5pdE9mV29ya1JlcG9zaXRvcnlDb21tYW5kKGNvbW1hbmQuaWQpXG4gICAgKTtcbiAgfVxuXG4gIC8vIGFkZFJldmlldyh7XG4gIC8vICAgdXNlcklkLFxuICAvLyAgIGNvZmZlZUlkLFxuICAvLyAgIGxvb2ssXG4gIC8vICAgc21lbGwsXG4gIC8vICAgdGFzdGUsXG4gIC8vIH06IEFkZENvZmZlZVJldmlld0NvbW1hbmQpOiBQcm9taXNlPENvZmZlZT4ge1xuICAvLyAgIHJldHVybiB0aGlzLkNvZmZlVW5pdE9mV29yay5hZGRDb2ZmZWVSZXZpZXcoXG4gIC8vICAgICBuZXcgQWRkQ29mZmVlUmV2aWV3VW5pdE9mV29ya1JlcG9zaXRvcnlDb21tYW5kKFxuICAvLyAgICAgICB1c2VySWQsXG4gIC8vICAgICAgIGNvZmZlZUlkLFxuICAvLyAgICAgICBsb29rLFxuICAvLyAgICAgICBzbWVsbCxcbiAgLy8gICAgICAgdGFzdGVcbiAgLy8gICAgIClcbiAgLy8gICApO1xuICAvLyB9XG5cbiAgLy8gc29ydEFuZFBhZ2luYXRlKHsgc29ydEJ5LCBza2lwLCB0YWtlIH06IFNlYXJjaFF1ZXJ5KTogUHJvbWlzZTxDb2ZmZWU+IHtcbiAgLy8gICByZXR1cm4gdGhpcy5Db2ZmZVJlcG9zaXRvcnkuc29ydEFuZFBhZ2luYXRlKFxuICAvLyAgICAgbmV3IFNlYXJjaFJlcG9zaXRvcnlRdWVyeShzb3J0QnksIHNraXAsIHRha2UpXG4gIC8vICAgKTtcbiAgLy8gfVxufVxuIl0sIm5hbWVzIjpbIkNvZmZlZVNlcnZpY2UiLCJjb25zdHJ1Y3RvciIsImNvZmZlVW5pdE9mV29yayIsImNvZmZlUmVwb3NpdG9yeSIsImZpbmRBbGwiLCJmaW5kQWxsQ29mZmVlcyIsImZpbmRPbmUiLCJpZCIsImZpbmRPbmVDb2ZmZWUiLCJGaW5kT25lQ29mZmVlUmVwb3NpdG9yeVF1ZXJ5IiwiY3JlYXRlIiwiYnJhbmQiLCJuYW1lIiwidHlwZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJidXJudEx2bCIsInJlZmxpbmsiLCJDb2ZmZWVTdGF0dXMiLCJDcmVhdGVDb2ZmZWVVbml0T2ZXb3JrUmVwb3NpdG9yeUNvbW1hbmQiLCJ1cGRhdGUiLCJjb2ZmZWUiLCJjb2ZmZWVJZCIsInVwZGF0ZUNvZmZlZSIsImRlbGV0ZSIsImNvbW1hbmQiLCJEZWxldGVDb2ZmZWVVbml0T2ZXb3JrUmVwb3NpdG9yeUNvbW1hbmQiLCJpbmplY3RhYmxlIiwiaW5qZWN0IiwiRE9NQUlOX1VOSVRfT0ZfV09SS19JREVOVElGSUVSUyIsIkNPRkZFRV9VTklUX09GX1dPUksiLCJET01BSU5fUkVQT1NJVE9SWV9JREVOVElGSUVSUyIsIkNPRkZFRV9SRVBPU0lUT1JZIl0sIm1hcHBpbmdzIjoiOzs7OytCQW9CYUE7O2FBQUFBOzsyQkFwQnNCO21DQVE1QjttQ0FFMkI7c0RBQ3NCO3lEQUVBO21DQUN0QjsyQ0FDVzs7Ozs7Ozs7Ozs7Ozs7O0lBS2hDQSxnQkFBTjtJQUNMQyxZQUVtQkMsaUJBRUFDLGdCQUNqQjsrQkFIaUJEOytCQUVBQztJQUNoQjtJQUVIQyxVQUE2QjtRQUMzQixPQUFPLElBQUksQ0FBQ0QsZUFBZSxDQUFDRSxjQUFjO0lBQzVDO0lBRUFDLFFBQVEsRUFBRUMsR0FBRSxFQUFnQyxFQUFtQjtRQUM3RCxPQUFPLElBQUksQ0FBQ0osZUFBZSxDQUFDSyxhQUFhLENBQ3ZDLElBQUlDLHVEQUE0QixDQUFDRjtJQUVyQztJQUVBRyxPQUFPLEVBQ0xDLE1BQUssRUFDTEMsS0FBSSxFQUNKQyxLQUFJLEVBQ0pDLE1BQUssRUFDTEMsWUFBVyxFQUNYQyxTQUFRLEVBQ1JDLFFBQU8sRUFDUEMsYUFBWSxFQUNRLEVBQW1CO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDaEIsZUFBZSxDQUFDUSxNQUFNLENBQ2hDLElBQUlTLDZFQUF1QyxDQUN6Q1IsT0FDQUMsTUFDQUMsTUFDQUMsT0FDQUMsYUFDQUMsVUFDQUUsY0FDQUQsV0FBVztJQUdqQjtJQUVBRyxPQUFPLEVBQUVDLE9BQU0sRUFBRUMsU0FBUSxFQUF1QixFQUF5QjtRQUN2RSxPQUFPLElBQUksQ0FBQ25CLGVBQWUsQ0FBQ29CLFlBQVksQ0FBQztZQUFFRjtZQUFRQztRQUFTO0lBQzlEO0lBRUFFLE9BQU9DLE9BQTRCLEVBQW1CO1FBQ3BELE9BQU8sSUFBSSxDQUFDdkIsZUFBZSxDQUFDc0IsTUFBTSxDQUNoQyxJQUFJRSxnRkFBdUMsQ0FBQ0QsUUFBUWxCLEVBQUU7SUFFMUQ7QUF5QkY7QUEzRWFQO0lBRFoyQixJQUFBQSxxQkFBVTtJQUdOQyxXQUFBQSxJQUFBQSxpQkFBTSxFQUFDQyxrREFBK0IsQ0FBQ0MsbUJBQW1CO0lBRTFERixXQUFBQSxJQUFBQSxpQkFBTSxFQUFDRyxnREFBNkIsQ0FBQ0MsaUJBQWlCOzs7ZUFEckIsb0NBQWlCLDRCQUFqQixvQ0FBaUI7ZUFFakIsb0NBQWlCLDRCQUFqQixvQ0FBaUI7O0dBTDFDaEMifQ==