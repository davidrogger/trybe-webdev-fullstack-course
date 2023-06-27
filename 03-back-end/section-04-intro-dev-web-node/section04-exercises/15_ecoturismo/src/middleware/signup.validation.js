const { Router } = require('express');
const { UnauthorizedError } = require('../errors/UnauthorizedError');
const authService = require('../services/auth.service');

const requiredValidations = Router();

function verifyField(field) {
  if (!field) throw new UnauthorizedError('Missing required fields');
}

function verifySignupFields(req, _res, next) {
  const {
    email, password, firstName, phoneNumber,
  } = req.body;

  [email, password, firstName, phoneNumber].map(
    (field) => verifyField(field),
  );

  next();
}

async function verifyCredentials(req, _res, next) {
  const user = await authService.signupUser(req.body);
  req.session = { user };
  next();
}

requiredValidations.use([verifySignupFields, verifyCredentials]);

module.exports = requiredValidations;
