const { User } = require("../models");

const messageGlossary = {
  notFound: { status: 'NOT_FOUND', message: 'Usuário não encontrado'},
}

const status = {
  HTTP_OK: 200,
  HTTP_NOT_FOUND: 404,
}

const userController = {
  async findById (req, res, next) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      if (!user) return next(messageGlossary.notFound);

      return res.status(status.HTTP_OK).json(user);
    } catch (error) {
      next({ status: 'BAD_REQUEST', message: error.message  });
    }
  },
};