const { ErrorNotAuthorized } = require("../../helpers/errorsLibrary");
const userService = require("../services/user.service");

module.exports = {
  async getAll(req, res) {
    const { user } = req;

    if (Number(req.params.id) === user.id) {
      const userData = await userService.findUserByName(user.name);
      return res.status(200).json(userData);
    }

    throw new ErrorNotAuthorized ('Access denied');
  },
};
