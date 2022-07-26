import IUser from "../interface/user.interface";
import connection from "../models/connection";
import UserModel from "../models/user.model";

export default class userService {
  public model: UserModel;

  constructor(){
    this.model = new UserModel(connection);
  };

  public async getAll(): Promise<IUser[]> {
    return this.model.getAll();
  }
};
