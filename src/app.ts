import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import { useRoutes } from './routes';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
useRoutes(app);

export default app;
