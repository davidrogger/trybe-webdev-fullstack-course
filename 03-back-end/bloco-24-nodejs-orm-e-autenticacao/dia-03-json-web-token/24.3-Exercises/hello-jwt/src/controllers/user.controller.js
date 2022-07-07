const validate= require("../services/validate.service");
const userService = require('../services/user.service');
const { ErrorUnauthorizedAcess } = require("../errors/errorsLibrary");


module.exports = {
  async create(req, res) {
    const user = await validate.userData(req.body);
    const newUser = await userService.create(user);
    
    res.status(201).json({ message: `Welcome ${newUser.username}!` });
  },
  async login(req, res) {
    const user = await validate.userData(req.body);
    const userLogin = await userService.login(user);
    const token = userService.tokenGeneretor(userLogin);

    res.status(200).json({ token });

  },
  painel(req, res) {
    res.status(200).json(req.user);
  },
  topSecret(req, res) {
    const { admin } = req.user;

    if (!admin) {
      throw new ErrorUnauthorizedAcess('Restricted access');
    }

    res.status(200).json({ secretInfo: 'Peter Parker is the Spider-Man' });
  },
};
