module.exports = (sequelize, DataType) => {
  const Address = sequelize.define('Address', {
    id: { type: DataType.INTEGER, primaryKey: true, autoIncrement: true },
    city: DataType.STRING,
    street: DataType.STRING,
    number: DataType.STRING,
    employeeId: { type: DataType.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    tableName: 'Addresses',
    undersconre: true,
  });

  Address.associate = (models) => {
    Address.belongsTo(models.Employee,
      {foreignKey: 'employeeId', as: 'employees'},
    );
  }

  return Address;
};
