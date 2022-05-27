import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';

import { middlewareError } from './middlewares/error/Error';

import { router } from './routes/routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

app.use(middlewareError);

export { app };
