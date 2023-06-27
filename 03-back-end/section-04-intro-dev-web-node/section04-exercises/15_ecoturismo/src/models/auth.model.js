const database = require('./connection.model');

async function findUser(userInput) {
  const data = await database.getAllData();

  return data.users.find((user) => user.email === userInput.email);
}

module.exports = {
  findUser,
};
