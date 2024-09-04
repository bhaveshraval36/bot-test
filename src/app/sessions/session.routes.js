import { Router } from "express";
import { validate } from "express-validation";
import createSessionDto from "./create-session.dto.js";
import SessionController from "./session.controller.js";
import authMiddleware from "../../core/common/middlewares/authMiddleware.js";

const sessionsController = new SessionController();
const router = Router();

/**
 * Session routes
 */
router.post("/v1/sessions", authMiddleware, validate(createSessionDto), (req, res) =>
  sessionsController.createSession(req, res)
);

router.get("/v1/sessions/:user_id",authMiddleware, (req, res) =>
  sessionsController.getSessionsByUserId(req, res)
);

export default router;
