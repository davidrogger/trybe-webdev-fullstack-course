const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

const config = {
  expiresIn: '3h',
  algorithm: 'HS256',
}

const tokenGenerate = (userData) => {
  return jwt.sign({ data: userData }, SECRET, config);
}

const tokenVerify =(token) => {
  return jwt.verify(token, SECRET, config)
}

module.exports = {
  tokenGenerate,
  tokenVerify,
};
