import { verifyToken } from '../utils/jwt.js';
import statusCodes from '../utils/statusCodes.js';
import sendResponse from '../utils/response.js';
import logger from '../utils/logger.js';
import { jwtSecret } from '../constants/env.constants.js';

/**
 * Authentication middleware to verify JWT token
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 * @param {import('express').NextFunction} next - The next middleware function
 */
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return sendResponse(res, statusCodes.UNAUTHORIZED, { message: 'No token provided' });
  }

  try {
    const decoded = verifyToken(token, jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    console.log("🚀 ~ authMiddleware ~ error:", error)
    logger.error('Auth Middleware Error', error);
    return sendResponse(res, statusCodes.UNAUTHORIZED, { message: 'Invalid token' });
  }
};

export default authMiddleware;
