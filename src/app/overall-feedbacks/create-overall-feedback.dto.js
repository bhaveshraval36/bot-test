import { Joi } from 'express-validation';

/**
 * Validation schema for creating a overallFeedback
 * @type {Object}
 */
const createOverallFeedbackDto = {
  body: Joi.object({
    feedback: Joi.string().min(2).max(255).required(),
    user_id: Joi.number().required(),
  })
};

export default createOverallFeedbackDto;