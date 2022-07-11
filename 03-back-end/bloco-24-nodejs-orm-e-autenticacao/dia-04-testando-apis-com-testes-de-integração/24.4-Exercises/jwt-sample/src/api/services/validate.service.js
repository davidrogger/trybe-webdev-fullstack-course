const Joi = require('joi');

const runSchema = (schema) => async (checkData) => {
  const value = await schema.validateAsync(checkData);
  return value;
}

module.exports = {
  loginBodyFormat: runSchema(Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(3).required(),
  })),
};
