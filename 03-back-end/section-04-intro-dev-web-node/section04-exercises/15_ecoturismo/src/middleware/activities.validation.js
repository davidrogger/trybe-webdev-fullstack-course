const { Router } = require('express');
const { BadRequestError } = require('../errors/BadRequestError');

const requiredValidations = Router();

function isUndefined(field) {
  return !field && field !== 0;
}

function isANumber(field) {
  return !(Number.isNaN(Number(field)));
}

function isStandardized(date) {
  const regexData = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
  return regexData.test(date);
}

function isInRange(rating) {
  return rating <= 1 || rating <= 5;
}

function isADifficultyRecorded(difficulty) {
  const difficulties = {
    Easy: true,
    Medium: true,
    Hard: true,
  };
  return !!difficulties[difficulty];
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
  if (!isANumber(price) || price < 0) throw new BadRequestError('Price need to be a number equal or above 0');

  next();
}

function verifyDescription(req, _res, next) {
  const { description } = req.body;

  if (isUndefined(description)) throw new BadRequestError('"description" field is required');

  next();
}

function verifyCreatedAt(req, _res, next) {
  const { description: { createdAt } } = req.body;

  if (isUndefined(createdAt)) throw new BadRequestError('"createdAt" field is required in "description"');
  if (!isStandardized(createdAt)) throw new BadRequestError('"createdAt" field need to be dd/mm/yyyy"');

  next();
}

function verifyRating(req, _res, next) {
  const { description: { rating } } = req.body;

  if (isUndefined(rating)) throw new BadRequestError('"rating" field is required');
  if (!isANumber(rating) || !isInRange(rating)) throw new BadRequestError('rating" should be a number between 1 and 5');

  next();
}

function verifyDifficulty(req, _res, next) {
  const { description: { difficulty } } = req.body;

  if (isUndefined(difficulty)) throw new BadRequestError('"difficulty" field is required');
  if (!isADifficultyRecorded(difficulty)) throw new BadRequestError('"difficulty" should be "Easy", "Medium" or "Hard"');

  next();
}

requiredValidations.use([
  verifyName, verifyPrice, verifyDescription,
  verifyCreatedAt, verifyRating, verifyDifficulty,
]);

module.exports = requiredValidations;
