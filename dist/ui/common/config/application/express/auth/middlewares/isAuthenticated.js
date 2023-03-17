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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy91aS9jb21tb24vY29uZmlnL2FwcGxpY2F0aW9uL2V4cHJlc3MvYXV0aC9taWRkbGV3YXJlcy9pc0F1dGhlbnRpY2F0ZWQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcblxuaW1wb3J0IHsgRk9SQklEREVOLCBnZXRTdGF0dXNUZXh0LCBVTkFVVEhPUklaRUQgfSBmcm9tICdodHRwLXN0YXR1cy1jb2Rlcyc7XG5cbmltcG9ydCB7IGdldEN1cnJlbnRVc2VyIH0gZnJvbSAndWkvY29tbW9uL2NvbmZpZy9hcHBsaWNhdGlvbi9leHByZXNzL2F1dGgvdXRpbHMvZ2V0SHR0cENvbnRleHQnO1xuaW1wb3J0IHsgVXNlckludGVyZmFjZUVycm9yIH0gZnJvbSAndWkvY29tbW9uL2NvbmZpZy9lcnJvcnMvVXNlckludGVyZmFjZUVycm9yJztcblxuZXhwb3J0IGNvbnN0IGlzQXV0aGVudGljYXRlZCA9XG4gIChjb25maWc/OiB7IHJvbGU6IHN0cmluZyB9KSA9PlxuICBhc3luYyAoXG4gICAgcmVxOiBleHByZXNzLlJlcXVlc3QsXG4gICAgX3JlczogZXhwcmVzcy5SZXNwb25zZSxcbiAgICBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvblxuICApOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCB1c2VyID0gZ2V0Q3VycmVudFVzZXIocmVxKTtcbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIG5leHQoXG4gICAgICAgIG5ldyBVc2VySW50ZXJmYWNlRXJyb3IoXG4gICAgICAgICAgVU5BVVRIT1JJWkVELFxuICAgICAgICAgIGdldFN0YXR1c1RleHQoVU5BVVRIT1JJWkVEKS50b1VwcGVyQ2FzZSgpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaXNBdXRoZW50aWNhdGVkVXNlciA9IGF3YWl0IHVzZXIuaXNBdXRoZW50aWNhdGVkKCk7XG5cbiAgICBpZiAoIWlzQXV0aGVudGljYXRlZFVzZXIpIHtcbiAgICAgIG5leHQoXG4gICAgICAgIG5ldyBVc2VySW50ZXJmYWNlRXJyb3IoXG4gICAgICAgICAgVU5BVVRIT1JJWkVELFxuICAgICAgICAgIGdldFN0YXR1c1RleHQoVU5BVVRIT1JJWkVEKS50b1VwcGVyQ2FzZSgpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjb25maWcpIHtcbiAgICAgIGNvbnN0IGlzSW5Sb2xlID0gYXdhaXQgdXNlci5pc0luUm9sZShjb25maWcucm9sZSk7XG4gICAgICBpZiAoIWlzSW5Sb2xlKSB7XG4gICAgICAgIG5leHQoXG4gICAgICAgICAgbmV3IFVzZXJJbnRlcmZhY2VFcnJvcihcbiAgICAgICAgICAgIEZPUkJJRERFTixcbiAgICAgICAgICAgIGdldFN0YXR1c1RleHQoRk9SQklEREVOKS50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIG5leHQoKTtcbiAgfTtcbiJdLCJuYW1lcyI6WyJpc0F1dGhlbnRpY2F0ZWQiLCJjb25maWciLCJyZXEiLCJfcmVzIiwibmV4dCIsInVzZXIiLCJnZXRDdXJyZW50VXNlciIsIlVzZXJJbnRlcmZhY2VFcnJvciIsIlVOQVVUSE9SSVpFRCIsImdldFN0YXR1c1RleHQiLCJ0b1VwcGVyQ2FzZSIsImlzQXV0aGVudGljYXRlZFVzZXIiLCJpc0luUm9sZSIsInJvbGUiLCJGT1JCSURERU4iXSwibWFwcGluZ3MiOiI7Ozs7K0JBT2FBOzthQUFBQTs7aUNBTDBDO2dDQUV4QjtvQ0FDSTtBQUU1QixNQUFNQSxrQkFDWCxDQUFDQyxTQUNELE9BQ0VDLEtBQ0FDLE1BQ0FDLE9BQ2tCO1FBQ2xCLE1BQU1DLE9BQU9DLElBQUFBLDhCQUFjLEVBQUNKO1FBQzVCLElBQUksQ0FBQ0csTUFBTTtZQUNURCxLQUNFLElBQUlHLHNDQUFrQixDQUNwQkMsNkJBQVksRUFDWkMsSUFBQUEsOEJBQWEsRUFBQ0QsNkJBQVksRUFBRUUsV0FBVztZQUczQztRQUNGLENBQUM7UUFFRCxNQUFNQyxzQkFBc0IsTUFBTU4sS0FBS0wsZUFBZTtRQUV0RCxJQUFJLENBQUNXLHFCQUFxQjtZQUN4QlAsS0FDRSxJQUFJRyxzQ0FBa0IsQ0FDcEJDLDZCQUFZLEVBQ1pDLElBQUFBLDhCQUFhLEVBQUNELDZCQUFZLEVBQUVFLFdBQVc7WUFHM0M7UUFDRixDQUFDO1FBQ0QsSUFBSVQsUUFBUTtZQUNWLE1BQU1XLFdBQVcsTUFBTVAsS0FBS08sUUFBUSxDQUFDWCxPQUFPWSxJQUFJO1lBQ2hELElBQUksQ0FBQ0QsVUFBVTtnQkFDYlIsS0FDRSxJQUFJRyxzQ0FBa0IsQ0FDcEJPLDBCQUFTLEVBQ1RMLElBQUFBLDhCQUFhLEVBQUNLLDBCQUFTLEVBQUVKLFdBQVc7Z0JBR3hDO1lBQ0YsQ0FBQztRQUNILENBQUM7UUFDRE47SUFDRiJ9