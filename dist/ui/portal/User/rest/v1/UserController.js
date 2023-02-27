"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserController", {
    enumerable: true,
    get: ()=>UserController
});
const _httpStatusCodes = require("http-status-codes");
const _inversify = require("inversify");
const _inversifyExpressUtils = require("inversify-express-utils");
const _express = require("express");
const _iuserService = require("../../../../../core/applicationServices/User/IUserService");
const _removeUserCommand = require("../../../../../core/applicationServices/User/requests/command/RemoveUserCommand");
const _coreModuleSymbols = require("../../../../../core/CoreModuleSymbols");
const _removeUserCommandBody = require("./requests/command/RemoveUserCommandBody");
const _isAuthenticated = require("../../../../common/config/application/express/auth/middlewares/isAuthenticated");
const _userRole = require("../../../../../core/domain/User/UserRole");
const _getHttpContext = require("../../../../common/config/application/express/auth/utils/getHttpContext");
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
let UserController = class UserController extends _inversifyExpressUtils.BaseHttpController {
    constructor(UserService){
        super();
        this.UserService = UserService;
    }
    async get() {
        return this.json(_httpStatusCodes.OK);
    }
    async getCurrentUser(req) {
        const user = (0, _getHttpContext.getCurrentUser)(req);
        return this.json(user);
    }
    async Remove({ id  }) {
        return this.UserService.removeUser(new _removeUserCommand.RemoveUserCommand(id));
    }
};
__decorate([
    (0, _inversifyExpressUtils.httpGet)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [])
], UserController.prototype, "get", null);
__decorate([
    (0, _inversifyExpressUtils.httpGet)('/currentUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _express.Request === "undefined" ? Object : _express.Request
    ])
], UserController.prototype, "getCurrentUser", null);
__decorate([
    (0, _inversifyExpressUtils.httpPost)('/removeUser', (0, _isAuthenticated.isAuthenticated)({
        role: _userRole.USER_ROLE.MEMBER
    })),
    __param(0, (0, _inversifyExpressUtils.requestBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _removeUserCommandBody.RemoveUserCommandBody === "undefined" ? Object : _removeUserCommandBody.RemoveUserCommandBody
    ])
], UserController.prototype, "Remove", null);
UserController = __decorate([
    (0, _inversifyExpressUtils.controller)('/v1/user'),
    __param(0, (0, _inversify.inject)(_coreModuleSymbols.DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.USER_SERVICE)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _iuserService.IUserService === "undefined" ? Object : _iuserService.IUserService
    ])
], UserController);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy91aS9wb3J0YWwvVXNlci9yZXN0L3YxL1VzZXJDb250cm9sbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9LIH0gZnJvbSAnaHR0cC1zdGF0dXMtY29kZXMnO1xuXG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICdpbnZlcnNpZnknO1xuXG5pbXBvcnQge1xuICBCYXNlSHR0cENvbnRyb2xsZXIsXG4gIGNvbnRyb2xsZXIsXG4gIGh0dHBHZXQsXG4gIGh0dHBQb3N0LFxuICByZXF1ZXN0Qm9keSxcbn0gZnJvbSAnaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHMnO1xuXG5pbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnZXhwcmVzcyc7XG5cbmltcG9ydCB7IElVc2VyU2VydmljZSB9IGZyb20gJ2NvcmUvYXBwbGljYXRpb25TZXJ2aWNlcy9Vc2VyL0lVc2VyU2VydmljZSc7XG5pbXBvcnQgeyBSZW1vdmVVc2VyQ29tbWFuZCB9IGZyb20gJ2NvcmUvYXBwbGljYXRpb25TZXJ2aWNlcy9Vc2VyL3JlcXVlc3RzL2NvbW1hbmQvUmVtb3ZlVXNlckNvbW1hbmQnO1xuaW1wb3J0IHsgRE9NQUlOX0FQUExJQ0FUSU9OX1NFUlZJQ0VfSURFTlRJRklFUlMgfSBmcm9tICdjb3JlL0NvcmVNb2R1bGVTeW1ib2xzJztcblxuaW1wb3J0IHsgUmVtb3ZlVXNlckNvbW1hbmRCb2R5IH0gZnJvbSAndWkvcG9ydGFsL1VzZXIvcmVzdC92MS9yZXF1ZXN0cy9jb21tYW5kL1JlbW92ZVVzZXJDb21tYW5kQm9keSc7XG5pbXBvcnQgeyBpc0F1dGhlbnRpY2F0ZWQgfSBmcm9tICd1aS9jb21tb24vY29uZmlnL2FwcGxpY2F0aW9uL2V4cHJlc3MvYXV0aC9taWRkbGV3YXJlcy9pc0F1dGhlbnRpY2F0ZWQnO1xuaW1wb3J0IHsgVVNFUl9ST0xFIH0gZnJvbSAnY29yZS9kb21haW4vVXNlci9Vc2VyUm9sZSc7XG5pbXBvcnQgeyBnZXRDdXJyZW50VXNlciB9IGZyb20gJ3VpL2NvbW1vbi9jb25maWcvYXBwbGljYXRpb24vZXhwcmVzcy9hdXRoL3V0aWxzL2dldEh0dHBDb250ZXh0JztcblxuQGNvbnRyb2xsZXIoJy92MS91c2VyJylcbmV4cG9ydCBjbGFzcyBVc2VyQ29udHJvbGxlciBleHRlbmRzIEJhc2VIdHRwQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoRE9NQUlOX0FQUExJQ0FUSU9OX1NFUlZJQ0VfSURFTlRJRklFUlMuVVNFUl9TRVJWSUNFKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgVXNlclNlcnZpY2U6IElVc2VyU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgQGh0dHBHZXQoJy8nKVxuICBwdWJsaWMgYXN5bmMgZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLmpzb24oT0spO1xuICB9XG5cbiAgQGh0dHBHZXQoJy9jdXJyZW50VXNlcicpXG4gIHB1YmxpYyBhc3luYyBnZXRDdXJyZW50VXNlcihyZXE6IFJlcXVlc3QpIHtcbiAgICBjb25zdCB1c2VyID0gZ2V0Q3VycmVudFVzZXIocmVxKTtcblxuICAgIHJldHVybiB0aGlzLmpzb24odXNlcik7XG4gIH1cblxuICBAaHR0cFBvc3QoJy9yZW1vdmVVc2VyJywgaXNBdXRoZW50aWNhdGVkKHsgcm9sZTogVVNFUl9ST0xFLk1FTUJFUiB9KSlcbiAgcHVibGljIGFzeW5jIFJlbW92ZShAcmVxdWVzdEJvZHkoKSB7IGlkIH06IFJlbW92ZVVzZXJDb21tYW5kQm9keSkge1xuICAgIHJldHVybiB0aGlzLlVzZXJTZXJ2aWNlLnJlbW92ZVVzZXIobmV3IFJlbW92ZVVzZXJDb21tYW5kKGlkKSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJVc2VyQ29udHJvbGxlciIsIkJhc2VIdHRwQ29udHJvbGxlciIsImNvbnN0cnVjdG9yIiwiVXNlclNlcnZpY2UiLCJnZXQiLCJqc29uIiwiT0siLCJnZXRDdXJyZW50VXNlciIsInJlcSIsInVzZXIiLCJSZW1vdmUiLCJpZCIsInJlbW92ZVVzZXIiLCJSZW1vdmVVc2VyQ29tbWFuZCIsImh0dHBHZXQiLCJodHRwUG9zdCIsImlzQXV0aGVudGljYXRlZCIsInJvbGUiLCJVU0VSX1JPTEUiLCJNRU1CRVIiLCJyZXF1ZXN0Qm9keSIsImNvbnRyb2xsZXIiLCJpbmplY3QiLCJET01BSU5fQVBQTElDQVRJT05fU0VSVklDRV9JREVOVElGSUVSUyIsIlVTRVJfU0VSVklDRSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkF3QmFBOzthQUFBQTs7aUNBeEJNOzJCQUVJO3VDQVFoQjt5QkFFaUI7OEJBRUs7bUNBQ0s7bUNBQ3FCO3VDQUVqQjtpQ0FDTjswQkFDTjtnQ0FDSzs7Ozs7Ozs7Ozs7Ozs7O0lBR2xCQSxpQkFBTiw2QkFBNkJDLHlDQUFrQjtJQUNwREMsWUFFbUJDLFlBQ2pCO1FBQ0EsS0FBSzsyQkFGWUE7SUFHbkI7SUFFQSxNQUNhQyxNQUFNO1FBQ2pCLE9BQU8sSUFBSSxDQUFDQyxJQUFJLENBQUNDLG1CQUFFO0lBQ3JCO0lBRUEsTUFDYUMsZUFBZUMsR0FBWSxFQUFFO1FBQ3hDLE1BQU1DLE9BQU9GLElBQUFBLDhCQUFjLEVBQUNDO1FBRTVCLE9BQU8sSUFBSSxDQUFDSCxJQUFJLENBQUNJO0lBQ25CO0lBRUEsTUFDYUMsT0FBTyxBQUFlLEVBQUVDLEdBQUUsRUFBeUIsRUFBRTtRQUNoRSxPQUFPLElBQUksQ0FBQ1IsV0FBVyxDQUFDUyxVQUFVLENBQUMsSUFBSUMsb0NBQWlCLENBQUNGO0lBQzNEO0FBQ0Y7O0lBaEJHRyxJQUFBQSw4QkFBTyxFQUFDOzs7R0FSRWQ7O0lBYVZjLElBQUFBLDhCQUFPLEVBQUM7OztlQUN3QixnQkFBTyw0QkFBUCxnQkFBTzs7R0FkN0JkOztJQW9CVmUsSUFBQUEsK0JBQVEsRUFBQyxlQUFlQyxJQUFBQSxnQ0FBZSxFQUFDO1FBQUVDLE1BQU1DLG1CQUFTLENBQUNDLE1BQU07SUFBQztJQUM3Q0MsV0FBQUEsSUFBQUEsa0NBQVc7OztlQUFXLDRDQUFxQiw0QkFBckIsNENBQXFCOztHQXJCckRwQjtBQUFBQTtJQURacUIsSUFBQUEsaUNBQVUsRUFBQztJQUdQQyxXQUFBQSxJQUFBQSxpQkFBTSxFQUFDQyx5REFBc0MsQ0FBQ0MsWUFBWTs7O2VBQzdCLDBCQUFZLDRCQUFaLDBCQUFZOztHQUhqQ3hCIn0=