import sendResponse from '../utils/response.js';
import statusCodes from '../utils/statusCodes.js';
import logger from '../utils/logger.js';

/**
 * Global error handler middleware
 * @param {Error} err - The error object
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 * @param {import('express').NextFunction} next - The next middleware function
 */
const errorHandler = (err, req, res, next) => {
  logger.error(err.stack);

  const statusCode = err.statusCode || statusCodes.INTERNAL_SERVER_ERROR;
  const message = err.message || 'Internal Server Error';

  sendResponse(res, 'error', statusCode, { message });
};

export default errorHandler;
