import UserModel from "../database/models/User";
import BookModel from '../database/models/Book';
import IUserBook from "../interfaces/IUserBook";


class GetUserBooksByIdService {
  constructor(private _UserModel = UserModel) {};

  async find(id: number): Promise<any> {
    const user = await this._UserModel.findOne({
      where: { id },
      include: [{
        model: BookModel,
        as: 'books',
        through: {
          attributes: []
        }
      }]
    })

    return user;
  }
}

const getId = new GetUserBooksByIdService();

getId.find(1);

export default GetUserBooksByIdService;
