module.exports = ({ name, message }, req, res, next) => {
  switch(name) {
    case 'ValidationError':
      return res.status(400).json({ message });
    case 'ErrorNotAuthorized':
      return res.status(401).json({ message });
    case 'ErrorNotFound':
      return res.status(404).json({ message });
    default:
      res.status(500).json({ message });
  }
};
