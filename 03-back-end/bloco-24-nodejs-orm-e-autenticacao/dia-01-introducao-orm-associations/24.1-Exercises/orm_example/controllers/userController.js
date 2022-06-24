const { User } = require("../models");

const message = {
  notFound: { status: 'NOT_FOUND', message: 'Usuário não encontrado'},
  updateSucess: { message: 'Usuário atualizado com sucesso!' },
  removeSucess: { message: 'Usuário excluído com sucesso!' },
}

const status = {
  HTTP_OK: 200,
  HTTP_CREATED: 201,
  HTTP_NOT_FOUND: 404,
}

const userController = {
  async getAll (_req, res, next) {
    try {
      const users = await User.findAll();
      return res.status(status.HTTP_OK).json(users);

    } catch (error) {
      next({ status: 'BAD_REQUEST', message: error.message  });
    }
  },
  async findById (req, res, next) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      if (!user) return next(message.notFound);

      return res.status(status.HTTP_OK).json(user);
    } catch (error) {
      next({ status: 'BAD_REQUEST', message: error.message  });
    }
  },
  async findByIdAndEmail (req, res, next) {
    try {
      const { id } = req.params;
      const { email } = req.query;
      const user = await User.findONe( { where: { id, email } } );

      if (!user) return next(message.notFound);

      return res.status(status.HTTP_OK).json(user);
    } catch (error) {
      next({ status: 'BAD_REQUEST', message: error.message  });
    }
  },
  async create (req, res, next) {
    try {
      const { fullName, email } = req.body;
      const newUser = await User.create({ fullName, email })
      res.status(status.HTTP_CREATED).json(newUser);

    } catch (error) {
      next({ status: 'BAD_REQUEST', message: error.message  });
    }
  },
  async update (req, res, next) {
    try {
      const { fullName, email } = req.body;
      const { id } = req.params;

      const [updateUser] = await User.update(
        { fullName, email },
        { where: { id } },
      );

      if (!updateUser) return next(message.notFound);

      return res.status(status.HTTP_OK).json(message.updateSucess);
    } catch (error) {
      next({ status: 'BAD_REQUEST', message: error.message  });
    }
  },
  async remove (req, res, next) {
    try {
      const { id } = req.params;
      const userRemove = await User.destroy({ where: { id } });

      return res.status(status.HTTP_OK).json(message.removeSucess);

    } catch (error) {
      next({ status: 'BAD_REQUEST', message: error.message  });
    }
  },
};

module.exports = userController;