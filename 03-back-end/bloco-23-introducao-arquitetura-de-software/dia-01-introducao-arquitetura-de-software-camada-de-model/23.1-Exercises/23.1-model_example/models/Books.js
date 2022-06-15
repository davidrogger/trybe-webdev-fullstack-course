const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT title, author_id FROM model_example.books',
  );
  return books;
};

module.exports = { getAll };