const validateService = require('../services/validate.service');
const userService = require('../services/user.service');

module.exports = {
  async login(req, res) {
    const userBodyChecked = await validateService.loginBodyFormat(req.body);
    const user = await userService.findUser(userBodyChecked);
    const token = userService.tokenGenerate(user);
    res.status(200).json({ message: `Welcome ${user.name}`, token });
  },
};