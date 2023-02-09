"use strict";
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

// src/ui/common/config/application/common/auth/utils/JWTTokenUtil.ts
var JWTTokenUtil_exports = {};
__export(JWTTokenUtil_exports, {
  JWTTokenUtil: () => JWTTokenUtil
});
module.exports = __toCommonJS(JWTTokenUtil_exports);
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));
var import_inversify = require("inversify");

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

// src/ui/common/config/application/common/auth/utils/JWTTokenUtil.ts
var JWTTokenUtil = class {
  constructor() {
    this.AUTH_HEADER = "authorization";
    this.SCHEME = "bearer";
    this.MATCHER = /(\S+)\s+(\S+)/;
  }
  generateToken(payload, secret, expiresIn, payloadKey) {
    return import_jsonwebtoken.default.sign(payloadKey ? { [payloadKey]: payload } : payload, secret, {
      expiresIn
    });
  }
  decodeToken(token) {
    try {
      return import_jsonwebtoken.default.verify(token, APP_TOKEN_SECRET);
    } catch {
      return null;
    }
  }
  getTokenFromHeaders(headers) {
    const authHeader = headers[this.AUTH_HEADER];
    if (!authHeader) {
      return null;
    }
    const matches = authHeader.match(this.MATCHER);
    return matches && matches[2];
  }
};
JWTTokenUtil = __decorateClass([
  (0, import_inversify.injectable)()
], JWTTokenUtil);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  JWTTokenUtil
});
//# sourceMappingURL=JWTTokenUtil.js.map