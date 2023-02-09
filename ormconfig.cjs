const dir = process.env.NODE_ENV === 'development' ? 'src' : 'dist';
const ext = process.env.NODE_ENV === 'development' ? 't' : 'j';

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
    entities: [
      `${__dirname}/${dir}/infrastructure/database/entities/**/*.${ext}s`,
    ],
    migrations: [
      `${__dirname}/${dir}/infrastructure/database/migrations/**/*.${ext}s`,
    ],
    subscribers: [
      `${__dirname}/${dir}/infrastructure/database/subscribers/**/*.${ext}s`,
    ],
    seeds: [`${dir}/infrastructure/database/fixtures/seeds/*.${ext}s`],
    factories: [`${dir}/infrastructure/database/fixtures/factories/*.${ext}s`],
    cli: {
      entitiesDir: `${dir}/infrastructure/database/entities`,
      migrationsDir: `${dir}/infrastructure/database/migrations`,
      subscribersDir: `${dir}/infrastructure/database/subscribers`,
    },
    cache: true,
  },
];
