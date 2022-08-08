require('dotenv/config');

const {
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_DIAL,
} = process.env;

const config = {
  "username": DB_USER,
  "password": DB_PASS,
  "host": DB_HOST,
  "dialect": DB_DIAL || 'mysql'
}

module.exports = {
  "development": {
    ...config,
    "database": "book_api_development",

  },
  "test": {
    ...config,
    "database": "book_api_test",

  },
  "production": {
    ...config,
    "database": "book_api_production",
  }
}
