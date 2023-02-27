"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ApplicationAuthProvider", {
    enumerable: true,
    get: ()=>ApplicationAuthProvider
});
const _inversify = require("inversify");
const _user = require("../../../../../models/User");
const _jwttokenUtil = require("../../../common/auth/utils/JWTTokenUtil");
const _uimoduleSymbols = require("../../../../../../UIModuleSymbols");
const _coreModuleSymbols = require("../../../../../../../core/CoreModuleSymbols");
const _fetchUserQuery = require("../../../../../../../core/applicationServices/User/requests/query/FetchUserQuery");
const _userService = require("../../../../../../../core/applicationServices/User/UserService");
const _principal = require("../models/Principal");
var __decorate = (void 0) && (void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (void 0) && (void 0).__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let ApplicationAuthProvider = class ApplicationAuthProvider {
    async getUser(req, res, next) {
        const token = this.jwtTokenUtil.getTokenFromHeaders(req.headers);
        if (!token) {
            return new _principal.Principal(undefined);
        }
        const tokenData = await this.jwtTokenUtil.decodeToken(token);
        if (!tokenData) {
            return new _principal.Principal(undefined);
        }
        const { user  } = tokenData;
        try {
            const existingUser = await this.userService.fetchUser(new _fetchUserQuery.FetchUserQuery(user.id));
            if (!existingUser) {
                return new _principal.Principal(undefined);
            }
            return new _principal.Principal(new _user.User(user.id, user.nickname, user.email, user.role));
        } catch (error) {
            next(error);
            return new _principal.Principal(undefined);
        }
    }
};
__decorate([
    (0, _inversify.inject)(_coreModuleSymbols.DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.USER_SERVICE),
    __metadata("design:type", typeof _userService.UserService === "undefined" ? Object : _userService.UserService)
], ApplicationAuthProvider.prototype, "userService", void 0);
__decorate([
    (0, _inversify.inject)(_uimoduleSymbols.UI_APPLICATION_IDENTIFIERS.JWT_TOKEN_UTIL),
    __metadata("design:type", typeof _jwttokenUtil.JWTTokenUtil === "undefined" ? Object : _jwttokenUtil.JWTTokenUtil)
], ApplicationAuthProvider.prototype, "jwtTokenUtil", void 0);
ApplicationAuthProvider = __decorate([
    (0, _inversify.injectable)()
], ApplicationAuthProvider);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy91aS9jb21tb24vY29uZmlnL2FwcGxpY2F0aW9uL2V4cHJlc3MvYXV0aC9taWRkbGV3YXJlcy9BcHBsaWNhdGlvbkF1dGhQcm92aWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QsIGluamVjdGFibGUgfSBmcm9tICdpbnZlcnNpZnknO1xuaW1wb3J0IHsgaW50ZXJmYWNlcyB9IGZyb20gJ2ludmVyc2lmeS1leHByZXNzLXV0aWxzJztcbmltcG9ydCB7IE5leHRGdW5jdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJ3VpL2NvbW1vbi9tb2RlbHMvVXNlcic7XG5pbXBvcnQgeyBKV1RUb2tlblV0aWwgfSBmcm9tICd1aS9jb21tb24vY29uZmlnL2FwcGxpY2F0aW9uL2NvbW1vbi9hdXRoL3V0aWxzL0pXVFRva2VuVXRpbCc7XG5pbXBvcnQgeyBVSV9BUFBMSUNBVElPTl9JREVOVElGSUVSUyB9IGZyb20gJ3VpL1VJTW9kdWxlU3ltYm9scyc7XG5pbXBvcnQgeyBUb2tlblBheWxvYWQgfSBmcm9tICd1aS9jb21tb24vY29uZmlnL2FwcGxpY2F0aW9uL2V4cHJlc3MvYXV0aC90eXBlcy9Ub2tlblBheWxvYWQnO1xuXG5pbXBvcnQgeyBET01BSU5fQVBQTElDQVRJT05fU0VSVklDRV9JREVOVElGSUVSUyB9IGZyb20gJ2NvcmUvQ29yZU1vZHVsZVN5bWJvbHMnO1xuaW1wb3J0IHsgRmV0Y2hVc2VyUXVlcnkgfSBmcm9tICdjb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvVXNlci9yZXF1ZXN0cy9xdWVyeS9GZXRjaFVzZXJRdWVyeSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJ2NvcmUvYXBwbGljYXRpb25TZXJ2aWNlcy9Vc2VyL1VzZXJTZXJ2aWNlJztcbmltcG9ydCB7IFByaW5jaXBhbCB9IGZyb20gJ3VpL2NvbW1vbi9jb25maWcvYXBwbGljYXRpb24vZXhwcmVzcy9hdXRoL21vZGVscy9QcmluY2lwYWwnO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb25BdXRoUHJvdmlkZXIgaW1wbGVtZW50cyBpbnRlcmZhY2VzLkF1dGhQcm92aWRlciB7XG4gIEBpbmplY3QoRE9NQUlOX0FQUExJQ0FUSU9OX1NFUlZJQ0VfSURFTlRJRklFUlMuVVNFUl9TRVJWSUNFKVxuICBwcml2YXRlIHJlYWRvbmx5IHVzZXJTZXJ2aWNlITogVXNlclNlcnZpY2U7XG5cbiAgQGluamVjdChVSV9BUFBMSUNBVElPTl9JREVOVElGSUVSUy5KV1RfVE9LRU5fVVRJTClcbiAgcHJpdmF0ZSByZWFkb25seSBqd3RUb2tlblV0aWwhOiBKV1RUb2tlblV0aWw7XG5cbiAgcHVibGljIGFzeW5jIGdldFVzZXIoXG4gICAgcmVxOiBSZXF1ZXN0LFxuICAgIHJlczogUmVzcG9uc2UsXG4gICAgbmV4dDogTmV4dEZ1bmN0aW9uXG4gICk6IFByb21pc2U8aW50ZXJmYWNlcy5QcmluY2lwYWw+IHtcbiAgICBjb25zdCB0b2tlbiA9IHRoaXMuand0VG9rZW5VdGlsLmdldFRva2VuRnJvbUhlYWRlcnMocmVxLmhlYWRlcnMpO1xuICAgIGlmICghdG9rZW4pIHtcbiAgICAgIHJldHVybiBuZXcgUHJpbmNpcGFsKHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIGNvbnN0IHRva2VuRGF0YSA9IGF3YWl0IHRoaXMuand0VG9rZW5VdGlsLmRlY29kZVRva2VuPFRva2VuUGF5bG9hZD4odG9rZW4pO1xuXG4gICAgaWYgKCF0b2tlbkRhdGEpIHtcbiAgICAgIHJldHVybiBuZXcgUHJpbmNpcGFsKHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgY29uc3QgeyB1c2VyIH0gPSB0b2tlbkRhdGE7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuZmV0Y2hVc2VyKFxuICAgICAgICBuZXcgRmV0Y2hVc2VyUXVlcnkodXNlci5pZClcbiAgICAgICk7XG5cbiAgICAgIGlmICghZXhpc3RpbmdVc2VyKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJpbmNpcGFsKHVuZGVmaW5lZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJpbmNpcGFsKFxuICAgICAgICBuZXcgVXNlcih1c2VyLmlkLCB1c2VyLm5pY2tuYW1lLCB1c2VyLmVtYWlsLCB1c2VyLnJvbGUpXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBuZXh0KGVycm9yKTtcbiAgICAgIHJldHVybiBuZXcgUHJpbmNpcGFsKHVuZGVmaW5lZCk7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiQXBwbGljYXRpb25BdXRoUHJvdmlkZXIiLCJnZXRVc2VyIiwicmVxIiwicmVzIiwibmV4dCIsInRva2VuIiwiand0VG9rZW5VdGlsIiwiZ2V0VG9rZW5Gcm9tSGVhZGVycyIsImhlYWRlcnMiLCJQcmluY2lwYWwiLCJ1bmRlZmluZWQiLCJ0b2tlbkRhdGEiLCJkZWNvZGVUb2tlbiIsInVzZXIiLCJleGlzdGluZ1VzZXIiLCJ1c2VyU2VydmljZSIsImZldGNoVXNlciIsIkZldGNoVXNlclF1ZXJ5IiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJlbWFpbCIsInJvbGUiLCJlcnJvciIsImluamVjdCIsIkRPTUFJTl9BUFBMSUNBVElPTl9TRVJWSUNFX0lERU5USUZJRVJTIiwiVVNFUl9TRVJWSUNFIiwiVUlfQVBQTElDQVRJT05fSURFTlRJRklFUlMiLCJKV1RfVE9LRU5fVVRJTCIsImluamVjdGFibGUiXSwibWFwcGluZ3MiOiI7Ozs7K0JBZWFBOzthQUFBQTs7MkJBZnNCO3NCQUlkOzhCQUNRO2lDQUNjO21DQUdZO2dDQUN4Qjs2QkFDSDsyQkFDRjs7Ozs7Ozs7OztJQUdiQSwwQkFBTjtJQU9MLE1BQWFDLFFBQ1hDLEdBQVksRUFDWkMsR0FBYSxFQUNiQyxJQUFrQixFQUNhO1FBQy9CLE1BQU1DLFFBQVEsSUFBSSxDQUFDQyxZQUFZLENBQUNDLG1CQUFtQixDQUFDTCxJQUFJTSxPQUFPO1FBQy9ELElBQUksQ0FBQ0gsT0FBTztZQUNWLE9BQU8sSUFBSUksb0JBQVMsQ0FBQ0M7UUFDdkIsQ0FBQztRQUNELE1BQU1DLFlBQVksTUFBTSxJQUFJLENBQUNMLFlBQVksQ0FBQ00sV0FBVyxDQUFlUDtRQUVwRSxJQUFJLENBQUNNLFdBQVc7WUFDZCxPQUFPLElBQUlGLG9CQUFTLENBQUNDO1FBQ3ZCLENBQUM7UUFFRCxNQUFNLEVBQUVHLEtBQUksRUFBRSxHQUFHRjtRQUNqQixJQUFJO1lBQ0YsTUFBTUcsZUFBZSxNQUFNLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxTQUFTLENBQ25ELElBQUlDLDhCQUFjLENBQUNKLEtBQUtLLEVBQUU7WUFHNUIsSUFBSSxDQUFDSixjQUFjO2dCQUNqQixPQUFPLElBQUlMLG9CQUFTLENBQUNDO1lBQ3ZCLENBQUM7WUFFRCxPQUFPLElBQUlELG9CQUFTLENBQ2xCLElBQUlVLFVBQUksQ0FBQ04sS0FBS0ssRUFBRSxFQUFFTCxLQUFLTyxRQUFRLEVBQUVQLEtBQUtRLEtBQUssRUFBRVIsS0FBS1MsSUFBSTtRQUUxRCxFQUFFLE9BQU9DLE9BQU87WUFDZG5CLEtBQUttQjtZQUNMLE9BQU8sSUFBSWQsb0JBQVMsQ0FBQ0M7UUFDdkI7SUFDRjtBQUNGOztJQXZDR2MsSUFBQUEsaUJBQU0sRUFBQ0MseURBQXNDLENBQUNDLFlBQVk7cUNBQzVCLHdCQUFXLDRCQUFYLHdCQUFXO0dBRi9CMUI7O0lBSVZ3QixJQUFBQSxpQkFBTSxFQUFDRywyQ0FBMEIsQ0FBQ0MsY0FBYztxQ0FDakIsMEJBQVksNEJBQVosMEJBQVk7R0FMakM1QjtBQUFBQTtJQURaNkIsSUFBQUEscUJBQVU7R0FDRTdCIn0=