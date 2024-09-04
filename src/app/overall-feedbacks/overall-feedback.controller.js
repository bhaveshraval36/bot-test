import overallFeedbackService from './overall-feedback.service.js';
import sendResponse from '../../core/common/utils/response.js';
import statusCodes from '../../core/common/utils/statusCodes.js';
import logger from '../../core/common/utils/logger.js';

/**
 * Controller for managing overallFeedback routes
 */
class overallFeedbackController {
  constructor() {
    this.overallFeedbackService = new overallFeedbackService();
  }

  /**
   * Creates a new overallFeedback.
   *
   * @async
   * @function createOverallFeedback
   * @param {Object} req - The request object.
   * @param {Object} req.body - The request body containing overallFeedback details.
   * @param {Object} res - The response object.
   * @returns {Promise<void>} - A promise that resolves when the response is sent.
   * @throws {Error} - If an error occurs while creating the overallFeedback.
   */
  async createOverallFeedback(req, res) {
    let createOverallFeedbackDto = req.body;
    console.log("🚀 ~ overallFeedbackController ~ createOverallFeedback ~ createOverallFeedbackDto:", createOverallFeedbackDto)
    try {
      const overallFeedback = await this.overallFeedbackService.createOverallFeedback(createOverallFeedbackDto);
      sendResponse(res, statusCodes.CREATED, overallFeedback);
    } catch (error) {
      logger.error('Create overallFeedback Controller Error', error);
      sendResponse(res, statusCodes.INVALID_REQUEST, { message: error.message });
    }
  }

  /**
   * Retrieves all overallFeedbacks.
   *
   * @async
   * @function getAlloverallFeedbacks
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Promise<void>} - A promise that resolves when the response is sent.
   * @throws {Error} - If an error occurs while retrieving the overallFeedbacks.
   */
  async getAllOverallFeedbacks(req, res) {
    try {
      const { user_id } = req.params;
      const overallFeedbacks = await this.overallFeedbackService.getAll(user_id);
      console.log("🚀 ~ overallFeedbackController ~ getAllOverallFeedbacks ~ overallFeedbacks:", overallFeedbacks)
      sendResponse(res, statusCodes.SUCCESS, overallFeedbacks);
    } catch (error) {
      logger.error('Get overallFeedbacks Controller Error', error);
      sendResponse(res, statusCodes.SERVER_ERROR, { message: error.message });
    }
  }

}

export default overallFeedbackController;