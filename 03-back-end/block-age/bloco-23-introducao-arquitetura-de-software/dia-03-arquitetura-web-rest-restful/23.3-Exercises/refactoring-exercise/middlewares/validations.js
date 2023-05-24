const Joi = require('joi');

const fieldsDTO = Joi.object({
  name: Joi.string().not().empty().required(),
  brand: Joi.string().not().empty().required(),
});

const fieldsValidation = (req, _res, next) => {
  const { name, brand } = req.body;

  const { error } = fieldsDTO.validate({ name, brand});

  if (error) return next(error);
  next();
};


module.exports = fieldsValidation;