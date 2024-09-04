import { Joi } from 'express-validation';

/**
 * Validation schema for creating a questionMaster
 * @type {Object}
 */
const createQuestionMasterDto = {
  body: Joi.object({
    question: Joi.string().required()
  })
};

export default createQuestionMasterDto;