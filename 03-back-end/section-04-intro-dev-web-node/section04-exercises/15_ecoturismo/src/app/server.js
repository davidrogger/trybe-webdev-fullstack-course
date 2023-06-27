const app = require('./app');
require('dotenv/config');

const { API_URL, API_PORT } = process.env;

app.listen(
  API_PORT,
  API_URL,
  () => console.log('API running at URL:%s:%s', API_URL, API_PORT),
);
