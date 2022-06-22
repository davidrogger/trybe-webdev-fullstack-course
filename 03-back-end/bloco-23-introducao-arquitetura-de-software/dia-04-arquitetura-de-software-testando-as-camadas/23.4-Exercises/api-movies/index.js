const express = require('express');

const app = express();

const MovieController = require('./controllers/movieController');

app.use(express.json());

app.post('/movies', MovieController.create);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
