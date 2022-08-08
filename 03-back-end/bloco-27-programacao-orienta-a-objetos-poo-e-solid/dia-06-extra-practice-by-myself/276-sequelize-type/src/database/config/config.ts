import { Options } from 'sequelize';

const {
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_PORT,
} = process.env;

const config: Options = {
  username: DB_USER,
  password: DB_PASS,
  host: DB_HOST,
  port: Number(DB_PORT),
  dialect: 'mysql',
};

export = config;