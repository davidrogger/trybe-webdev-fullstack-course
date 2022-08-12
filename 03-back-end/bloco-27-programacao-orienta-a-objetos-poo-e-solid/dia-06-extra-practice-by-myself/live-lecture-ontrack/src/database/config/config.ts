import 'dotenv/config';

import { Options } from 'sequelize';

const { DB_USER, DB_PASS, DB_NAME, DB_HOST, DB_PORT} = process.env;

const config: Options = {
  username: DB_USER || 'root',
  password: DB_PASS || '123456',
  database: DB_NAME || 'pet_trybe',
  host: DB_HOST|| 'localhost',
  port: Number(DB_PORT || 3002),
  dialect: 'mysql'
}

export = config;