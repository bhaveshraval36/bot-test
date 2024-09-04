import userRoutes from '../users/user.routes.js';

/**
 * Module for User feature
 */
class UserModule {
  /**
   * Configure the module
   * @param {import('express').Application} app - The express application
   */
  configure(app) {
    app.use('/api', userRoutes);
  }
}

export default UserModule;
