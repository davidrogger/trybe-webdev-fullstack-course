import { StatusCodes } from "http-status-codes";
import Joi from "joi";
import IUser from "../interface/user.interface";
import ErrorCustom from "../utils/error";

const validate = {
  idFormat(id: number): void {
    const { error } = Joi.number().positive().integer().required().label('id')
    .validate(id);
    if (error) {
      throw new ErrorCustom(StatusCodes.BAD_REQUEST, error.message);
    }
  },
  userFormat(user: IUser): void {
    const { error } = Joi.object({
      name: Joi.string().min(3).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(12).required(),
    }).validate(user);
    if (error) {
      throw new ErrorCustom(StatusCodes.BAD_REQUEST, error.message);
    }
  },
}

export default validate;