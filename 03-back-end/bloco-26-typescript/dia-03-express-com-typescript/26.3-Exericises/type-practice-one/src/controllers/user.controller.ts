import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { jwtGenerator } from "../services/jwt.service";
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
    validate.idFormat(id);
    const user = await this.userService.getById(id);
    res.status(StatusCodes.OK).json(user);
  }

  public create = async (req: Request, res: Response): Promise<void> => {
    const newUser = validate.userFormat(req.body);
    await this.userService.emailExists(newUser.email);
    const passwordHash = this.userService.passwordHash(newUser.password);
    const userData = await this.userService.create({ ...newUser, password: passwordHash });
    const payload = { email: newUser.email };
    const token = jwtGenerator(payload);
    res.status(StatusCodes.CREATED).json({...userData, token});
  }

  public update = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    validate.idFormat(id);
    const oldData = await this.userService.getById(id);
    
    const user = validate.userFormat(req.body);

    await this.userService.emailExists(user.email, id);

    const userUpdated = await this.userService.update(id, user);

    res.status(StatusCodes.OK).json({ updated: userUpdated, from: oldData });

  }

  public remove = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    validate.idFormat(id);

    await this.userService.getById(id);
    await this.userService.remove(id);

    res.status(StatusCodes.OK).json({ message: 'User removed with success!' });
  }
}