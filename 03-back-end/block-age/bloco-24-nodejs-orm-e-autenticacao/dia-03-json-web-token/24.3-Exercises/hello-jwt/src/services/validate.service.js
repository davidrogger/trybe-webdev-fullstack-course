const Joi = require('joi');

const runSchema = (schema) => async (checkData) => {
  const { error, value } = schema.validate(checkData);
  if (error) throw error;
  return value;
};

module.exports = {
  userData: runSchema(Joi.object({
    username: Joi.string().min(5).required(),
    password: Joi.string().min(5).required(),
  })),
};
