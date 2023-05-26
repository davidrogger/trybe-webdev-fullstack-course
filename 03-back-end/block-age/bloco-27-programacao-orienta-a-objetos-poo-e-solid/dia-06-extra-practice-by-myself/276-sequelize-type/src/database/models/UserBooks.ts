import { INTEGER, Model } from 'sequelize';
import db from '.';

class UserBooksModel extends Model {
  userId!: number;
  bookId!: number;
};

UserBooksModel.init(
  {
    userId: {
      primaryKey: true,
      type: INTEGER,
      field: 'user_id',
      references: {
        model: 'Users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    bookId: {
      primaryKey: true,
      type: INTEGER,
      field: 'book_id',
      references: {
        model: 'Books',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  },
  {
    sequelize: db,
    timestamps: false,
    tableName: 'User_Books'
  },
);

export default UserBooksModel;