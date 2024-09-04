import QuestionRoutes from '../questions/question.routes.js';

/**
 * Module for Question feature
 */
class QuestionModule {
  /**
   * Configure the module
   * @param {import('express').Application} app - The express application
   */
  configure(app) {
    app.use('/api', QuestionRoutes);
  }
}

export default QuestionModule;
