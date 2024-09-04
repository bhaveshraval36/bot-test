import feedbackService from './feedback.service.js';
import sendResponse from '../../core/common/utils/response.js';
import statusCodes from '../../core/common/utils/statusCodes.js';
import logger from '../../core/common/utils/logger.js';

/**
 * Controller for managing Feedback routes
 */
class FeedbackController {
  constructor() {
    this.feedbackService = new feedbackService();
  }

  /**
   * Creates a new Feedback.
   *
   * @async
   * @function createFeedback
   * @param {Object} req - The request object.
   * @param {Object} req.body - The request body containing Feedback details.
   * @param {Object} res - The response object.
   * @returns {Promise<void>} - A promise that resolves when the response is sent.
   * @throws {Error} - If an error occurs while creating the Feedback.
   */
  async createFeedback(req, res) {
    let createFeedbackDto = req.body;
    try {
      const Feedback = await this.feedbackService.createFeedback(createFeedbackDto);
      sendResponse(res, statusCodes.CREATED, Feedback);
    } catch (error) {
      logger.error('Create Feedback Controller Error', error);
      sendResponse(res, statusCodes.INVALID_REQUEST, { message: error.message });
    }
  }

  /**
   * Retrieves all Feedbacks.
   *
   * @async
   * @function getAllFeedbacks
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Promise<void>} - A promise that resolves when the response is sent.
   * @throws {Error} - If an error occurs while retrieving the Feedbacks.
   */
  async getAllFeedbacks(req, res) {
    try {
      const Feedbacks = await this.feedbackService.findAll();
      sendResponse(res, statusCodes.SUCCESS, Feedbacks);
    } catch (error) {
      logger.error('Get Feedbacks Controller Error', error);
      sendResponse(res, statusCodes.SERVER_ERROR, { message: error.message });
    }
  }
}

export default FeedbackController;