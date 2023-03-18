const env = process.env.NODE_ENV !== 'development';
const dir = env ? 'dist' : 'src';
console.log(env)
module.exports = [
  {
    type: 'postgres',
    host: env ? process.env.ORM_HOST : 'localhost',
    port: 5432,
    username: env ? process.env.ORM_USERNAME : 'postgres',
    password: env ? process.env.ORM_PASSWORD : 'postgres',
    database: env ? process.env.ORM_DB : 'coffee-reviews-db',
    logging: true,
    migrationsRun: true,
    ssl: env,
    entities: [
      `${__dirname}/${dir}/infrastructure/database/entities/**/*.{js,ts}`,
    ],
    migrations: [
      `${__dirname}/${dir}/infrastructure/database/migrations/**/*.{js,ts}`,
    ],
    subscribers: [
      `${__dirname}/${dir}/infrastructure/database/subscribers/**/*.{js,ts}`,
    ],
    seeds: [`${dir}/infrastructure/database/fixtures/seeds/*.{js,ts}`],
    factories: [`${dir}/infrastructure/database/fixtures/factories/*.{js,ts}`],
    cli: {
      entitiesDir: `${dir}/infrastructure/database/entities`,
      migrationsDir: `${dir}/infrastructure/database/migrations`,
      subscribersDir: `${dir}/infrastructure/database/subscribers`,
    },
  },
];
