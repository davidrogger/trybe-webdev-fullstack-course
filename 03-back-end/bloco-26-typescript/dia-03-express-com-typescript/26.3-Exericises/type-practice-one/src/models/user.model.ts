import { OkPacket, Pool, ResultSetHeader, RowDataPacket } from "mysql2/promise";
import IUser from "../interface/user.interface";

interface emailFound {
  emailFound: string;
}

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

  public async emailExists(email: string): Promise<number> {
    const query = 'SELECT COUNT(*) AS emailFound FROM Users WHERE email=?;';
    const [result] = await this.connection.query(query, [email]);
    const [{ emailFound }] = result as emailFound[];
    return Number(emailFound);
  }

  public async create(user: IUser): Promise<IUser> {
    const { name, email, password } = user;
    const query = 'INSERT INTO Users (name, email, password) VALUES (?, ?, ?);';
    const [{ insertId: id }] = await this.connection.query<ResultSetHeader>(query, [name, email, password]);
    delete user.password;
    return { id, ...user };
  }
}