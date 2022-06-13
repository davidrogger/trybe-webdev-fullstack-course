const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  const tokenLength = 16;
  if(!authorization || authorization.length !== tokenLength) {
    return res.status(401).json({ message: 'Invalid Token!' });
  }

  return next();
}

module.exports = authMiddleware;