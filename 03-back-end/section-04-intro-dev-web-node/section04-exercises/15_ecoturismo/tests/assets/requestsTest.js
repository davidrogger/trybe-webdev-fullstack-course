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
};

module.exports = {
  POST,
};
