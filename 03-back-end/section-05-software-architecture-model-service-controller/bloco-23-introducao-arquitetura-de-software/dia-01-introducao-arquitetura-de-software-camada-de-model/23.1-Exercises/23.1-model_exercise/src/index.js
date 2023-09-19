const express = require('express');
const app = express();
const userRouter = require('./userRouter');

app.use(express.json());
app.use('/user', userRouter);

app.listen(3000, () => {
  console.log('Listening at PORT 3000');
});
