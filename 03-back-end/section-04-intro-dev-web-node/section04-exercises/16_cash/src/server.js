const app = require('./app');
require('dotenv');

const { API_URL, API_PORT } = process.env;

app.listen(
  API_PORT,
  API_URL,
  () => console.log('Running application at URL:%s:%s', API_URL, API_PORT),
);
