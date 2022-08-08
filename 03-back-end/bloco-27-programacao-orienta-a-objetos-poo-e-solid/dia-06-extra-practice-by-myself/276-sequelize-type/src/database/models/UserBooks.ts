import { INTEGER, Model } from 'sequelize';
import db from '.';
import User from './User';
import Book from './Book';

class UserBooks extends Model {
  userId!: number;
  bookId!: number;
};

UserBooks.init(
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

User.belongsToMany(Book, {
  as: 'books',
  through: UserBooks,
  foreignKey: 'user_id',
  otherKey: 'book_id',
});

Book.belongsToMany(User, {
  as: 'users',
  through: UserBooks,
  foreignKey: 'book_id',
  otherKey: 'user_id'
});

export default UserBooks;