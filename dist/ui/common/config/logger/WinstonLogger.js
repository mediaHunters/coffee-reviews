"use strict";
<<<<<<< HEAD
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);

// src/ui/common/config/logger/WinstonLogger.ts
var WinstonLogger_exports = {};
__export(WinstonLogger_exports, {
  WinstonLogger: () => WinstonLogger
});
module.exports = __toCommonJS(WinstonLogger_exports);
var import_winston = require("winston");
var import_winston_daily_rotate_file = __toESM(require("winston-daily-rotate-file"));
var import_inversify = require("inversify");

// src/ui/common/config/logger/BaseLogger.ts
var BaseLogger = class {
  constructor(logger) {
    this.logger = logger;
  }
  getLogger() {
    return this.logger;
  }
};

// src/ui/UIModuleSymbols.ts
var UI_IDENTIFIERS = {
  UI_MAPPER: Symbol.for("UIMapper")
};
var UI_APPLICATION_IDENTIFIERS = {
  EXPRESS: Symbol.for("Express"),
  EXPRESS_ROUTER: Symbol.for("ExpressRouter"),
  EXPRESS_APPLICATION: Symbol.for("ExpressApplication"),
  INVERSIFY_APPLICATION: Symbol.for("InversifyExpressApplication"),
  JWT_TOKEN_UTIL: Symbol.for("JWTTokenUtil"),
  JWT_AUTHENTICATION_HANDLER: Symbol.for("JWTAuthenticationHandler"),
  LOGGER: Symbol.for("Logger"),
  LOGGER_FORMAT: Symbol.for("WinstonFormat"),
  LOGGER_WINSTON: Symbol.for("WinstonLogger")
};
var UI_MAPPINGS_IDENTIFIERS = {
  USER_UI: Symbol.for("UserUI")
};

// src/ui/common/config/consts/variables.ts
var import_dotenv = __toESM(require("dotenv"));
import_dotenv.default.config();
var APP_TOKEN_SECRET = process.env.APP_TOKEN_SECRET || "";
var APP_TOKEN_LIFE = process.env.APP_TOKEN_LIFE || "24h";
var PORT = process.env.PORT || "3000";
var LOG_LEVEL = process.env.LOG_LEVEL || "debug";
var SWAGGER_BASE_PATH = process.env.SWAGGER_BASE_PATH || "";
var { SWAGGER_HOST } = process.env;
var IS_DEVELOPMENT = process.env.NODE_ENV === "development";

