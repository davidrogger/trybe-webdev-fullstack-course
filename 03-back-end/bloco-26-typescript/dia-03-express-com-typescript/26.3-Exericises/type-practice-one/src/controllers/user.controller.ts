import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import UserService from "../services/user.service";

export default class userController {
  constructor(private userService = new UserService()) {};

  public getAll = async (req: Request, res: Response): Promise<void> => {
    const users = await this.userService.getAll();
    res.status(StatusCodes.OK).json(users);
  }
}