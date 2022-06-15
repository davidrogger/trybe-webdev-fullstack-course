const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM model_exercise.user';
  const [users] = await connection.execute(query);
  return users;
};

const lastId = async () => {
  const query = 'SELECT id FROM model_exercise.user ORDER BY id DESC LIMIT 1';
  const [ids] = await connection.execute(query);
  return ids[0];
};

const findById = async (id) => {
  const query = 'SELECT * FROM model_exercise.user WHERE id = ?';
  const [user] = await connection.execute(query, [id]);

  if (user.length === 0) return null;

  return user[0];
}

const create = async (firstName, lastName, email, password) => {
  const query = 'INSERT INTO model_exercise.user (first_name, last_name, email, password) VALUES (?,?,?,?)';

  await connection.execute(query,[firstName, lastName, email, password]);
};

module.exports = { getAll, create, lastId, findById };