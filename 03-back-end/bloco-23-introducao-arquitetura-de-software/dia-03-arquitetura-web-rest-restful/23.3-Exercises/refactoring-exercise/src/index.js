const express = require('express');

const app = express();

const productsController = require('../controllers/Products');

app.use(express.urlencoded({ extended: false }));

app.use('/products', productsController);

app.listen(3000, () => {
  console.log('Listening at port 3000');
});
