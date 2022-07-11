const validateService = require('../services/validate.service');
const userService = require('../services/user.service');
const { tokenGenerate } = require('../../helpers/tokenJWT');

module.exports = {
  async login(req, res) {
    const userBodyChecked = await validateService.loginBodyFormat(req.body);
    const user = await userService.findUser(userBodyChecked);
    const token = tokenGenerate(user);
    res.status(200).json({ message: `Welcome ${user.name}`, token });
  },
  async getAll(req, res) {
    const users = await userService.getAll();
    res.status(200).json(users);
  },
};