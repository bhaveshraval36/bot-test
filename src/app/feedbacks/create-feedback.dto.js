import { Joi } from 'express-validation';

/**
 * Validation schema for creating a feedback
 * @type {Object}
 */
const createFeedbackDto = {
  body: Joi.object({
    answer_id: Joi.number().required(),
    is_helpful: Joi.boolean().required(),
    reason_id: Joi.number().optional(),
    custom_reason: Joi.string().optional(),
  }).xor('reason_id', 'custom_reason') // Ensures that either reason_id or custom_reason is required
};

export default createFeedbackDto;