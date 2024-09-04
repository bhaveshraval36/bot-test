import { Router } from "express";
import { validate } from "express-validation";
import createFeedbackDto from "./create-feedback.dto.js";
import feedbackController from "./feedback.controller.js";
import authMiddleware from "../../core/common/middlewares/authMiddleware.js";

const FeedbacksController = new feedbackController();
const router = Router();

/**
 * Feedback routes
 */
router.post("/v1/feedbacks", authMiddleware
  ,validate(createFeedbackDto), (req, res) =>
  FeedbacksController.createFeedback(req, res)
);

router.get("/v1/feedbacks", authMiddleware, (req, res) =>
  FeedbacksController.getAllFeedbacks(req, res)
);

export default router;
