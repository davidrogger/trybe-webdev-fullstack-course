const camelize = require('camelize');
const connection = require('./connection');

async function findAll() {
  const query = 'SELECT * FROM passengers';
  const [passengers] = await connection.execute(query);
  return camelize(passengers);
}

module.exports = {
  findAll,
};
