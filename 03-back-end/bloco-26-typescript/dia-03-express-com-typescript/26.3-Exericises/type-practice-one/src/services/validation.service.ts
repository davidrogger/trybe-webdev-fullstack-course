import { StatusCodes } from "http-status-codes";
import Joi, { Schema } from "joi";
import ErrorCustom from "../utils/error";

const runSchema = (schema: Schema) => (itemScan: {}) => {
  const { error, value } = schema.validate(itemScan);

  if (error) throw new ErrorCustom(StatusCodes.BAD_REQUEST, error.message);

  return value;
}

const validate = {
  idFormat: runSchema(Joi.object({
    id: Joi.number().positive().integer().required(),
  })),
  userFormat: runSchema(Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(12).required(),
  })),
  postFormat: runSchema(Joi.object({
    title: Joi.string().required(),
    author: Joi.string().min(3).required(),
    category: Joi.string().min(3).required(),
  })),
}

export default validate;