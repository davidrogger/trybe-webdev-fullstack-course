const jwt = require('jsonwebtoken');
const { ErrorNotFound, ErrorUnauthorizedAcess } = require('../errors/errorsLibrary');
const { User } = require('../database/models');
const SECRET = process.env.SECRET;

module.exports = async (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    throw new ErrorUnauthorizedAcess('Token not found');
  }

  const decoded = jwt.verify(token, SECRET);
  const user = await User.findOne({ where: { name: decoded.data.username } });
  
  if (!user) {
    throw new ErrorNotFound('User not found!');
  }
  
  req.user = { username: user.name, admin: user.admin };
  next();
};

