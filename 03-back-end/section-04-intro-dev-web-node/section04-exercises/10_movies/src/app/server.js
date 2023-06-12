const app = require('./app');
require('dotenv').config();

const { API_PORT } = process.env;

if (API_PORT) {
  app.listen(API_PORT, () => console.log('Listening at port %s', API_PORT));
} else {
  throw new Error('Something went worng with the environment port');
}
