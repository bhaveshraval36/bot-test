import amqplib from 'amqplib';
import logger from '../common/utils/logger.js';
import { rabbitMqConUrl } from '../common/constants/env.constants.js';

/**
 * Initialize RabbitMQ connection
 * @returns {Promise<amqplib.Connection>}
 */
const initRabbitMQ = async () => {
  try {
    const connection = await amqplib.connect(rabbitMqConUrl);
    return connection;
  } catch (error) {
    logger.error('RabbitMQ Connection Error', error);
    throw error;
  }
};

export default initRabbitMQ;