// src/ui/common/config/logger/WinstonLogger.ts
var WinstonLogger = class extends BaseLogger {
  constructor(format, logger) {
    super(logger);
    this.format = format;
  }
  initialize() {
    const loggerConfig = {
      datePattern: "YYYY-MM-DD",
      dirname: "./logs",
      format: this.format,
      maxFiles: "14d",
      maxSize: "20m",
      zippedArchive: true
    };
    this.logger.add(
      new import_winston_daily_rotate_file.default({
        filename: "cr-%DATE%.info.log",
        level: "info",
        ...loggerConfig
      })
    );
    if (IS_DEVELOPMENT) {
      this.logger.add(
        new import_winston.transports.Console({
          format: import_winston.format.combine(import_winston.format.colorize(), this.format),
          handleExceptions: true,
          level: "debug"
        })
      );
    }
  }
  write(message) {
    this.logger.info(message);
  }
};
WinstonLogger = __decorateClass([
  (0, import_inversify.injectable)(),
  __decorateParam(0, (0, import_inversify.inject)(UI_APPLICATION_IDENTIFIERS.LOGGER_FORMAT)),
  __decorateParam(1, (0, import_inversify.inject)(UI_APPLICATION_IDENTIFIERS.LOGGER))
], WinstonLogger);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  WinstonLogger
});
//# sourceMappingURL=WinstonLogger.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "WinstonLogger", {
    enumerable: true,
    get: ()=>WinstonLogger
});
const _winston = require("winston");
const _logform = require("logform");
const _winstonDailyRotateFile = /*#__PURE__*/ _interopRequireDefault(require("winston-daily-rotate-file"));
const _inversify = require("inversify");
const _baseLogger = require("./BaseLogger");
const _uimoduleSymbols = require("../../../UIModuleSymbols");
const _variables = require("../consts/variables");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
let WinstonLogger = class WinstonLogger extends _baseLogger.BaseLogger {
    constructor(format, logger){
        super(logger);
        this.format = format;
    }
    initialize() {
        const loggerConfig = {
            datePattern: 'YYYY-MM-DD',
            dirname: './logs',
            format: this.format,
            maxFiles: '14d',
            maxSize: '20m',
            zippedArchive: true
        };
        this.logger.add(new _winstonDailyRotateFile.default({
            filename: 'cr-%DATE%.info.log',
            level: 'info',
            ...loggerConfig
        }));
        if (_variables.IS_DEVELOPMENT) {
            this.logger.add(new _winston.transports.Console({
                format: _winston.format.combine(_winston.format.colorize(), this.format),
                handleExceptions: true,
                level: 'debug'
            }));
        }
    }
    write(message) {
        this.logger.info(message);
    }
};
WinstonLogger = __decorate([
    (0, _inversify.injectable)(),
    __param(0, (0, _inversify.inject)(_uimoduleSymbols.UI_APPLICATION_IDENTIFIERS.LOGGER_FORMAT)),
    __param(1, (0, _inversify.inject)(_uimoduleSymbols.UI_APPLICATION_IDENTIFIERS.LOGGER)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _logform.Format === "undefined" ? Object : _logform.Format,
        typeof _winston.Logger === "undefined" ? Object : _winston.Logger
    ])
], WinstonLogger);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9jb21tb24vY29uZmlnL2xvZ2dlci9XaW5zdG9uTG9nZ2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdCBhcyB3aW5zdG9uRm9ybWF0LCBMb2dnZXIsIHRyYW5zcG9ydHMgfSBmcm9tICd3aW5zdG9uJztcbmltcG9ydCB7IEZvcm1hdCB9IGZyb20gJ2xvZ2Zvcm0nO1xuaW1wb3J0IERhaWx5Um90YXRlRmlsZSBmcm9tICd3aW5zdG9uLWRhaWx5LXJvdGF0ZS1maWxlJztcblxuaW1wb3J0IHsgaW5qZWN0LCBpbmplY3RhYmxlIH0gZnJvbSAnaW52ZXJzaWZ5JztcblxuaW1wb3J0IHsgQmFzZUxvZ2dlciB9IGZyb20gJ3VpL2NvbW1vbi9jb25maWcvbG9nZ2VyL0Jhc2VMb2dnZXInO1xuaW1wb3J0IHsgSUxvZ2dlciB9IGZyb20gJ3VpL2NvbW1vbi9jb25maWcvbG9nZ2VyL0lMb2dnZXInO1xuXG5pbXBvcnQgeyBVSV9BUFBMSUNBVElPTl9JREVOVElGSUVSUyB9IGZyb20gJ3VpL1VJTW9kdWxlU3ltYm9scyc7XG5pbXBvcnQgeyBJU19ERVZFTE9QTUVOVCB9IGZyb20gJ3VpL2NvbW1vbi9jb25maWcvY29uc3RzL3ZhcmlhYmxlcyc7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXaW5zdG9uTG9nZ2VyIGV4dGVuZHMgQmFzZUxvZ2dlcjxMb2dnZXI+IGltcGxlbWVudHMgSUxvZ2dlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0OiBGb3JtYXQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQGluamVjdChVSV9BUFBMSUNBVElPTl9JREVOVElGSUVSUy5MT0dHRVJfRk9STUFUKSBmb3JtYXQ6IEZvcm1hdCxcbiAgICBAaW5qZWN0KFVJX0FQUExJQ0FUSU9OX0lERU5USUZJRVJTLkxPR0dFUikgbG9nZ2VyOiBMb2dnZXJcbiAgKSB7XG4gICAgc3VwZXIobG9nZ2VyKTtcbiAgICB0aGlzLmZvcm1hdCA9IGZvcm1hdDtcbiAgfVxuXG4gIHB1YmxpYyBpbml0aWFsaXplKCk6IHZvaWQge1xuICAgIGNvbnN0IGxvZ2dlckNvbmZpZyA9IHtcbiAgICAgIGRhdGVQYXR0ZXJuOiAnWVlZWS1NTS1ERCcsXG4gICAgICBkaXJuYW1lOiAnLi9sb2dzJyxcbiAgICAgIGZvcm1hdDogdGhpcy5mb3JtYXQsXG4gICAgICBtYXhGaWxlczogJzE0ZCcsXG4gICAgICBtYXhTaXplOiAnMjBtJyxcbiAgICAgIHppcHBlZEFyY2hpdmU6IHRydWUsXG4gICAgfTtcblxuICAgIHRoaXMubG9nZ2VyLmFkZChcbiAgICAgIG5ldyBEYWlseVJvdGF0ZUZpbGUoe1xuICAgICAgICBmaWxlbmFtZTogJ2NyLSVEQVRFJS5pbmZvLmxvZycsXG4gICAgICAgIGxldmVsOiAnaW5mbycsXG4gICAgICAgIC4uLmxvZ2dlckNvbmZpZyxcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGlmIChJU19ERVZFTE9QTUVOVCkge1xuICAgICAgdGhpcy5sb2dnZXIuYWRkKFxuICAgICAgICBuZXcgdHJhbnNwb3J0cy5Db25zb2xlKHtcbiAgICAgICAgICBmb3JtYXQ6IHdpbnN0b25Gb3JtYXQuY29tYmluZSh3aW5zdG9uRm9ybWF0LmNvbG9yaXplKCksIHRoaXMuZm9ybWF0KSxcbiAgICAgICAgICBoYW5kbGVFeGNlcHRpb25zOiB0cnVlLFxuICAgICAgICAgIGxldmVsOiAnZGVidWcnLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKG1lc3NhZ2UpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiV2luc3RvbkxvZ2dlciIsIkJhc2VMb2dnZXIiLCJjb25zdHJ1Y3RvciIsImZvcm1hdCIsImxvZ2dlciIsImluaXRpYWxpemUiLCJsb2dnZXJDb25maWciLCJkYXRlUGF0dGVybiIsImRpcm5hbWUiLCJtYXhGaWxlcyIsIm1heFNpemUiLCJ6aXBwZWRBcmNoaXZlIiwiYWRkIiwiRGFpbHlSb3RhdGVGaWxlIiwiZmlsZW5hbWUiLCJsZXZlbCIsIklTX0RFVkVMT1BNRU5UIiwidHJhbnNwb3J0cyIsIkNvbnNvbGUiLCJ3aW5zdG9uRm9ybWF0IiwiY29tYmluZSIsImNvbG9yaXplIiwiaGFuZGxlRXhjZXB0aW9ucyIsIndyaXRlIiwibWVzc2FnZSIsImluZm8iLCJpbmplY3RhYmxlIiwiaW5qZWN0IiwiVUlfQVBQTElDQVRJT05fSURFTlRJRklFUlMiLCJMT0dHRVJfRk9STUFUIiwiTE9HR0VSIl0sIm1hcHBpbmdzIjoiOzs7OytCQWFhQTs7YUFBQUE7O3lCQWIrQzt5QkFDckM7NkVBQ0s7MkJBRU87NEJBRVI7aUNBR2dCOzJCQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdsQkEsZ0JBQU4sNEJBQTRCQyxzQkFBVTtJQUczQ0MsWUFDRSxBQUFrREMsTUFBYyxFQUNoRSxBQUEyQ0MsTUFBYyxDQUN6RDtRQUNBLEtBQUssQ0FBQ0E7UUFDTixJQUFJLENBQUNELE1BQU0sR0FBR0E7SUFDaEI7SUFFT0UsYUFBbUI7UUFDeEIsTUFBTUMsZUFBZTtZQUNuQkMsYUFBYTtZQUNiQyxTQUFTO1lBQ1RMLFFBQVEsSUFBSSxDQUFDQSxNQUFNO1lBQ25CTSxVQUFVO1lBQ1ZDLFNBQVM7WUFDVEMsZUFBZSxJQUFJO1FBQ3JCO1FBRUEsSUFBSSxDQUFDUCxNQUFNLENBQUNRLEdBQUcsQ0FDYixJQUFJQywrQkFBZSxDQUFDO1lBQ2xCQyxVQUFVO1lBQ1ZDLE9BQU87WUFDUCxHQUFHVCxZQUFZO1FBQ2pCO1FBR0YsSUFBSVUseUJBQWMsRUFBRTtZQUNsQixJQUFJLENBQUNaLE1BQU0sQ0FBQ1EsR0FBRyxDQUNiLElBQUlLLG1CQUFVLENBQUNDLE9BQU8sQ0FBQztnQkFDckJmLFFBQVFnQixlQUFhLENBQUNDLE9BQU8sQ0FBQ0QsZUFBYSxDQUFDRSxRQUFRLElBQUksSUFBSSxDQUFDbEIsTUFBTTtnQkFDbkVtQixrQkFBa0IsSUFBSTtnQkFDdEJQLE9BQU87WUFDVDtRQUVKLENBQUM7SUFDSDtJQUVBUSxNQUFNQyxPQUFlLEVBQVE7UUFDM0IsSUFBSSxDQUFDcEIsTUFBTSxDQUFDcUIsSUFBSSxDQUFDRDtJQUNuQjtBQUNGO0FBM0NheEI7SUFEWjBCLElBQUFBLHFCQUFVO0lBS05DLFdBQUFBLElBQUFBLGlCQUFNLEVBQUNDLDJDQUEwQixDQUFDQyxhQUFhO0lBQy9DRixXQUFBQSxJQUFBQSxpQkFBTSxFQUFDQywyQ0FBMEIsQ0FBQ0UsTUFBTTs7O2VBRGlCLGVBQU0sNEJBQU4sZUFBTTtlQUNiLGVBQU0sNEJBQU4sZUFBTTs7R0FMaEQ5QiJ9
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6
