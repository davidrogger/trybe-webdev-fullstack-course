const isUndefined = (data, res) => {
  const itemName = Object.keys(data).join();

  if (!data[itemName] && data[itemName] !== 0) {
    const error = true;
    res.status(400).json(
      {
        error,
        message: `Field ${itemName} is required`
      });
      return error;
  }
  return false;
}

const valueValidation = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  if (isUndefined({ firstName }, res)) return;
  if (isUndefined({ lastName }, res)) return;
  if (isUndefined({ email }, res)) return;
  if (isUndefined({ password }, res)) return;

  next();
}

module.exports = valueValidation;