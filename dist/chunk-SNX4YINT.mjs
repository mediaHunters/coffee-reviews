import {
  Review
} from "./chunk-HX3VYCCS.mjs";
import {
  User
} from "./chunk-IOQQNHD2.mjs";
import {
  Coffee
} from "./chunk-WMYDNDP5.mjs";
import {
  Role
} from "./chunk-3C5KPKXZ.mjs";

// src/infrastructure/database/ormconfig.ts
var ormconfig_default = {
  type: "postgres",
  host: process.env.ORM_HOST || "localhost",
  port: 5432,
  username: process.env.ORM_USERNAME || "postgres",
  password: process.env.ORM_PASSWORD || "postgres",
  database: process.env.ORM_DB || "coffee-reviews-db",
  logging: true,
  migrationsRun: true,
  ssl: process.env.NODE_ENV === "production",
  entities: [User, Review, Coffee, Role],
  migrations: [`${__dirname}/infrastructure/database/migrations/**/*.{js,ts}`],
  subscribers: [
    `${__dirname}}infrastructure/database/subscribers/**/*.{js,ts}`
  ]
};

export {
  ormconfig_default
};
//# sourceMappingURL=chunk-SNX4YINT.mjs.map