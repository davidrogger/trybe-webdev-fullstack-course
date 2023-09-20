const camelize = require('camelize');
const connection = require('./connection');

async function findAll() {
  const query = 'SELECT * FROM passengers';
  const [passengers] = await connection.execute(query);
  return camelize(passengers);
}

async function findById(passengerId) {
  const query = 'SELECT * FROM passengers WHERE id = ?';
  const [[passenger]] = await connection.execute(query, [passengerId]);
  return camelize(passenger);
}

module.exports = {
  findAll,
  findById,
};