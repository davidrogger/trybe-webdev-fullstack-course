const express = require('express');
const app = express();

app.use(express.json());



app.listen(4001, () => {
  console.log('Listening port 4001');
})