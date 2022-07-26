import { Pool } from "mysql2/promise";
import IUser from "../interface/user.interface";

export default class UserModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  };

  public async getAll(): Promise<IUser[]> {
    const query = 'SELECT id, name, email FROM Users;';
    const [rows] = await this.connection.execute(query);
    return rows as IUser[];
  }
}