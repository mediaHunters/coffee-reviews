"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/infrastructure/database/cli/dbReload.ts
var import_path = require("path");
var yargs = __toESM(require("yargs"));
var import_typeorm = require("typeorm");
var {
  type,
  host,
  port,
  username,
  password,
  database,
  logging,
  migrations
  // eslint-disable-next-line import/no-dynamic-require, @typescript-eslint/no-var-requires
} = require((0, import_path.join)(process.cwd(), "ormconfig.js")).default[0];
yargs.command({
  command: "reload",
  describe: "Reload Database",
  handler: () => {
    try {
      const connectionOptions = {
        database,
        host,
        logging,
        migrations,
        password,
        port,
        type,
        username
      };
      (0, import_typeorm.createConnection)(connectionOptions).then(
        async (connection) => {
          await connection.dropDatabase();
          await connection.runMigrations();
          process.exit(0);
        }
      );
    } catch (error) {
      console.error("Error when reloading database", error);
      process.exit(1);
    }
  }
}).parse();
//# sourceMappingURL=dbReload.js.map