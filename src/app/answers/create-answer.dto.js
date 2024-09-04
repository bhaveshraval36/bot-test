import { Joi } from 'express-validation';

/**
 * Validation schema for creating a Session
 * @type {Object}
 */
const createAnswerDto = {
  body: Joi.object({
    answer: Joi.string().optional(),
    question_id: Joi.number().required(),
    session_id: Joi.number().required(),
  })
};

export default createAnswerDto;