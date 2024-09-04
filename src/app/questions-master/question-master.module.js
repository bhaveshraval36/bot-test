import questionMasterRoutes from '../questions-master/question-master.routes.js';

/**
 * Module for QuestionMaster feature
 */
class QuestionMasterModule {
  /**
   * Configure the module
   * @param {import('express').Application} app - The express application
   */
  configure(app) {
    app.use('/api', questionMasterRoutes);
  }
}

export default QuestionMasterModule;