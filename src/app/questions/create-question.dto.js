import { Joi } from 'express-validation';

/**
 * Validation schema for creating a Session
 * @type {Object}
 */
const createQuestionDto = {
  body: Joi.object({
    question: Joi.string().min(2).max(255).required(),
    session_id: Joi.number().required(),
    source: Joi.string().min(2).max(255).required()
  })
};

export default createQuestionDto;