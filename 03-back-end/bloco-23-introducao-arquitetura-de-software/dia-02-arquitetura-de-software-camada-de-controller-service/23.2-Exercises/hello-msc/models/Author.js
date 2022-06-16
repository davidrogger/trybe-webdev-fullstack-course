const connection = require('./connection');

const getNewAuthor = (authorData) => {
  const { firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName].map((name) => name).join(' ');

  return { firstName, middleName, lastName, fullName };

}

const serialize = (authorData) => authorData.map((item) => getNewAuthor({
  id: item.id,
  firstName: item.first_name,
  middleName: item.middle_name,
  lastName: item.last_name,
}));


const getAll = async () => {
  const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors;';
  const [authors] = await connection.execute(query);
  return serialize(authors);
};

const findById = async (id) => {
  const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?;';
  const [author] = await connection.execute(query, [id]);

  if (author.length === 0) return null;

  return serialize(author)[0];
};

const isValid = (firstName, middleName, lastName) => {
  const requiredNameUndefined = [firstName, lastName].some((name) => !name || typeof name !== 'string');
  const existsUndefined = typeof middleName !== 'string';

  if (requiredNameUndefined || existsUndefined) return true;

  return false;
};

const create = async (firstName, middleName, lastName) => {
  const query = 'INSERT INTO model_examplo.authors(first_name, middle_name, last_name) VALUES (?,?,?);';
  const [author] = await connection.execute(query, [firstName, middleName, lastName]);
  return [getNewAuthor({ id: author.insertId, firstName, middleName, lastName })];
};

module.exports = { getAll, findById, isValid, create };