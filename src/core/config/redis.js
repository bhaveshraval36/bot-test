import { createClient } from 'redis';
import logger from '../common/utils/logger.js';
import { redisHost, redisPassword, redisPort } from '../common/constants/env.constants.js';

/**
 * Initialize Redis client
 * @returns {import('redis').RedisClientType}
 */
const redisClient = createClient({
  url: `redis://:${redisPassword}@${redisHost}:${redisPort}`
});

redisClient.on('error', (err) => logger.error('Redis Client Error', err));

await redisClient.connect();

export default redisClient;
