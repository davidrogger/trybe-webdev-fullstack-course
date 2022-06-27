module.exports = (err, req, res, next) => {
  const { name, message } = err;
  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message });
      break;
    default:
      res.status(500).json({ message });
  }
};
