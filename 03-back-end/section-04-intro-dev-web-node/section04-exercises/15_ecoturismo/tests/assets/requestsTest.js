const POST = {
  newActivityBodyTest: {
    name: 'Teste',
    price: 0,
    description: {
      rating: 5,
      difficulty: 'Fácil',
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
      rating: 1,
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
    price: 'teste',
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
      rating: 1,
      createdAt: '10/08/2022',
    },
  },
  badDifficultyBodyTest: {
    name: 'Teste',
    price: 0,
    description: {
      rating: 1,
      difficulty: 'teste',
      createdAt: '10/08/2022',
    },
  },
};

module.exports = {
  POST,
};
