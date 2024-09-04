import jwt from 'jsonwebtoken';
import logger from './logger.js';

/**
 * Generate a JWT token
 * @param {Object} payload - The payload to encode in the token
 * @param {string} secret - The secret key to sign the token
 * @param {Object} options - Additional options for the token
 * @returns {string} The generated JWT token
 */
const generateToken = (payload, secret, options = {}) => {
  try {
    return jwt.sign(payload, secret, options);
  } catch (error) {
    logger.error('JWT Generation Error', error);
    throw error;
  }
};

/**
 * Verify a JWT token
 * @param {string} token - The token to verify
 * @param {string} secret - The secret key to verify the token
 * @returns {Object} The decoded payload if the token is valid
 */
const verifyToken = (token, secret) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    logger.error('JWT Verification Error', error);
    throw error;
  }
};

export { generateToken, verifyToken };
