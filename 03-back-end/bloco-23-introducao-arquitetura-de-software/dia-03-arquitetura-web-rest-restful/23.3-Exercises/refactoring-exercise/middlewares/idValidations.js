const idValidation = (req, _res, next) => {
  const { id } = req.params;
  if (isNaN(id)) {
    const error = { code: 'invalidData', message: `Product ID "${id}" have to be a number` }
    return next(error);
  };
  next();
}

module.exports = idValidation;