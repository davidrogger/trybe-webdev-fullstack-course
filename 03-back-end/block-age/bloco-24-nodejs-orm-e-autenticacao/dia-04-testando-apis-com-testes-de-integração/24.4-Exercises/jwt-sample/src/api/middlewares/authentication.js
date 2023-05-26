const { ErrorNotFound } = require("../../helpers/errorsLibrary");
const jwt = require('jsonwebtoken');
const userService = require("../services/user.service");
const { tokenVerify } = require("../../helpers/tokenJWT");
const SECRET = process.env.SECRET;

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new ErrorNotFound('Token Not Found');
  }

  if (authorization) {
    const { data } = await tokenVerify(authorization);
    const user = await userService.findUserByName(data.name);

    if (!user){
      throw new ErrorNotFound('User Not Found');
    }

    req.user = user;
    next();
  }  
};
