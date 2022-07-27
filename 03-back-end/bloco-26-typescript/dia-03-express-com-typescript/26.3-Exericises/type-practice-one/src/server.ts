import express from 'express';
import app from './app';

const server = express();

const PORT = process.env.PORT || 3000
const HOST = process.env.API_HOST || 'localhost';

server.use(app);

server.listen(PORT, () => console.log(`🍳  Server Online at http://${HOST}:${PORT}`));