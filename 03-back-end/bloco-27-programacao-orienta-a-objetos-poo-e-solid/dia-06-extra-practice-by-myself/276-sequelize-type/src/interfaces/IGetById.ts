import IUserBook from "./IUserBook";

interface IGetById {
  getById(id: number): Promise<IUserBook>;
}

export default IGetById;