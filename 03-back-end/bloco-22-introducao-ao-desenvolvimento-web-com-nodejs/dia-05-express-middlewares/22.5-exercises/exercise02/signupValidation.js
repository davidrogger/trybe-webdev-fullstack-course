const signupValidation = (req, res, next) => {
  const { email, password, firstName, phone } = req.body;

  const checkUndefined = [email, password, firstName, phone].some((item) => !item);
  if (checkUndefined) {
    return res.status(401).json({ message: 'missing fields' });
  };

  const user = { email, password, firstName, phone };

  req.user = user;
  next();
};

module.exports = signupValidation;