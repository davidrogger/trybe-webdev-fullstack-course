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

const allAuthorIds = async () => {
  const query = 'SELECT id FROM model_example.authors';
  const [allIds] = await connection.execute(query);
  return allIds;
}

const isValid = async (title, author_id) => {
  const dataUndefined = [title, author_id].some((data) => !data);
  const minLength = 3;
  const titleLenghtInvalid = title ? title.length < minLength : true;

  const allIds = await allAuthorIds();

  const invalidId = !allIds.some(( author ) => author.id === Number(author_id));

  if (dataUndefined || titleLenghtInvalid || invalidId) return true;

  return false;
}

const create = async (title, author_id) => {
  const query = 'INSERT INTO model_example.books(title, author_id) VALUES (?,?)';
  await connection.execute(query, [title, author_id]);
}

module.exports = { getAll, findById, isValid, create };