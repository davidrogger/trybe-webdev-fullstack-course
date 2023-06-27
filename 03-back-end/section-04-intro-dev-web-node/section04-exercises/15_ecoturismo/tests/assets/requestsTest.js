const POST = {
  newActivityBodyTest: {
    name: 'Teste',
    price: 0,
    description: {
      rating: 5,
      difficulty: 'Easy',
      createdAt: '10/08/2022',
    },
  },
  missingNameBodyTest: {
    price: 0,
    description: {
      rating: 5,
      difficulty: 'Fácil',
      createdAt: '10/08/2022',
    },
  },
  badNameBodyTest: {
    name: 'Bad',
    price: 0,
    description: {
      rating: 5,
      difficulty: 'Fácil',
      createdAt: '10/08/2022',
    },
  },
  missingPriceBodyTest: {
    name: 'Teste',
    description: {
      rating: 5,
      difficulty: 'Fácil',
      createdAt: '10/08/2022',
    },
  },
  badPriceBodyTest: {
    name: 'Teste',
    price: 'teste',
    description: {
      rating: 5,
      difficulty: 'Fácil',
      createdAt: '10/08/2022',
    },
  },
  missingDescriptionBodyTest: {
    name: 'Teste',
    price: 0,
  },
  missingCreatedAtBodyTest: {
    name: 'Teste',
    price: 0,
    description: {
      rating: 1,
      difficulty: 'Fácil',
    },
  },
  badCreatedAtBodyTest: {
    name: 'Teste',
    price: 0,
    description: {
      rating: 2,
      difficulty: 'Fácil',
      createdAt: '10-08-2022',
    },
  },
  missingRatingBodyTest: {
    name: 'Teste',
    price: 0,
    description: {
      difficulty: 'Fácil',
      createdAt: '10/08/2022',
    },
  },
  badRatingNumberBodyTest: {
    name: 'Teste',
    price: 0,
    description: {
      rating: 6,
      difficulty: 'Fácil',
      createdAt: '10/08/2022',
    },
  },
  badRatingStringBodyTest: {
    name: 'Teste',
    price: 0,
    description: {
      rating: 'teste',
      difficulty: 'Fácil',
      createdAt: '10/08/2022',
    },
  },
  missingDifficultyBodyTest: {
    name: 'Teste',
    price: 0,
    description: {
      rating: 3,
      createdAt: '10/08/2022',
    },
  },
  badDifficultyBodyTest: {
    name: 'Teste',
    price: 0,
    description: {
      rating: 4,
      difficulty: 'teste',
      createdAt: '10/08/2022',
    },
  },
  signupTest: {
    valid: {
      email: 'jonas@teste.com',
      password: '123456',
      firstName: 'Jonas',
      phoneNumber: '123456',
    },
    missingEmail: {
      password: '123456',
      firstName: 'Jonas',
      phoneNumber: '123456',
    },
    missingPassword: {
      email: 'jonas@teste.com',
      firstName: 'Jonas',
      phoneNumber: '123456',
    },
    missingFirstName: {
      email: 'jonas@teste.com',
      password: '123456',
      phoneNumber: '123456',
    },
    missingPhoneNumber: {
      email: 'jonas@teste.com',
      password: '123456',
      firstName: 'Jonas',
    },
    unauthorized: {
      email: {
        email: 'teste@teste.com',
        password: '123456',
        firstName: 'Jonas',
        phoneNumber: '123456',
      },
      password: {
        email: 'jonas@teste.com',
        password: 'teste',
        firstName: 'Jonas',
        phoneNumber: '123456',
      },
    },
  },
};

module.exports = {
  POST,
};
