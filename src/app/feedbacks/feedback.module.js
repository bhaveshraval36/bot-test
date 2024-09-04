import feedbackRoutes from '../feedbacks/feedback.routes.js';

/**
 * Module for Feedback feature
 */
class FeedbackModule {
  /**
   * Configure the module
   * @param {import('express').Application} app - The express application
   */
  configure(app) {
    app.use('/api', feedbackRoutes);
  }
}

export default FeedbackModule;
