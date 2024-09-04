import { Router } from "express";
import { validate } from "express-validation";
import createOverallFeedbackDto from "./create-overall-feedback.dto.js";
import overallFeedbackController from "./overall-feedback.controller.js";
import authMiddleware from "../../core/common/middlewares/authMiddleware.js";

const overallFeedbacksController = new overallFeedbackController();
const router = Router();

/**
 * overallFeedbacks routes
 */
router.post("/v1/overallFeedbacks",authMiddleware, validate(createOverallFeedbackDto), (req, res) =>
  overallFeedbacksController.createOverallFeedback(req, res)
);

router.get("/v1/overallFeedbacks/:user_id",authMiddleware, (req, res) =>
  overallFeedbacksController.getAllOverallFeedbacks(req, res)
);

// router.get("/v1/overallFeedbacks/:user",authMiddleware, (req, res) =>
//   overallFeedbacksController.getAllOverallFeedbacksAndAnswerBySessionId(req, res)
// );

export default router;
