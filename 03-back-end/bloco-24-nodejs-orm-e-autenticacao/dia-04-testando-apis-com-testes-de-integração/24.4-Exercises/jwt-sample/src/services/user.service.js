const { User } = require('../database/models');
const { ErrorNotFound } = require('../helpers/errorsLibrary');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../helpers/jwtConfig');

module.exports = {
  async findUser({ username, password }) {
    const user = await User.findOne({ where: { name: username, password } });

    if (user) {
      return { name: user.name };
    }

    throw new ErrorNotFound('User not found or incorrect password');
  },
  tokenGenerate(userData) {
    const secret = process.env.SECRET;
    return jwt.sign({ data: userData }, secret, jwtConfig);
  }
}