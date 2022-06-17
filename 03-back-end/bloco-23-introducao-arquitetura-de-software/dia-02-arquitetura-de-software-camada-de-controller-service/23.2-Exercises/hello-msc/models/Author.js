const connection = require('./connection');

const findByName = async (firstName, middleName, lastName) => {
  let query = `
    SELECT id, first_anem, middle_name, last_name
    FROM model_example.authors
  `;

  if (middleName) {
    query += 'WHERE first_name = ? AND middle_name = ? AND last_name = ?';
  } else {
    query += 'WHERE first_name = ? AND last_name = ?';
  }

  const params = middleName ? [firstName, middleName, lastName] : [firstName, lastName];

  const [authorData] = await connection.execute(query, params);

  if ( authorData.lenght === 0) return null;

  return serialize(authorData);
};

const isValid = (firstName, middleName, lastName) => {
  const requiredNameUndefined = [firstName, lastName].some((name) => !name || typeof name !== 'string');
  const existsUndefined = typeof middleName !== 'string';

  if (requiredNameUndefined || existsUndefined) return false;

  return true;
};

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;
  
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');
  
    return {
      id,
      firstName,
      middleName,
      lastName,
      fullName,
    };
  };

const serialize = (authorData) => authorData.map((item) => getNewAuthor({
  id: item.id,
  firstName: item.first_name,
  middleName: item.middle_name,
  lastName: item.last_name,
}));

const getAll = async () => {
  const query = `
  SELECT id, first_name, middle_name, last_name
  FROM model_example.authors;
  `;
  const [authors] = await connection.execute(query);
  return serialize(authors);
};

const findById = async (id) => {
  const query = `
  SELECT id, first_name, middle_name, last_name
  FROM model_example.authors
  WHERE id = ?;
  `;
  const [author] = await connection.execute(query, [id]);

  if (author.length === 0) return null;

  return serialize(author)[0];
};

const create = async (firstName, middleName, lastName) => {
  const query = `
  INSERT INTO model_example.authors(first_name, middle_name, last_name)
  VALUES (?,?,?);
  `;
  const [author] = await connection.execute(query, [firstName, middleName, lastName]);
  return [getNewAuthor({ id: author.insertId, firstName, middleName, lastName })];
};

module.exports = {
  getAll,
  findById,
  isValid,
  create,
  getNewAuthor,
  findByName,
};