const { User } = require('../database/models');
const jwt = require('jsonwebtoken');

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
    const newUser = await User.create({ username, password });

    if (newUser) {
      return { username };
    }

    throw new Error('Something went wrong, please try again later');
  },
};
