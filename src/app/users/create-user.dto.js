import { Joi } from 'express-validation';

/**
 * Validation schema for creating a user
 * @type {Object}
 */
const createUserDto = {
  body: Joi.object({
    name: Joi.string().min(2).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(20).required()
  })
};

export default createUserDto;
