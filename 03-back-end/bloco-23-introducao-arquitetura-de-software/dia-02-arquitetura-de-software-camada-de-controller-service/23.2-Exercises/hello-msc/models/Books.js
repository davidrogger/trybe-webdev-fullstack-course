const connection = require('./connection');

const getAll = async () => {
  const query = `
    SELECT title
    FROM model_example.books;
  `;
  const [books] = await connection.execute(query);

  return books;
};

const create = async (title, authorId) => {
  const query = `
    INSERT INTO model_example.books(title, author_id)
    VALUES (?, ?)
  `;
  const [newBook] = await connection.execute(query, [title, authorId]);
  return { id: newBook.insertId, title };
}

const findAuthorId = async (authorId) => {
  const query = `
    SELECT * FROM model_example.authors
    WHERE id = ?;
  `;
  const [author] = await connection.execute(query, [authorId]);

  if (author.length === 0) return null;

  return author;
}

module.exports = {
  getAll,
  create,
  findAuthorId,
};