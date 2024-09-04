import { Router } from 'express';

import QuestionMasterController from './question-master.controller.js';
import authMiddleware from '../../core/common/middlewares/authMiddleware.js';

const questionMastersController = new QuestionMasterController();
const router = Router();

/**
 * QuestionMaster routes
 */
router.get('/v1/questions-master', authMiddleware, (req, res) => questionMastersController.getQuestionMasters(req, res));

export default router;
