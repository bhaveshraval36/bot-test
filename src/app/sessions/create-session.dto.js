import { Joi } from 'express-validation';

/**
 * Validation schema for creating a Session
 * @type {Object}
 */
const createSessionDto = {
  body: Joi.object({
    session_name: Joi.string().min(2).max(255).required(),
    user_id: Joi.number().required(),
  })
};

export default createSessionDto;