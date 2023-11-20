import { createClient } from 'redis';
import config from '../config';
import logger from './logger';

const redisClient = createClient({
  url: config.redis.url
});

redisClient.on('error', (error) => {
  logger.error('redis Error', error);
});
redisClient.on('connect', (connect) => {
  logger.info('redis connected', connect);
});

const connect = async (): Promise<void> => {
  await redisClient.connect();
};

export const RedisClient = { connect };
