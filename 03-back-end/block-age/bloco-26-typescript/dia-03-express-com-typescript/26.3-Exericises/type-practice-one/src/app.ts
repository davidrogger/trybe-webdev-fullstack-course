import { Router, json } from 'express';
import UserRoute from './routes/user.route';
import errorHandler from './middlewares/errorHandler';
import PostRoute from './routes/post.route';

const app = Router();

app.use(json());
app.use(UserRoute)
app.use(PostRoute)
app.use(errorHandler)

export default app;