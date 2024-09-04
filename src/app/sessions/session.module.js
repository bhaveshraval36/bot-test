import SessionRoutes from '../sessions/session.routes.js';

/**
 * Module for Session feature
 */
class SessionModule {
  /**
   * Configure the module
   * @param {import('express').Application} app - The express application
   */
  configure(app) {
    app.use('/api', SessionRoutes);
  }
}

export default SessionModule;
