const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: '@mysql2022',
  database: 'model_movies',
});

module.exports = connection;