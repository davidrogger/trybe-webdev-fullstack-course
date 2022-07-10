const { ErrorNotFound } = require("../helpers/errorsLibrary");
const jwt = require('jsonwebtoken');
const userService = require("../services/user.service");
const { tokenVerify } = require("../helpers/tokenJWT");
const SECRET = process.env.SECRET;

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    const { name } = tokenVerify(authorization);
    const user = await userService.findUserByName(name);
    if (user){
      next();
    }
    throw new ErrorNotFound('User Not Found');
  }  
  throw new ErrorNotFound('Token Not Found');
};
