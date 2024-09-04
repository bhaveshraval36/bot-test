import OverallFeedbackRoutes from './overall-feedback.routes.js';

/**
 * Module for Question feature
 */
class overallFeedbackModule {
  /**
   * Configure the module
   * @param {import('express').Application} app - The express application
   */
  configure(app) {
    app.use('/api', OverallFeedbackRoutes);
  }
}

export default overallFeedbackModule;
