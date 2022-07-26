import { Pool, ResultSetHeader } from "mysql2/promise";
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

  public async getById(id: number): Promise<IUser> {
    const query = 'SELECT name, email FROM Users WHERE id=?;';
    const [result] = await this.connection.execute(query, [id]);
    const [user] = result as IUser[];
    return user;
  }

  public async create(user: IUser): Promise<IUser> {
    const { name, email, password } = user;
    const query = 'INSERT INTO Users (name, email, password) VALUES (?, ?, ?);';
    const [{ insertId: id }] = await this.connection.query<ResultSetHeader>(query, [name, email, password]);
    delete user.password;
    return { id, ...user };
  }
}