require('dotenv').config();

module.exports =
{
  "development": {
    "username": process.env.MYSQL_USERNAME,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.MYSQLHOST,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.MYSQL_USERNAME,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_TEST_DATABASE,
    "host": process.env.MYSQLHOST,
    "dialect": "mysql",
    // logging omite mensagens de log no orm
    "logging": false
  },
  "production": {
    "username": process.env.MYSQL_USERNAME,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.MYSQLHOST,
    "dialect": "mysql"
  }
}
