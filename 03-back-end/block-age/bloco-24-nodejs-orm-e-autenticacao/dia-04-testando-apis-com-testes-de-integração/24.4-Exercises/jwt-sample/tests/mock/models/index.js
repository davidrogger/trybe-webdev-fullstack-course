const users = require('./db.json');

const mockFindOne = (Integration, Data) => {
  if (!!Data.where) {
    const { where: { name, password } } = Data;
    const result = Integration.find((user) => user.name === name && user.password === password );
    if (result) {
      return result;
    }
  }
  return null
}

const User = {
  findOne: (search) => mockFindOne(users, search),
};

module.exports = {
  User,
};