const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '@mysql2022',
  database: 'model_exercise'
});

module.exports = connection;