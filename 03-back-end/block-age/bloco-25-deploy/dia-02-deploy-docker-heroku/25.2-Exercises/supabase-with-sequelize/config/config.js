require('dotenv').config();
const { HOST, PASSWORD_POSTGRES, DATABASE, DB_USERNAME, DB_PORT } = process.env;

const config = {
  "username": DB_USERNAME,
  "password": PASSWORD_POSTGRES,
  "database": DATABASE,
  "host": HOST,
  "port": DB_PORT,
  "dialect": "postgres"
};

module.exports = {
  "development": {
    ...config
  },
  "test": {
    ...config
  },
  "production": {
    ...config
  }
}
