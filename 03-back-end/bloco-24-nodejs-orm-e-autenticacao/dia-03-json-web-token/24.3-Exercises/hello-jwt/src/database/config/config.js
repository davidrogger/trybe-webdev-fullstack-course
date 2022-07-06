require('dotenv').config();

const dataConfig = {
  usarname: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.HOSTNAME,
  dialect: process.env.DBLANGUAGE,
};

module.exports = {
  "development": {
    ...dataConfig
  },
  "test": {
    ...dataConfig
  },
  "production": {
    ...dataConfig
  }
}
