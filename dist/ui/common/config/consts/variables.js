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

// src/ui/common/config/consts/variables.ts
var variables_exports = {};
__export(variables_exports, {
  APP_TOKEN_LIFE: () => APP_TOKEN_LIFE,
  APP_TOKEN_SECRET: () => APP_TOKEN_SECRET,
  IS_DEVELOPMENT: () => IS_DEVELOPMENT,
  LOG_LEVEL: () => LOG_LEVEL,
  PORT: () => PORT,
  SWAGGER_BASE_PATH: () => SWAGGER_BASE_PATH,
  SWAGGER_HOST: () => SWAGGER_HOST
});
module.exports = __toCommonJS(variables_exports);
var import_dotenv = __toESM(require("dotenv"));
import_dotenv.default.config();
var APP_TOKEN_SECRET = process.env.APP_TOKEN_SECRET || "";
var APP_TOKEN_LIFE = process.env.APP_TOKEN_LIFE || "24h";
var PORT = process.env.PORT || "3000";
var LOG_LEVEL = process.env.LOG_LEVEL || "debug";
var SWAGGER_BASE_PATH = process.env.SWAGGER_BASE_PATH || "";
var { SWAGGER_HOST } = process.env;
var IS_DEVELOPMENT = process.env.NODE_ENV === "development";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  APP_TOKEN_LIFE,
  APP_TOKEN_SECRET,
  IS_DEVELOPMENT,
  LOG_LEVEL,
  PORT,
  SWAGGER_BASE_PATH,
  SWAGGER_HOST
});
//# sourceMappingURL=variables.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    APP_TOKEN_SECRET: ()=>APP_TOKEN_SECRET,
    APP_TOKEN_LIFE: ()=>APP_TOKEN_LIFE,
    PORT: ()=>PORT,
    LOG_LEVEL: ()=>LOG_LEVEL,
    SWAGGER_BASE_PATH: ()=>SWAGGER_BASE_PATH,
    SWAGGER_HOST: ()=>SWAGGER_HOST,
    IS_DEVELOPMENT: ()=>IS_DEVELOPMENT
});
const _dotenv = /*#__PURE__*/ _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
_dotenv.default.config();
const APP_TOKEN_SECRET = process.env.APP_TOKEN_SECRET || '';
const APP_TOKEN_LIFE = process.env.APP_TOKEN_LIFE || '24h';
const PORT = process.env.PORT || '3000';
const LOG_LEVEL = process.env.LOG_LEVEL || 'debug';
const SWAGGER_BASE_PATH = process.env.SWAGGER_BASE_PATH || '';
const { SWAGGER_HOST  } = process.env;
const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9jb21tb24vY29uZmlnL2NvbnN0cy92YXJpYWJsZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuXG5kb3RlbnYuY29uZmlnKCk7XG5cbmV4cG9ydCBjb25zdCBBUFBfVE9LRU5fU0VDUkVUID0gcHJvY2Vzcy5lbnYuQVBQX1RPS0VOX1NFQ1JFVCB8fCAnJztcbmV4cG9ydCBjb25zdCBBUFBfVE9LRU5fTElGRSA9IHByb2Nlc3MuZW52LkFQUF9UT0tFTl9MSUZFIHx8ICcyNGgnO1xuZXhwb3J0IGNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8ICczMDAwJztcbmV4cG9ydCBjb25zdCBMT0dfTEVWRUwgPSBwcm9jZXNzLmVudi5MT0dfTEVWRUwgfHwgJ2RlYnVnJztcbmV4cG9ydCBjb25zdCBTV0FHR0VSX0JBU0VfUEFUSCA9IHByb2Nlc3MuZW52LlNXQUdHRVJfQkFTRV9QQVRIIHx8ICcnO1xuZXhwb3J0IGNvbnN0IHsgU1dBR0dFUl9IT1NUIH0gPSBwcm9jZXNzLmVudjtcbmV4cG9ydCBjb25zdCBJU19ERVZFTE9QTUVOVCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnO1xuIl0sIm5hbWVzIjpbIkFQUF9UT0tFTl9TRUNSRVQiLCJBUFBfVE9LRU5fTElGRSIsIlBPUlQiLCJMT0dfTEVWRUwiLCJTV0FHR0VSX0JBU0VfUEFUSCIsIlNXQUdHRVJfSE9TVCIsIklTX0RFVkVMT1BNRU5UIiwiZG90ZW52IiwiY29uZmlnIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUlhQSxnQkFBZ0IsTUFBaEJBO0lBQ0FDLGNBQWMsTUFBZEE7SUFDQUMsSUFBSSxNQUFKQTtJQUNBQyxTQUFTLE1BQVRBO0lBQ0FDLGlCQUFpQixNQUFqQkE7SUFDRUMsWUFBWSxNQUFaQTtJQUNGQyxjQUFjLE1BQWRBOzs2REFWTTs7Ozs7O0FBRW5CQyxlQUFNLENBQUNDLE1BQU07QUFFTixNQUFNUixtQkFBbUJTLFFBQVFDLEdBQUcsQ0FBQ1YsZ0JBQWdCLElBQUk7QUFDekQsTUFBTUMsaUJBQWlCUSxRQUFRQyxHQUFHLENBQUNULGNBQWMsSUFBSTtBQUNyRCxNQUFNQyxPQUFPTyxRQUFRQyxHQUFHLENBQUNSLElBQUksSUFBSTtBQUNqQyxNQUFNQyxZQUFZTSxRQUFRQyxHQUFHLENBQUNQLFNBQVMsSUFBSTtBQUMzQyxNQUFNQyxvQkFBb0JLLFFBQVFDLEdBQUcsQ0FBQ04saUJBQWlCLElBQUk7QUFDM0QsTUFBTSxFQUFFQyxhQUFZLEVBQUUsR0FBR0ksUUFBUUMsR0FBRztBQUNwQyxNQUFNSixpQkFBaUJHLFFBQVFDLEdBQUcsQ0FBQ0MsUUFBUSxLQUFLIn0=
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6
