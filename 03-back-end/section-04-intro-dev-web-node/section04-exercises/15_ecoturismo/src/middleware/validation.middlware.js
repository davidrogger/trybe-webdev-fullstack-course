const { Router } = require('express');
const { BadRequestError } = require('../errors/BadRequestError');

const requiredValidations = Router();

function isUndefined(field) {
  return !field && field !== 0;
}

function isNotANumber(field) {
  return Number.isNaN(Number(field));
}

function verifyName(req, _res, next) {
  const { name } = req.body;

  if (isUndefined(name)) throw new BadRequestError('Name field is required');
  if (name.length < 4) throw new BadRequestError('Name need at least 4 characters');

  next();
}

function verifyPrice(req, _res, next) {
  const { price } = req.body;

  if (isUndefined(price)) throw new BadRequestError('Price field is required');
  if (isNotANumber(price) || price < 0) throw new BadRequestError('Price need to be a number equal or above 0');

  next();
}

requiredValidations.use([verifyName, verifyPrice]);

module.exports = requiredValidations;
