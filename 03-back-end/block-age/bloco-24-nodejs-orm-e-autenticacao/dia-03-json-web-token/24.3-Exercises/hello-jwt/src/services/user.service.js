const { User } = require('../database/models');
const jwt = require('jsonwebtoken');
const { ErrorNotFound } = require('../errors/errorsLibrary');

const SECRET = process.env.SECRET;

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
}

module.exports = {
  tokenGeneretor: (user) => {
    return jwt.sign({ data: user }, SECRET, jwtConfig);
  },
  async create ({ username, password }) {
    const newUser = await User.create({ name: username, password });

    if (newUser) {
      return { username };
    }

    throw new Error('Something went wrong, please try again later');
  },
  async login ({ username, password }) {
    const user = await User.findOne({ where: { name: username, password } });
    
    if (user) {
      return { username: user.name, admin: user.admin };
    }

    throw new ErrorNotFound('User not found or incorrect password');
  },
};
