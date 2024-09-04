import authRoutes from '../auth/auth.routes.js';

/**
 * Module for User feature
 */
class AuthModule {
  /**
   * Configure the module
   * @param {import('express').Application} app - The express application
   */
  configure(app) {
    app.use('/api',authRoutes );
  }
}

export default AuthModule;