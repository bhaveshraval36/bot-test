import { Router } from 'express';

import ReasonMasterController from './reason-master.controller.js';
import authMiddleware from '../../core/common/middlewares/authMiddleware.js';

const ReasonMastersController = new ReasonMasterController();
const router = Router();

/**
 * ReasonMaster routes
 */
router.get('/v1/reasons-master', authMiddleware,(req, res) => ReasonMastersController.getReasonMasters(req, res));

export default router;
