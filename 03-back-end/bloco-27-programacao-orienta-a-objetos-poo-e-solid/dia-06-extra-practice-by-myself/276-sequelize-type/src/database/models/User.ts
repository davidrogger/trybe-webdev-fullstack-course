import { DATE, INTEGER, Model, STRING } from 'sequelize';
import db from '.';

class User extends Model {
  id!: number;
  firstName!: string;
  lastName!: string;
  age!: number;
};

User.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    firstName: {
      type: STRING
    },
    lastName: {
      type: STRING
    },
    age: {
      type: INTEGER
    },
    createdAt: {
      allowNull: false,
      type: DATE
    },
    updatedAt: {
      allowNull: false,
      type: DATE
    }
  },
  {
    sequelize: db,
    modelName: 'Users',
    timestamps: false,
  },
  );