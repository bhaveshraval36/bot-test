import dotenv from 'dotenv';
import path from 'path';

/**
 * Function to get the env variable
 * @param {string} key - Key of the env variable
 * @param {string} [fileName='.env'] - File name of the env file
 * @returns {string} - The value of the environment variable
 */
export const getEnv = (key, fileName = '.env') => {
  const envConfig = dotenv.config({
    path: path.join(process.cwd(), '/', fileName),
  });
  return process.env[key] || envConfig.parsed[key];
};
