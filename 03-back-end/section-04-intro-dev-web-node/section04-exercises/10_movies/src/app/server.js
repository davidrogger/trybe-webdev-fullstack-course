const app = require('./app');
require('dotenv').config();

const { API_URL, API_PORT } = process.env;

if (!API_PORT) {
  throw new Error('Something went worng with the environment port');
} else if (!API_URL) {
  throw new Error('Something went worng with the environment url');
} else {
  app.listen(API_PORT, API_URL, () => console.log('Running application at %s:%s', API_URL, API_PORT));
}
