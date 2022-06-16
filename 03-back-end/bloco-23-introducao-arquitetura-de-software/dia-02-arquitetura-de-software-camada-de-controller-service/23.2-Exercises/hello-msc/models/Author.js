const connection = require('./connection');

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

module.exports = { getAll, findById, create, getNewAuthor };