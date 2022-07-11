const { User } = require('../../database/models');
const { ErrorNotFound } = require('../../helpers/errorsLibrary');

module.exports = {
  async findUser({ username, password }) {
    const user = await User.findOne({ where: { name: username, password } });

    if (user) {
      return { name: user.name };
    }

    throw new ErrorNotFound('User not found or incorrect password');
  },
  async findUserByName(name){
    return User.findOne({where: { name }});
  },
  async getAll() {
    return User.findAll();
  },
}