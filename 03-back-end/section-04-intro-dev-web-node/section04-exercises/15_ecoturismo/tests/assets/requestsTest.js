const POST = {
  newActivityBodyTest: {
    name: 'Trekking',
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
};

module.exports = {
  POST,
};
