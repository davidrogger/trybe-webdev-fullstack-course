import { StatusCodes } from "http-status-codes";
import IUser, { InewUser } from "../interface/user.interface";
import connection from "../models/connection";
import UserModel from "../models/user.model";
import ErrorCustom from "../utils/error";
import bcrypt from 'bcryptjs';

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

  public async emailExists(email: string, id?: number): Promise<boolean> {
    const result = await this.model.emailExists(email);
    
    if (result !== id) throw new ErrorCustom(StatusCodes.CONFLICT, 'Email already in use');

    return false;
  }

  public passwordHash(password: string): string {
    return bcrypt.hashSync(password)
  };

  public passwordVerify(password: string, passwordHash: string): boolean {
    return bcrypt.compareSync(password, passwordHash);
  }

  public async create(user: InewUser): Promise<IUser> {
    return this.model.create(user);
  }

  public async update(id: number, user: InewUser): Promise<IUser> {
    return this.model.update(id, user);
  }
};
