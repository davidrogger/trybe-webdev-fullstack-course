import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import ErrorCustom from '../utils/error';

export default (error: Error, req: Request, res: Response, next: NextFunction) => {
  const { message, status } = error as ErrorCustom;
  res.status(status || StatusCodes.INTERNAL_SERVER_ERROR).json({ message });
};
