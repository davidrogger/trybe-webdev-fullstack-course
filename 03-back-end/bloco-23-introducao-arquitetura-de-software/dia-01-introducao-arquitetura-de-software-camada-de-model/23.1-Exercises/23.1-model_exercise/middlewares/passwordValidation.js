const passwordValidation = (req, res, next) => {
  const { password } = req.body;
  const minLength = 6;

  if (password.length < minLength) {
    res.status(400).json(
      {
        error: true,
        message: 'Field password need to have at least 6 caracters'
      }
    );
    return;
  }
  next();
}