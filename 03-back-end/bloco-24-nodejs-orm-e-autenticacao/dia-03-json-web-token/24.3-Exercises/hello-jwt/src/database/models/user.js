module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    password: DataTypes.STRING, 
    admin: DataTypes.BOOLEAN,
  },
  {
    underscored: true,
    tableName: 'Users'
  });

  return User;
}