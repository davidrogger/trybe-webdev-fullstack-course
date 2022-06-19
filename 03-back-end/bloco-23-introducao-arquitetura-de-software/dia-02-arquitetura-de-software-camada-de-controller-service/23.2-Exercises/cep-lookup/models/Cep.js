const connection = require('./cepConnection');

const find = async (cep) => {
  const query = `
    SELECT * FROM ceps
    WHERE cep = ?;
  `;
  const [cepData] = await connection.execute(query, [cep]);
  return cepData;
};

module.exports = {
  find,
};