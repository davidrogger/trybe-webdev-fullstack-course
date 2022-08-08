const {
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_DIAL,
} = process.env;

const config = {
  "username": DB_USER,
  "password": DB_PASS,
  "database": "database_development",
  "host": DB_HOST,
  "dialect": DB_DIAL
}

module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
