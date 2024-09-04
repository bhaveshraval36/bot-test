import { Joi } from 'express-validation';

/**
 * Validation schema for creating a ReasonMaster
 * @type {Object}
 */
const createReasonMasterDto = {
  body: Joi.object({
    reason: Joi.string().required()
  })
};

export default createReasonMasterDto;