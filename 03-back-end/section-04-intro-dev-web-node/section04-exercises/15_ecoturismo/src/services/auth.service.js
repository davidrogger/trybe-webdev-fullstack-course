const crypto = require('crypto');
const { UnauthorizedError } = require('../errors/UnauthorizedError');
const authModel = require('../models/auth.model');

function convertToMD5(string) {
  return crypto.createHash('md5').update(string).digest('hex');
}

function isMatchPasswordUser(userInput, userData) {
  const passwordHash = convertToMD5(userInput.password);
  return passwordHash === userData.password;
}

async function signupUser(user) {
  const userFound = await authModel.findUser(user);

  if (!userFound) throw new UnauthorizedError('Access Unauthorized');

  if (!isMatchPasswordUser(user, userFound)) throw new UnauthorizedError('Access Unauthorized');

  return userFound;
}

module.exports = {
  signupUser,
};
