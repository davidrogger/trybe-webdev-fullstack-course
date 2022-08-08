import { INTEGER, STRING, DECIMAL, Model, ModelAttributes } from 'sequelize';
import Books from '../models/Book';

const BooksAttributes:  ModelAttributes<Books> = {
  id: {
    type: INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: STRING(30),
    allowNull: false,
  },
  prince: {
    type: DECIMAL(10, 2),
    allowNull: false,
  },
  author: {
    type: STRING(100),
    allowNull: false
  },
  isbn: {
    type: STRING(100),
  }
};

export default BooksAttributes;