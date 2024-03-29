import express, { application, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import errosHandler from './middlewares/errorsHandler';
import 'express-async-errors';
import BooksRoutes from './routes/books.routes';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('Express + TypeScript')
});

app.use(BooksRoutes);

app.use(errosHandler);

app.listen(PORT, () => console.log(`Online: ${PORT}`));

