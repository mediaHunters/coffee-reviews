import { ConnectionOptions } from 'typeorm';

import { Review, User } from 'infrastructure/database/entities';
import { Coffee } from 'infrastructure/database/entities/Coffee';
import { Role } from 'infrastructure/database/entities/Role';

export default {
  type: 'postgres',
  host: process.env.ORM_HOST || 'localhost',
  port: 5432,
  username: process.env.ORM_USERNAME || 'postgres',
  password: process.env.ORM_PASSWORD || 'postgres',
  database: process.env.ORM_DB || 'coffee-reviews-db',
  logging: true,
  migrationsRun: true,
  ssl: process.env.NODE_ENV === 'production',
  entities: [User, Review, Coffee, Role],
  migrations: [`${__dirname}/infrastructure/database/migrations/**/*.{js,ts}`],
  subscribers: [
    `${__dirname}}infrastructure/database/subscribers/**/*.{js,ts}`,
  ],
} as ConnectionOptions;
