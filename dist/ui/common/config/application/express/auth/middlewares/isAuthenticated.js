"use strict";
<<<<<<< HEAD
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/ui/common/config/application/express/auth/middlewares/isAuthenticated.ts
var isAuthenticated_exports = {};
__export(isAuthenticated_exports, {
  isAuthenticated: () => isAuthenticated
});
module.exports = __toCommonJS(isAuthenticated_exports);
var import_http_status_codes = require("http-status-codes");

// src/ui/common/config/application/express/auth/utils/getHttpContext.ts
var getCurrentUser = (request) => {
  const httpContext = Reflect.getMetadata(
    "inversify-express-utils:httpcontext",
    request
  );
  return httpContext.user;
};

// src/core/common/errors/BaseError.ts
var BaseError = class {
  constructor(code, message = "", name = "") {
    this.code = code;
    this.message = message;
    this.name = name;
  }
};

// src/ui/common/config/errors/UserInterfaceError.ts
var UserInterfaceError = class extends BaseError {
  constructor(status, code, message = "", name = "") {
    super(code, message, name);
    this.status = status;
    this.code = code;
    this.message = message;
    this.name = name;
  }
};

// src/ui/common/config/application/express/auth/middlewares/isAuthenticated.ts
var isAuthenticated = (config) => async (req, _res, next) => {
  const user = getCurrentUser(req);
  if (!user) {
    next(
      new UserInterfaceError(
        import_http_status_codes.UNAUTHORIZED,
        (0, import_http_status_codes.getStatusText)(import_http_status_codes.UNAUTHORIZED).toUpperCase()
      )
    );
    return;
  }
  const isAuthenticatedUser = await user.isAuthenticated();
  if (!isAuthenticatedUser) {
    next(
      new UserInterfaceError(
        import_http_status_codes.UNAUTHORIZED,
        (0, import_http_status_codes.getStatusText)(import_http_status_codes.UNAUTHORIZED).toUpperCase()
      )
    );
    return;
  }
  if (config) {
    const isInRole = await user.isInRole(config.role);
    if (!isInRole) {
      next(
        new UserInterfaceError(
          import_http_status_codes.FORBIDDEN,
          (0, import_http_status_codes.getStatusText)(import_http_status_codes.FORBIDDEN).toUpperCase()
        )
      );
      return;
    }
  }
  next();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  isAuthenticated
});
//# sourceMappingURL=isAuthenticated.js.map
=======
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
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6
