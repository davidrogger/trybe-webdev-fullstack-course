const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT title, author_id FROM model_example.books',
  );
  return books;
};

const findById = async (id) => {
  const query = 'SELECT title FROM model_example.books WHERE id = ?';
  const bookData = await connection.execute(query, [id]);

  if (bookData.length === 0) return null;

  return bookData[0];
}

module.exports = { getAll, findById };