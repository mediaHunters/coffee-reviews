// src/ui/common/config/consts/variables.ts
import dotenv from "dotenv";
dotenv.config();
var APP_TOKEN_SECRET = process.env.APP_TOKEN_SECRET || "";
var APP_TOKEN_LIFE = process.env.APP_TOKEN_LIFE || "24h";
var PORT = process.env.PORT || "3000";
var LOG_LEVEL = process.env.LOG_LEVEL || "debug";
var SWAGGER_BASE_PATH = process.env.SWAGGER_BASE_PATH || "";
var { SWAGGER_HOST } = process.env;
var IS_DEVELOPMENT = process.env.NODE_ENV === "development";

export {
  APP_TOKEN_SECRET,
  APP_TOKEN_LIFE,
  PORT,
  LOG_LEVEL,
  SWAGGER_BASE_PATH,
  SWAGGER_HOST,
  IS_DEVELOPMENT
};
//# sourceMappingURL=chunk-LQ4FDPEO.mjs.map