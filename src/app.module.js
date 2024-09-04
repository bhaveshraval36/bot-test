import UserModule from './app/users/user.module.js';
import sequelize from './core/config/database.js';
import appRoutes from './app.routes.js';
import configureMiddleware from './core/common/middlewares/indexMiddleware.js';
import initializePassport from './core/common/middlewares/auth.js';
import SessionModule from './app/sessions/session.module.js';
import QuestionMasterModule from './app/questions-master/question-master.module.js';
import ReasonMaster from './app/reasons-master/reason-master.module.js';
import QuestionModule from './app/questions/question.module.js';
import FeedbackModule from './app/feedbacks/feedback.module.js';
import AnswerModule from './app/answers/answer.module.js';
import OverallFeedbackModule from './app/overall-feedbacks/overall-feedback.module.js';
import AuthModule from './app/auth/auth.module.js';

import express from 'express';
import session from 'express-session';
import passport from 'passport';
import authRoutes from './app/auth/auth.routes.js';
// import './app/auth/auth.strategy.js'; 

/**
 * Main Application Module
 */
class AppModule {
  constructor() {
    this.modules = [
      // new SampleModule(),
      new UserModule(),
      new SessionModule(),
      new QuestionMasterModule(),
      new ReasonMaster(),
      new QuestionModule(),
      new FeedbackModule(),
      new AnswerModule(),
      new AuthModule(),
      new OverallFeedbackModule(),
      // new BooksModule(),
      // new ChaptersModule(),
      // new TopicModule(),
      // new SubtopicModule(),
      // new AiContentModule(),
      // new UserLearningProgressModule(),
      // new HighlightsModule(),
      // new AnnotationsModule(),
      // new GuidedPathModule(),
      // new AiContentUserEngagementsModule()
    ];
  }

  /**
   * Configure the application
   * @param {Application} app - The express application
   */
  async configure(app) {
    configureMiddleware(app);
    initializePassport(app);
    // await sequelize.sync();
    this.modules.forEach(module => {
      module.configure(app);
    });
    app.use('/api', appRoutes);
  }
}

export default AppModule;
