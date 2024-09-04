import QuestionMasterService from './question-master.service.js';
import sendResponse from '../../core/common/utils/response.js';
import statusCodes from '../../core/common/utils/statusCodes.js';
import logger from '../../core/common/utils/logger.js';

/**
 * Controller for managing QuestionMaster routes
 */
class QuestionMasterController {
  constructor() {
    this.QuestionMasterService = new QuestionMasterService();
  }

  /**
   * Get all QuestionMasters
   * @param {import('express').Request} req - The request object
   * @param {import('express').Response} res - The response object
   * @returns {Promise<void>} - A promise that resolves when the response is sent
   */
  async getQuestionMasters(req, res) {
    try {
      const QuestionMasters = await this.QuestionMasterService.findAll();
      sendResponse(res, statusCodes.SUCCESS, QuestionMasters);
    } catch (error) {
      logger.error('Get QuestionMasters Controller Error', error);
      sendResponse(res, statusCodes.SERVER_ERROR, { message: error.message });
    }
  }
}

export default QuestionMasterController;