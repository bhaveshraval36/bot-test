import { Router } from "express";
import HighlightsController from "./highlights.controller.js";
import authMiddleware from "../../core/common/middlewares/authMiddleware.js";

const highlightsController = new HighlightsController();
const router = Router();

/**
 * Route to add a new highlight for a specific user.
 * @route POST /users/highlights
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @returns {void}
 */
router.post('/users/highlights',authMiddleware, (req, res) => highlightsController.addHighlight(req, res));

/**
 * Route to get all highlights for a specific user.
 * @route GET /users/:user_id/highlights
 *  @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @returns {void}
 */
router.get('/users/:user_id/highlights',authMiddleware, (req, res) => highlightsController.getHighlights(req, res));

/**
 * Route to update a highlight for a specific user.
 * @route PUT /users/update-highlights
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @returns {void}
 */
router.put('/users/update-highlights', authMiddleware, (req, res) => highlightsController.updateHighlight(req, res));


export default router;