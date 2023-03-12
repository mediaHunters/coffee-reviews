"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CoffeeEntityToCoffeeDomain", {
    enumerable: true,
    get: ()=>CoffeeEntityToCoffeeDomain
});
const _coreModuleSymbols = require("../../../../core/CoreModuleSymbols");
const _coffee = require("../../../../core/domain/Coffee/Coffee");
const _infrastructureModuleSymbols = require("../../../InfrastructureModuleSymbols");
const CoffeeEntityToCoffeeDomain = ()=>({
        configureMapping (mapper) {
            mapper.createMap({
                destination: _coreModuleSymbols.DOMAIN_MAPPING_IDENTIFIERS.COFFEE_DOMAIN,
                source: _infrastructureModuleSymbols.DATABASE_MAPPING_IDENTIFIERS.COFFEE_ENTITY
            }, _coffee.Coffee);
        }
    });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9tYXBwaW5ncy9Db2ZmZWUvQ29mZmVFbnRpdHlUb0NvZmZlZURvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXBwZXIgfSBmcm9tICdAd3VmZS9tYXBwZXInO1xuXG5pbXBvcnQgeyBJTWFwcGluZyB9IGZyb20gJ2NvcmUvY29tbW9uL21hcHBlci9JTWFwcGluZyc7XG5cbmltcG9ydCB7IERPTUFJTl9NQVBQSU5HX0lERU5USUZJRVJTIH0gZnJvbSAnY29yZS9Db3JlTW9kdWxlU3ltYm9scyc7XG5pbXBvcnQgeyBDb2ZmZWUgfSBmcm9tICdjb3JlL2RvbWFpbi9Db2ZmZWUvQ29mZmVlJztcblxuaW1wb3J0IHsgQ29mZmVlIGFzIENvZmZlZUVudGl0eSB9IGZyb20gJ2luZnJhc3RydWN0dXJlL2RhdGFiYXNlL2VudGl0aWVzL0NvZmZlZSc7XG5pbXBvcnQgeyBEQVRBQkFTRV9NQVBQSU5HX0lERU5USUZJRVJTIH0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvSW5mcmFzdHJ1Y3R1cmVNb2R1bGVTeW1ib2xzJztcblxuZXhwb3J0IGNvbnN0IENvZmZlZUVudGl0eVRvQ29mZmVlRG9tYWluID0gKCk6IElNYXBwaW5nID0+ICh7XG4gIGNvbmZpZ3VyZU1hcHBpbmcobWFwcGVyOiBNYXBwZXIpOiB2b2lkIHtcbiAgICBtYXBwZXIuY3JlYXRlTWFwPENvZmZlZUVudGl0eSwgQ29mZmVlPihcbiAgICAgIHtcbiAgICAgICAgZGVzdGluYXRpb246IERPTUFJTl9NQVBQSU5HX0lERU5USUZJRVJTLkNPRkZFRV9ET01BSU4sXG4gICAgICAgIHNvdXJjZTogREFUQUJBU0VfTUFQUElOR19JREVOVElGSUVSUy5DT0ZGRUVfRU5USVRZLFxuICAgICAgfSxcbiAgICAgIENvZmZlZVxuICAgICk7XG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJDb2ZmZWVFbnRpdHlUb0NvZmZlZURvbWFpbiIsImNvbmZpZ3VyZU1hcHBpbmciLCJtYXBwZXIiLCJjcmVhdGVNYXAiLCJkZXN0aW5hdGlvbiIsIkRPTUFJTl9NQVBQSU5HX0lERU5USUZJRVJTIiwiQ09GRkVFX0RPTUFJTiIsInNvdXJjZSIsIkRBVEFCQVNFX01BUFBJTkdfSURFTlRJRklFUlMiLCJDT0ZGRUVfRU5USVRZIiwiQ29mZmVlIl0sIm1hcHBpbmdzIjoiOzs7OytCQVVhQTs7YUFBQUE7O21DQU44Qjt3QkFDcEI7NkNBR3NCO0FBRXRDLE1BQU1BLDZCQUE2QixJQUFpQixDQUFBO1FBQ3pEQyxrQkFBaUJDLE1BQWMsRUFBUTtZQUNyQ0EsT0FBT0MsU0FBUyxDQUNkO2dCQUNFQyxhQUFhQyw2Q0FBMEIsQ0FBQ0MsYUFBYTtnQkFDckRDLFFBQVFDLHlEQUE0QixDQUFDQyxhQUFhO1lBQ3BELEdBQ0FDLGNBQU07UUFFVjtJQUNGLENBQUEifQ==