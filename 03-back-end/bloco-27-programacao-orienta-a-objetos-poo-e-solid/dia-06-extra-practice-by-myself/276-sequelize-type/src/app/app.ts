import express from 'express';
import userBooksRoute from '../routes/userBooks.route';

const app = express();

app.use(express.json());
app.use('/userbooks', userBooksRoute)

export default app;