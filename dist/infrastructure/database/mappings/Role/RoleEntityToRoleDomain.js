"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RoleEntityToRoleDomain", {
    enumerable: true,
    get: ()=>RoleEntityToRoleDomain
});
const _role = require("../../../../core/domain/Role/Role");
const _coreModuleSymbols = require("../../../../core/CoreModuleSymbols");
const _infrastructureModuleSymbols = require("../../../InfrastructureModuleSymbols");
const RoleEntityToRoleDomain = ()=>({
        configureMapping (mapper) {
            mapper.createMap({
                destination: _coreModuleSymbols.DOMAIN_MAPPING_IDENTIFIERS.ROLE_DOMAIN,
                source: _infrastructureModuleSymbols.DATABASE_MAPPING_IDENTIFIERS.ROLE_ENTITY
            }, _role.Role);
        }
    });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9tYXBwaW5ncy9Sb2xlL1JvbGVFbnRpdHlUb1JvbGVEb21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFwcGVyIH0gZnJvbSAnQHd1ZmUvbWFwcGVyJztcblxuaW1wb3J0IHsgSU1hcHBpbmcgfSBmcm9tICdjb3JlL2NvbW1vbi9tYXBwZXIvSU1hcHBpbmcnO1xuaW1wb3J0IHsgUm9sZSB9IGZyb20gJ2NvcmUvZG9tYWluL1JvbGUvUm9sZSc7XG5pbXBvcnQgeyBET01BSU5fTUFQUElOR19JREVOVElGSUVSUyB9IGZyb20gJ2NvcmUvQ29yZU1vZHVsZVN5bWJvbHMnO1xuaW1wb3J0IHsgREFUQUJBU0VfTUFQUElOR19JREVOVElGSUVSUyB9IGZyb20gJ2luZnJhc3RydWN0dXJlL0luZnJhc3RydWN0dXJlTW9kdWxlU3ltYm9scyc7XG5pbXBvcnQgeyBSb2xlIGFzIFJvbGVFbnRpdHkgfSBmcm9tICdpbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9lbnRpdGllcy9Sb2xlJztcblxuZXhwb3J0IGNvbnN0IFJvbGVFbnRpdHlUb1JvbGVEb21haW4gPSAoKTogSU1hcHBpbmcgPT4gKHtcbiAgY29uZmlndXJlTWFwcGluZyhtYXBwZXI6IE1hcHBlcik6IHZvaWQge1xuICAgIG1hcHBlci5jcmVhdGVNYXA8Um9sZUVudGl0eSwgUm9sZT4oXG4gICAgICB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiBET01BSU5fTUFQUElOR19JREVOVElGSUVSUy5ST0xFX0RPTUFJTixcbiAgICAgICAgc291cmNlOiBEQVRBQkFTRV9NQVBQSU5HX0lERU5USUZJRVJTLlJPTEVfRU5USVRZLFxuICAgICAgfSxcbiAgICAgIFJvbGVcbiAgICApO1xuICB9LFxufSk7XG4iXSwibmFtZXMiOlsiUm9sZUVudGl0eVRvUm9sZURvbWFpbiIsImNvbmZpZ3VyZU1hcHBpbmciLCJtYXBwZXIiLCJjcmVhdGVNYXAiLCJkZXN0aW5hdGlvbiIsIkRPTUFJTl9NQVBQSU5HX0lERU5USUZJRVJTIiwiUk9MRV9ET01BSU4iLCJzb3VyY2UiLCJEQVRBQkFTRV9NQVBQSU5HX0lERU5USUZJRVJTIiwiUk9MRV9FTlRJVFkiLCJSb2xlIl0sIm1hcHBpbmdzIjoiOzs7OytCQVFhQTs7YUFBQUE7O3NCQUxRO21DQUNzQjs2Q0FDRTtBQUd0QyxNQUFNQSx5QkFBeUIsSUFBaUIsQ0FBQTtRQUNyREMsa0JBQWlCQyxNQUFjLEVBQVE7WUFDckNBLE9BQU9DLFNBQVMsQ0FDZDtnQkFDRUMsYUFBYUMsNkNBQTBCLENBQUNDLFdBQVc7Z0JBQ25EQyxRQUFRQyx5REFBNEIsQ0FBQ0MsV0FBVztZQUNsRCxHQUNBQyxVQUFJO1FBRVI7SUFDRixDQUFBIn0=