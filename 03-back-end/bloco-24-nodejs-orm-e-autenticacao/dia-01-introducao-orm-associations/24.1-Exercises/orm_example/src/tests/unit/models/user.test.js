const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const UserModel = require('../../../models/user');

describe('Model User', () => {
  const User = UserModel(sequelize, dataTypes);
  const user = new User();

  describe('Have a name "User"', () => {
    checkModelName(User)('User');
  });

  describe('Have properties "FullName" and "email"', () => {
    ['fullName', 'email'].forEach(checkPropertyExists(user));
  });
});