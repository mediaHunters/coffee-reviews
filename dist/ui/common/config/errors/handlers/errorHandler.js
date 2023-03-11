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

// src/ui/common/config/errors/handlers/errorHandler.ts
var errorHandler_exports = {};
__export(errorHandler_exports, {
  errorHandler: () => errorHandler
});
module.exports = __toCommonJS(errorHandler_exports);
var import_http_status_codes = require("http-status-codes");

// src/core/common/errors/BaseError.ts
var BaseError = class {
  constructor(code, message = "", name = "") {
    this.code = code;
    this.message = message;
    this.name = name;
  }
};

// src/core/common/errors/CoreError.ts
var CoreError = class extends BaseError {
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

// src/ui/common/config/errors/models/ErrorResponse.ts
var ErrorResponse = class {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }
};

// src/ui/common/config/errors/handlers/errorHandler.ts
var errorHandler = (app) => app.use(
  (error, req, res, next) => {
    next();
    switch (error.constructor) {
      case UserInterfaceError:
        return res.status(error.status).json(new ErrorResponse(error.code, error.message));
      case CoreError:
        return res.status(import_http_status_codes.UNPROCESSABLE_ENTITY).json(new ErrorResponse(error.code, error.message));
      case BaseError:
        return res.status(import_http_status_codes.NOT_FOUND).json(new ErrorResponse(error.code, error.message));
      default:
        return res.status(import_http_status_codes.INTERNAL_SERVER_ERROR).json(
          new ErrorResponse(import_http_status_codes.INTERNAL_SERVER_ERROR.toString(), error.message)
        );
    }
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  errorHandler
});
//# sourceMappingURL=errorHandler.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorHandler", {
    enumerable: true,
    get: ()=>errorHandler
});
const _httpStatusCodes = require("http-status-codes");
const _baseError = require("../../../../../core/common/errors/BaseError");
const _coreError = require("../../../../../core/common/errors/CoreError");
const _userInterfaceError = require("../UserInterfaceError");
const _errorResponse = require("../models/ErrorResponse");
const errorHandler = (app)=>app.use((error, req, res, next)=>{
        next();
        switch(error.constructor){
            case _userInterfaceError.UserInterfaceError:
                return res.status(error.status).json(new _errorResponse.ErrorResponse(error.code, error.message));
            case _coreError.CoreError:
                return res.status(_httpStatusCodes.UNPROCESSABLE_ENTITY).json(new _errorResponse.ErrorResponse(error.code, error.message));
            case _baseError.BaseError:
                return res.status(_httpStatusCodes.NOT_FOUND).json(new _errorResponse.ErrorResponse(error.code, error.message));
            default:
                return res.status(_httpStatusCodes.INTERNAL_SERVER_ERROR).json(new _errorResponse.ErrorResponse(_httpStatusCodes.INTERNAL_SERVER_ERROR.toString(), error.message));
        }
    });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy91aS9jb21tb24vY29uZmlnL2Vycm9ycy9oYW5kbGVycy9lcnJvckhhbmRsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwbGljYXRpb24sIE5leHRGdW5jdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcblxuaW1wb3J0IHtcbiAgSU5URVJOQUxfU0VSVkVSX0VSUk9SLFxuICBOT1RfRk9VTkQsXG4gIFVOUFJPQ0VTU0FCTEVfRU5USVRZLFxufSBmcm9tICdodHRwLXN0YXR1cy1jb2Rlcyc7XG5cbmltcG9ydCB7IEJhc2VFcnJvciB9IGZyb20gJ2NvcmUvY29tbW9uL2Vycm9ycy9CYXNlRXJyb3InO1xuaW1wb3J0IHsgQ29yZUVycm9yIH0gZnJvbSAnY29yZS9jb21tb24vZXJyb3JzL0NvcmVFcnJvcic7XG5pbXBvcnQgeyBVc2VySW50ZXJmYWNlRXJyb3IgfSBmcm9tICd1aS9jb21tb24vY29uZmlnL2Vycm9ycy9Vc2VySW50ZXJmYWNlRXJyb3InO1xuaW1wb3J0IHsgRXJyb3JSZXNwb25zZSB9IGZyb20gJ3VpL2NvbW1vbi9jb25maWcvZXJyb3JzL21vZGVscy9FcnJvclJlc3BvbnNlJztcblxuZXhwb3J0IGNvbnN0IGVycm9ySGFuZGxlciA9IChhcHA6IEFwcGxpY2F0aW9uKSA9PlxuICBhcHAudXNlKFxuICAgIChlcnJvcjogQmFzZUVycm9yLCByZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICAgICAgbmV4dCgpO1xuICAgICAgc3dpdGNoIChlcnJvci5jb25zdHJ1Y3Rvcikge1xuICAgICAgICBjYXNlIFVzZXJJbnRlcmZhY2VFcnJvcjpcbiAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgICAuc3RhdHVzKChlcnJvciBhcyBVc2VySW50ZXJmYWNlRXJyb3IpLnN0YXR1cylcbiAgICAgICAgICAgIC5qc29uKG5ldyBFcnJvclJlc3BvbnNlKGVycm9yLmNvZGUsIGVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgY2FzZSBDb3JlRXJyb3I6XG4gICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgICAgLnN0YXR1cyhVTlBST0NFU1NBQkxFX0VOVElUWSlcbiAgICAgICAgICAgIC5qc29uKG5ldyBFcnJvclJlc3BvbnNlKGVycm9yLmNvZGUsIGVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgY2FzZSBCYXNlRXJyb3I6XG4gICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgICAgLnN0YXR1cyhOT1RfRk9VTkQpXG4gICAgICAgICAgICAuanNvbihuZXcgRXJyb3JSZXNwb25zZShlcnJvci5jb2RlLCBlcnJvci5tZXNzYWdlKSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgICAgLnN0YXR1cyhJTlRFUk5BTF9TRVJWRVJfRVJST1IpXG4gICAgICAgICAgICAuanNvbihcbiAgICAgICAgICAgICAgbmV3IEVycm9yUmVzcG9uc2UoSU5URVJOQUxfU0VSVkVSX0VSUk9SLnRvU3RyaW5nKCksIGVycm9yLm1lc3NhZ2UpXG4gICAgICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbiJdLCJuYW1lcyI6WyJlcnJvckhhbmRsZXIiLCJhcHAiLCJ1c2UiLCJlcnJvciIsInJlcSIsInJlcyIsIm5leHQiLCJjb25zdHJ1Y3RvciIsIlVzZXJJbnRlcmZhY2VFcnJvciIsInN0YXR1cyIsImpzb24iLCJFcnJvclJlc3BvbnNlIiwiY29kZSIsIm1lc3NhZ2UiLCJDb3JlRXJyb3IiLCJVTlBST0NFU1NBQkxFX0VOVElUWSIsIkJhc2VFcnJvciIsIk5PVF9GT1VORCIsIklOVEVSTkFMX1NFUlZFUl9FUlJPUiIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7OytCQWFhQTs7YUFBQUE7O2lDQVBOOzJCQUVtQjsyQkFDQTtvQ0FDUzsrQkFDTDtBQUV2QixNQUFNQSxlQUFlLENBQUNDLE1BQzNCQSxJQUFJQyxHQUFHLENBQ0wsQ0FBQ0MsT0FBa0JDLEtBQWNDLEtBQWVDLE9BQXVCO1FBQ3JFQTtRQUNBLE9BQVFILE1BQU1JLFdBQVc7WUFDdkIsS0FBS0Msc0NBQWtCO2dCQUNyQixPQUFPSCxJQUNKSSxNQUFNLENBQUMsQUFBQ04sTUFBNkJNLE1BQU0sRUFDM0NDLElBQUksQ0FBQyxJQUFJQyw0QkFBYSxDQUFDUixNQUFNUyxJQUFJLEVBQUVULE1BQU1VLE9BQU87WUFDckQsS0FBS0Msb0JBQVM7Z0JBQ1osT0FBT1QsSUFDSkksTUFBTSxDQUFDTSxxQ0FBb0IsRUFDM0JMLElBQUksQ0FBQyxJQUFJQyw0QkFBYSxDQUFDUixNQUFNUyxJQUFJLEVBQUVULE1BQU1VLE9BQU87WUFDckQsS0FBS0csb0JBQVM7Z0JBQ1osT0FBT1gsSUFDSkksTUFBTSxDQUFDUSwwQkFBUyxFQUNoQlAsSUFBSSxDQUFDLElBQUlDLDRCQUFhLENBQUNSLE1BQU1TLElBQUksRUFBRVQsTUFBTVUsT0FBTztZQUNyRDtnQkFDRSxPQUFPUixJQUNKSSxNQUFNLENBQUNTLHNDQUFxQixFQUM1QlIsSUFBSSxDQUNILElBQUlDLDRCQUFhLENBQUNPLHNDQUFxQixDQUFDQyxRQUFRLElBQUloQixNQUFNVSxPQUFPO1FBRXpFO0lBQ0YifQ==
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6
