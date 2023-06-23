const mysql = require('mysql2/promise');
require('dotenv/config');

const config = {
  host: process.env.DB_HOSTNAME,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

const connection = mysql.createPool(config);

module.exports = connection;
