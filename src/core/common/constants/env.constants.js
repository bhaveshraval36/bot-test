import { getEnv } from '../utils/common.js';

export const appPort = getEnv('PORT');
export const dbHost = getEnv('DB_HOST');
export const dbPort = getEnv('DB_PORT');
export const dbUsername = getEnv('DB_USERNAME');
export const dbPassword = getEnv('DB_PASSWORD');
export const dbDatabase = getEnv('DB_DATABASE');
export const aiApiUrl = getEnv('AI_API_URL');


export const googleClientId = getEnv('GOOGLE_CLIENT_ID');
export const googleClientSecret = getEnv('GOOGLE_CLIENT_SECRET');
export const callBackUrl = getEnv('GOOGLE_CALLBACK_URL');
export const sessionSecret = getEnv('SESSION_SECRET');
export const jwtSecret = getEnv('JWT_SECRET');
export const nodeEnv = getEnv('NODE_ENV');

export const frontendBaseUrl = getEnv('FRONTEND_BASE_URL');
export const redirectPath = getEnv('REDIRECT_PATH');