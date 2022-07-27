import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import UserService from "../services/user.service";
import validate from "../services/validation.service";
export default class userController {
  constructor(private userService = new UserService()) {};

  public getAll = async (req: Request, res: Response): Promise<void> => {
    const users = await this.userService.getAll();
    res.status(StatusCodes.OK).json(users);
  }

  public getById = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    await validate.idFormat(id);
    const user = await this.userService.getById(id);
    res.status(StatusCodes.OK).json(user);
  }

  public create = async (req: Request, res: Response): Promise<void> => {
    const newUser = validate.userFormat(req.body);
    await this.userService.emailExists(newUser.email);
    const userData = await this.userService.create(newUser);
    res.status(StatusCodes.CREATED).json(userData);
  }
}