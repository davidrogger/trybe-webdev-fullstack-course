require('dotenv').config();

const dbConfig = {
  "username": MYSQL_USER,
  "password": MYSQL_PASSWORD,
  "host": MYSQL_HOST,
  "dialect": DBLANGUAGE
};

module.exports = {
  "development": {
    ...dbConfig,
    "database": 'jwt_sample_dev'
  },
  "test": {
    ...dbConfig,
    "database": 'jwt_sample_test'
  },
  "production": {
    ...dbConfig,
    "database": 'jwt_sample'
  }
}
