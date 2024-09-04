import { Router } from 'express';
import passport from 'passport';

import userRoutes from './app/users/user.routes.js';
import sessionsRoutes from './app/sessions/session.routes.js';
import questionMastersRoutes from './app/questions-master/question-master.routes.js'
import reasonMastersRoutes from './app/reasons-master/reason-master.routes.js';
import questionsRoutes from './app/questions/question.routes.js';
import feedbacksRoutes from './app/feedbacks/feedback.routes.js';
import authRoute from './app/auth/auth.routes.js';
import OverallFeedback from './app/overall-feedbacks/overall-feedback.schema.js';

const router = Router();



/**
 * App-level routes
 */
router.use('/v1/users', userRoutes, (req, res, next) => {
    console.log("hello coming here ========>");
    next();
});

/**
 * App-level routes
 */
router.use('/v1/sessions', sessionsRoutes);

/**
 * App-level routes
 */
router.use('/v1/questions-master', questionMastersRoutes);


/**
 * App-level routes
 */
router.use('/v1/reasons-master', reasonMastersRoutes);


/**
 * App-level routes
 */
router.use('/v1/questions', questionsRoutes);


/**
 * App-level routes
 */
router.use('/v1/feedbacks', feedbacksRoutes);

/**
 * App-level routes
 */
router.use('/v1/overallFeedbacks', OverallFeedback);

/**
 * App-level routes
 */
router.use('/auth', authRoute
);


export default router;
