const User = require('../models/User');

const idValidation = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user) return res.status(404).json({ error: true, message: 'User not found' });
  req.user = user;
  next();
};

module.exports = idValidation;