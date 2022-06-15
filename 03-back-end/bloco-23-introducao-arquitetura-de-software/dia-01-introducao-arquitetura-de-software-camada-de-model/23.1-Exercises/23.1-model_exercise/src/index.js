const express = require('express');
const { use } = require('./userRouter');
const userRouter = require('./userRouter');
const app = express();

use(express.json());
use('/user', userRouter);

app.listen(3000, () => {
  console.log('Listening at PORT 3000');
});
