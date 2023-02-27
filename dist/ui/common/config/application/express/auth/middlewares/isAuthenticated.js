"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isAuthenticated", {
    enumerable: true,
    get: ()=>isAuthenticated
});
const _httpStatusCodes = require("http-status-codes");
const _getHttpContext = require("../utils/getHttpContext");
const _userInterfaceError = require("../../../../errors/UserInterfaceError");
const isAuthenticated = (config)=>async (req, _res, next)=>{
        const user = (0, _getHttpContext.getCurrentUser)(req);
        // eslint-disable-next-line no-console
        if (!user) {
            next(new _userInterfaceError.UserInterfaceError(_httpStatusCodes.UNAUTHORIZED, (0, _httpStatusCodes.getStatusText)(_httpStatusCodes.UNAUTHORIZED).toUpperCase()));
            return;
        }
        const isAuthenticatedUser = await user.isAuthenticated();
        if (!isAuthenticatedUser) {
            next(new _userInterfaceError.UserInterfaceError(_httpStatusCodes.UNAUTHORIZED, (0, _httpStatusCodes.getStatusText)(_httpStatusCodes.UNAUTHORIZED).toUpperCase()));
            return;
        }
        if (config) {
            const isInRole = await user.isInRole(config.role);
            if (!isInRole) {
                next(new _userInterfaceError.UserInterfaceError(_httpStatusCodes.FORBIDDEN, (0, _httpStatusCodes.getStatusText)(_httpStatusCodes.FORBIDDEN).toUpperCase()));
                return;
            }
        }
        next();
    };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy91aS9jb21tb24vY29uZmlnL2FwcGxpY2F0aW9uL2V4cHJlc3MvYXV0aC9taWRkbGV3YXJlcy9pc0F1dGhlbnRpY2F0ZWQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcblxuaW1wb3J0IHsgRk9SQklEREVOLCBnZXRTdGF0dXNUZXh0LCBVTkFVVEhPUklaRUQgfSBmcm9tICdodHRwLXN0YXR1cy1jb2Rlcyc7XG5cbmltcG9ydCB7IGdldEN1cnJlbnRVc2VyIH0gZnJvbSAndWkvY29tbW9uL2NvbmZpZy9hcHBsaWNhdGlvbi9leHByZXNzL2F1dGgvdXRpbHMvZ2V0SHR0cENvbnRleHQnO1xuaW1wb3J0IHsgVXNlckludGVyZmFjZUVycm9yIH0gZnJvbSAndWkvY29tbW9uL2NvbmZpZy9lcnJvcnMvVXNlckludGVyZmFjZUVycm9yJztcblxuZXhwb3J0IGNvbnN0IGlzQXV0aGVudGljYXRlZCA9XG4gIChjb25maWc/OiB7IHJvbGU6IHN0cmluZyB9KSA9PlxuICBhc3luYyAoXG4gICAgcmVxOiBleHByZXNzLlJlcXVlc3QsXG4gICAgX3JlczogZXhwcmVzcy5SZXNwb25zZSxcbiAgICBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvblxuICApOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCB1c2VyID0gZ2V0Q3VycmVudFVzZXIocmVxKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGlmICghdXNlcikge1xuICAgICAgbmV4dChcbiAgICAgICAgbmV3IFVzZXJJbnRlcmZhY2VFcnJvcihcbiAgICAgICAgICBVTkFVVEhPUklaRUQsXG4gICAgICAgICAgZ2V0U3RhdHVzVGV4dChVTkFVVEhPUklaRUQpLnRvVXBwZXJDYXNlKClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpc0F1dGhlbnRpY2F0ZWRVc2VyID0gYXdhaXQgdXNlci5pc0F1dGhlbnRpY2F0ZWQoKTtcblxuICAgIGlmICghaXNBdXRoZW50aWNhdGVkVXNlcikge1xuICAgICAgbmV4dChcbiAgICAgICAgbmV3IFVzZXJJbnRlcmZhY2VFcnJvcihcbiAgICAgICAgICBVTkFVVEhPUklaRUQsXG4gICAgICAgICAgZ2V0U3RhdHVzVGV4dChVTkFVVEhPUklaRUQpLnRvVXBwZXJDYXNlKClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICBjb25zdCBpc0luUm9sZSA9IGF3YWl0IHVzZXIuaXNJblJvbGUoY29uZmlnLnJvbGUpO1xuICAgICAgaWYgKCFpc0luUm9sZSkge1xuICAgICAgICBuZXh0KFxuICAgICAgICAgIG5ldyBVc2VySW50ZXJmYWNlRXJyb3IoXG4gICAgICAgICAgICBGT1JCSURERU4sXG4gICAgICAgICAgICBnZXRTdGF0dXNUZXh0KEZPUkJJRERFTikudG9VcHBlckNhc2UoKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBuZXh0KCk7XG4gIH07XG4iXSwibmFtZXMiOlsiaXNBdXRoZW50aWNhdGVkIiwiY29uZmlnIiwicmVxIiwiX3JlcyIsIm5leHQiLCJ1c2VyIiwiZ2V0Q3VycmVudFVzZXIiLCJVc2VySW50ZXJmYWNlRXJyb3IiLCJVTkFVVEhPUklaRUQiLCJnZXRTdGF0dXNUZXh0IiwidG9VcHBlckNhc2UiLCJpc0F1dGhlbnRpY2F0ZWRVc2VyIiwiaXNJblJvbGUiLCJyb2xlIiwiRk9SQklEREVOIl0sIm1hcHBpbmdzIjoiOzs7OytCQU9hQTs7YUFBQUE7O2lDQUwwQztnQ0FFeEI7b0NBQ0k7QUFFNUIsTUFBTUEsa0JBQ1gsQ0FBQ0MsU0FDRCxPQUNFQyxLQUNBQyxNQUNBQyxPQUNrQjtRQUNsQixNQUFNQyxPQUFPQyxJQUFBQSw4QkFBYyxFQUFDSjtRQUM1QixzQ0FBc0M7UUFDdEMsSUFBSSxDQUFDRyxNQUFNO1lBQ1RELEtBQ0UsSUFBSUcsc0NBQWtCLENBQ3BCQyw2QkFBWSxFQUNaQyxJQUFBQSw4QkFBYSxFQUFDRCw2QkFBWSxFQUFFRSxXQUFXO1lBRzNDO1FBQ0YsQ0FBQztRQUVELE1BQU1DLHNCQUFzQixNQUFNTixLQUFLTCxlQUFlO1FBRXRELElBQUksQ0FBQ1cscUJBQXFCO1lBQ3hCUCxLQUNFLElBQUlHLHNDQUFrQixDQUNwQkMsNkJBQVksRUFDWkMsSUFBQUEsOEJBQWEsRUFBQ0QsNkJBQVksRUFBRUUsV0FBVztZQUczQztRQUNGLENBQUM7UUFFRCxJQUFJVCxRQUFRO1lBQ1YsTUFBTVcsV0FBVyxNQUFNUCxLQUFLTyxRQUFRLENBQUNYLE9BQU9ZLElBQUk7WUFDaEQsSUFBSSxDQUFDRCxVQUFVO2dCQUNiUixLQUNFLElBQUlHLHNDQUFrQixDQUNwQk8sMEJBQVMsRUFDVEwsSUFBQUEsOEJBQWEsRUFBQ0ssMEJBQVMsRUFBRUosV0FBVztnQkFHeEM7WUFDRixDQUFDO1FBQ0gsQ0FBQztRQUNETjtJQUNGIn0=