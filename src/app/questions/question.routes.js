import { Router } from "express";
import { validate } from "express-validation";
import createQuestionDto from "./create-question.dto.js";
import questionController from "./question.controller.js";
import authMiddleware from "../../core/common/middlewares/authMiddleware.js";

const QuestionsController = new questionController();
const router = Router();

/**
 * Question routes
 */
router.post("/v1/questions",authMiddleware, validate(createQuestionDto), (req, res) =>
  QuestionsController.createQuestion(req, res)
);

router.get("/v1/questions",authMiddleware, (req, res) =>
  QuestionsController.getAllQuestions(req, res)
);

router.get("/v1/questions-answer-by-session-id/:session_id",authMiddleware, (req, res) =>
  QuestionsController.getAllQuestionsAndAnswerBySessionId(req, res)
);

export default router;
