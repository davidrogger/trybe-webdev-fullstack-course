const { UnauthorizedError } = require('../errors/UnauthorizedError');

function verifyToken(req, _res, next) {
  const { authorization } = req.headers;

  if (!authorization) throw new UnauthorizedError('Missing Token');

  if (authorization.length !== 16) throw new UnauthorizedError('Invalid Token');

  next();
}

module.exports = {
  verifyToken,
};
