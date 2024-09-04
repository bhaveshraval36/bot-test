import { Router } from "express";
import { validate } from "express-validation";
import createAnswerDto from "./create-answer.dto.js";
import answerController from "./answer.controller.js";

const AnswersController = new answerController();
const router = Router();

/**
 * Answer routes
 */
// router.post("/v1/Answers", validate(createAnswerDto), (req, res) =>
//   AnswersController.createAnswer(req, res)
// );

// router.get("/v1/Answers", (req, res) =>
//   AnswersController.getAllAnswers(req, res)
// );

export default router;
