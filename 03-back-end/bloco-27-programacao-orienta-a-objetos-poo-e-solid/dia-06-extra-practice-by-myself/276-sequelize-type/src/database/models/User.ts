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

  export default User;