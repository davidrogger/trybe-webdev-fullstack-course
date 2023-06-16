const { Router } = require('express');
const { BadRequestError } = require('../errors/BadRequestError');

const requiredValidations = Router();

function verifyName(req, _res, next) {
  const { name } = req.body;

  if (!name) throw new BadRequestError('Name field is required');
  if (name.length < 4) throw new BadRequestError('Name need at least 4 characters');

  next();
}

requiredValidations.use([verifyName]);

module.exports = requiredValidations;
