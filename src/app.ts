import express from 'express';
import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import { createConnection } from 'typeorm';
import { USE_CORS } from './config/settings.config';
import { jwtMiddlware, traceMiddleware, errorMiddleware } from './middleware';
import { swaggerRouter, userRouter, eventRouter } from './routes';

export default createConnection().then(() => {
  const app = express();

  app.use(helmet());
  if (USE_CORS) {
    app.use(cors());
  }
  app.use(bodyParser.json());

  app.use(express.static(path.join(__dirname, '..', '/public')));
  app.use('/api/swagger', swaggerRouter);

  app.use(traceMiddleware);
  app.use(jwtMiddlware);
  app.use('/api/user', userRouter);
  app.use('/api/event', eventRouter);
  app.use(errorMiddleware);

  return app;
});
