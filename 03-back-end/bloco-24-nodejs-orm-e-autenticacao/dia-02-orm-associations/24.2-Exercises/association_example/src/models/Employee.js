module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos createdAt e "updatedAt"
    tableName: 'Employees',
    underscored: true,
  });

  Employee.associete = (models) => {
    Employee.hasOne(models.Address, // hasOne como é 1 empregado para 1 endereço
      { foreignKey: 'employeeId', as: 'addresses' },
    );
  };

  return Employee;
};
