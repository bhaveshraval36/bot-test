import AnswerRoutes from './answer.routes.js';

/**
 * Module for Answer feature
 */
class AnswerModule {
  /**
   * Configure the module
   * @param {import('express').Application} app - The express application
   */
  configure(app) {
    app.use('/api', AnswerRoutes);
  }
}

export default AnswerModule;
