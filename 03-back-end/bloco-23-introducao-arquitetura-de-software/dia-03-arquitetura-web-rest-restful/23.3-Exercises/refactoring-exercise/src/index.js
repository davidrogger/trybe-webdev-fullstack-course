const express = require('express');

const app = express();

const productsController = require('../controllers/Products');

app.use(express.urlencoded({ extended: false }));

app.use('/products', productsController);

app.listen(300, () => {
  console.log('Listening at port 3000');
});
