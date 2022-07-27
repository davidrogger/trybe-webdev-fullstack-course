import { StatusCodes } from "http-status-codes";
import IUser from "../interface/user.interface";
import connection from "../models/connection";
import UserModel from "../models/user.model";
import ErrorCustom from "../utils/error";

export default class userService {
  public model: UserModel;

  constructor(){
    this.model = new UserModel(connection);
  };

  public async getAll(): Promise<IUser[]> {
    return this.model.getAll();
  }

  public async getById(id: number): Promise<IUser> {
    const user = await this.model.getById(id);
    if (!user) throw new ErrorCustom(StatusCodes.NOT_FOUND, 'User not found');
    return user;
  }

  public async emailExists(email: string): Promise<boolean> {
    const result = await this.model.emailExists(email);
    
    if (result !== 0) throw new ErrorCustom(StatusCodes.CONFLICT, 'Email already in use');

    return false;
  }

  public async create(user: IUser): Promise<IUser> {
    return this.model.create(user);
  }
};
