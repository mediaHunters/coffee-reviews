const dir = process.env.NODE_ENV === 'development' ? 'src' : 'dist';

module.exports = [
  {
    type: 'postgres',
    host: process.env.ORM_HOST || 'localhost',
    port: 5432,
    username: process.env.ORM_USERNAME || 'postgres',
    password: process.env.ORM_PASSWORD || 'postgres',
    database: process.env.ORM_DB || 'coffee-reviews-db',
    logging: true,
    migrationsRun: true,
    ssl: true,
    entities: [`${__dirname}/infrastructure/database/entities/**/*.{js,ts}`],
    migrations: [
      `${__dirname}/infrastructure/database/migrations/**/*.{js,ts}`,
    ],
    subscribers: [
      `${__dirname}}infrastructure/database/subscribers/**/*.{js,ts}`,
    ],
    seeds: [`${dir}/infrastructure/database/fixtures/seeds/*.{js,ts}`],
    factories: [`${dir}/infrastructure/database/fixtures/factories/*{js,ts}`],
    cli: {
      entitiesDir: `${dir}/infrastructure/database/entities`,
      migrationsDir: `${dir}/infrastructure/database/migrations`,
      subscribersDir: `${dir}/infrastructure/database/subscribers`,
    },
    cache: true,
  },
];
