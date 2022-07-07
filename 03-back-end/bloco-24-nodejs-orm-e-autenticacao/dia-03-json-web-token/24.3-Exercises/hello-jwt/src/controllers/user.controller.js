const validate= require("../services/validate.service");
const userService = require('../services/user.service');

module.exports = {
  async create(req, res) {
    const user = await validate.userData(req.body);
    const newUser = await userService.create(user);
    
    res.status(201).json({ message: `Welcome ${newUser}!` });
  },
};
