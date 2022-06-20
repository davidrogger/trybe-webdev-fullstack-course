const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: '@mysql2022',
  database: 'rest_exercises'
});

module.exports = connection;
