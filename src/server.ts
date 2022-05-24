import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import { middlewareError } from './middlewares/error/Error';

import { router } from './routes/routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.use(middlewareError);

export { app };
