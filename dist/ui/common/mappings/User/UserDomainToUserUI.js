"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserDomainToUserUI", {
    enumerable: true,
    get: ()=>UserDomainToUserUI
});
const _user = require("../../../../core/domain/User/User");
const _coreModuleSymbols = require("../../../../core/CoreModuleSymbols");
const _uimoduleSymbols = require("../../../UIModuleSymbols");
const UserDomainToUserUI = ()=>({
        configureMapping (mapper) {
            mapper.createMap({
                destination: _uimoduleSymbols.UI_MAPPINGS_IDENTIFIERS.USER_UI,
                source: _coreModuleSymbols.DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN
            }, _user.User);
        }
    });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9jb21tb24vbWFwcGluZ3MvVXNlci9Vc2VyRG9tYWluVG9Vc2VyVUkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFwcGVyIH0gZnJvbSAnQHd1ZmUvbWFwcGVyJztcblxuaW1wb3J0IHsgSU1hcHBpbmcgfSBmcm9tICdjb3JlL2NvbW1vbi9tYXBwZXIvSU1hcHBpbmcnO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnY29yZS9kb21haW4vVXNlci9Vc2VyJztcbmltcG9ydCB7IERPTUFJTl9NQVBQSU5HX0lERU5USUZJRVJTIH0gZnJvbSAnY29yZS9Db3JlTW9kdWxlU3ltYm9scyc7XG5cbmltcG9ydCB7IFVzZXIgYXMgVXNlclVJIH0gZnJvbSAndWkvY29tbW9uL21vZGVscy9Vc2VyJztcbmltcG9ydCB7IFVJX01BUFBJTkdTX0lERU5USUZJRVJTIH0gZnJvbSAndWkvVUlNb2R1bGVTeW1ib2xzJztcblxuZXhwb3J0IGNvbnN0IFVzZXJEb21haW5Ub1VzZXJVSSA9ICgpOiBJTWFwcGluZyA9PiAoe1xuICBjb25maWd1cmVNYXBwaW5nKG1hcHBlcjogTWFwcGVyKTogdm9pZCB7XG4gICAgbWFwcGVyLmNyZWF0ZU1hcDxVc2VyLCBVc2VyVUk+KFxuICAgICAge1xuICAgICAgICBkZXN0aW5hdGlvbjogVUlfTUFQUElOR1NfSURFTlRJRklFUlMuVVNFUl9VSSxcbiAgICAgICAgc291cmNlOiBET01BSU5fTUFQUElOR19JREVOVElGSUVSUy5VU0VSX0RPTUFJTixcbiAgICAgIH0sXG4gICAgICBVc2VyXG4gICAgKTtcbiAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbIlVzZXJEb21haW5Ub1VzZXJVSSIsImNvbmZpZ3VyZU1hcHBpbmciLCJtYXBwZXIiLCJjcmVhdGVNYXAiLCJkZXN0aW5hdGlvbiIsIlVJX01BUFBJTkdTX0lERU5USUZJRVJTIiwiVVNFUl9VSSIsInNvdXJjZSIsIkRPTUFJTl9NQVBQSU5HX0lERU5USUZJRVJTIiwiVVNFUl9ET01BSU4iLCJVc2VyIl0sIm1hcHBpbmdzIjoiOzs7OytCQVVhQTs7YUFBQUE7O3NCQU5RO21DQUNzQjtpQ0FHSDtBQUVqQyxNQUFNQSxxQkFBcUIsSUFBaUIsQ0FBQTtRQUNqREMsa0JBQWlCQyxNQUFjLEVBQVE7WUFDckNBLE9BQU9DLFNBQVMsQ0FDZDtnQkFDRUMsYUFBYUMsd0NBQXVCLENBQUNDLE9BQU87Z0JBQzVDQyxRQUFRQyw2Q0FBMEIsQ0FBQ0MsV0FBVztZQUNoRCxHQUNBQyxVQUFJO1FBRVI7SUFDRixDQUFBIn0=