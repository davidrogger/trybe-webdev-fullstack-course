require('dotenv').config();

const dbConfig = {
  "username": process.env.MYSQL_USER,
  "password": process.env.MYSQL_PASSWORD,
  "host": process.env.MYSQL_HOST,
  "dialect": process.env.DBLANGUAGE,
  "logging": false
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
