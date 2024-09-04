import { Router } from 'express';
import { validate } from 'express-validation';
import createUserDto from './create-user.dto.js';
import UserController from './user.controller.js';
import authMiddleware from '../../core/common/middlewares/authMiddleware.js';

const userController = new UserController();
const router = Router();

/**
 * User routes
 */
router.get('/v1/users',authMiddleware, (req, res) => userController.getAllUser(req, res));
router.get('/v1/users/:user_id',authMiddleware, (req, res) => userController.getUserById(req, res));
router.post('/token', (req, res) => userController.login(req, res));

export default router;
