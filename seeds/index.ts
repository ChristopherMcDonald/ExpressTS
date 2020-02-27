import { getRepository, createConnection } from 'typeorm';
import { User } from '../src/models';
import logger from '../src/config/logger.config';

export default createConnection().then(() => getRepository(User).save(User.createUser('Jon Snow', 30))).then(() => {
  logger('seed complete');
}).catch((err) => {
  logger('seed error');
  logger(err);
});
