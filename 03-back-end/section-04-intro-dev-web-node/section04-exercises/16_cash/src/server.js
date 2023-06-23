const app = require('./app');
const connection = require('./db/connection');
require('dotenv/config');

const { API_HOSTNAME, API_PORT } = process.env;

app.listen(
  API_PORT,
  API_HOSTNAME,
  async () => {
    console.log('Running application at URL:%s:%s', API_HOSTNAME, API_PORT);

    const [response] = await connection.execute('SELECT 1');
    const mysqlStatus = response ? 'Online' : 'Offline';
    console.log('MySQL connection: [%s]', mysqlStatus);
  },
);
