import ReasonMasterService from './reason-master.service.js';
import sendResponse from '../../core/common/utils/response.js';
import statusCodes from '../../core/common/utils/statusCodes.js';
import logger from '../../core/common/utils/logger.js';

/**
 * Controller for managing ReasonMaster routes
 */
class ReasonMasterController {
  constructor() {
    this.ReasonMasterService = new ReasonMasterService();
  }

  /**
   * Get all ReasonMasters
   * @param {import('express').Request} req - The request object
   * @param {import('express').Response} res - The response object
   * @returns {Promise<void>} - A promise that resolves when the response is sent
   */
  async getReasonMasters(req, res) {
    try {
      const ReasonMasters = await this.ReasonMasterService.findAll();
      sendResponse(res, statusCodes.SUCCESS, ReasonMasters);
    } catch (error) {
      logger.error('Get ReasonMasters Controller Error', error);
      sendResponse(res, statusCodes.SERVER_ERROR, { message: error.message });
    }
  }
}

export default ReasonMasterController;