import {
  __require
} from "../../../chunk-CT3ESYKG.mjs";

// src/infrastructure/database/cli/dbReload.ts
import { join } from "path";
import * as yargs from "yargs";
import { createConnection } from "typeorm";
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
} = __require(join(process.cwd(), "ormconfig.js")).default[0];
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
      createConnection(connectionOptions).then(
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
//# sourceMappingURL=dbReload.mjs.map