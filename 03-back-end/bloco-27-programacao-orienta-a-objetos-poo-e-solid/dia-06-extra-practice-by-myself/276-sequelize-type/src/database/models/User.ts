import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';
import BookModel from './Book';
import UserBooksModel from './UserBooks';

class UserModel extends Model {
  id!: number;
  firstName!: string;
  lastName!: string;
  age!: number;
};

UserModel.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    firstName: {
      type: STRING,
      field: 'first_name'
    },
    lastName: {
      type: STRING,
      field: 'last_name'
    },
    age: {
      type: INTEGER
    },
  },
  {
    sequelize: db,
    modelName: 'Users',
    timestamps: false,
  },
  );


UserModel.belongsToMany(BookModel, {
  as: 'books',
  through: UserBooksModel,
  foreignKey: 'user_id',
  otherKey: 'book_id',
});

BookModel.belongsToMany(UserModel, {
  as: 'users',
  through: UserBooksModel,
  foreignKey: 'book_id',
  otherKey: 'user_id'
});

  export default UserModel;