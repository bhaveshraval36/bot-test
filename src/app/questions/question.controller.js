import QuestionService from './question.service.js';
import sendResponse from '../../core/common/utils/response.js';
import statusCodes from '../../core/common/utils/statusCodes.js';
import logger from '../../core/common/utils/logger.js';

/**
 * Controller for managing Question routes
 */
class QuestionController {
  constructor() {
    this.QuestionService = new QuestionService();
  }

  /**
   * Creates a new Question.
   *
   * @async
   * @function createQuestion
   * @param {Object} req - The request object.
   * @param {Object} req.body - The request body containing Question details.
   * @param {Object} res - The response object.
   * @returns {Promise<void>} - A promise that resolves when the response is sent.
   * @throws {Error} - If an error occurs while creating the Question.
   */
  async createQuestion(req, res) {
    let createQuestionDto = req.body;
    try {
      const Question = await this.QuestionService.createQuestion(createQuestionDto);
      sendResponse(res, statusCodes.CREATED, Question);
    } catch (error) {
      logger.error('Create Question Controller Error', error);
      sendResponse(res, statusCodes.INVALID_REQUEST, { message: error.message });
    }
  }

  /**
   * Retrieves all Questions.
   *
   * @async
   * @function getAllQuestions
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Promise<void>} - A promise that resolves when the response is sent.
   * @throws {Error} - If an error occurs while retrieving the Questions.
   */
  async getAllQuestions(req, res) {
    try {
      const { session_id } = req.params;
      const questions = await this.QuestionService.findAll(session_id);
      sendResponse(res, statusCodes.SUCCESS, questions);
    } catch (error) {
      logger.error('Get Questions Controller Error', error);
      sendResponse(res, statusCodes.SERVER_ERROR, { message: error.message });
    }
  }


  /**
   * Retrieves all Questions and Answer by session id.
   *
   * @async
   * @function getAllQuestions
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Promise<void>} - A promise that resolves when the response is sent.
   * @throws {Error} - If an error occurs while retrieving the Questions.
   */
  async getAllQuestionsAndAnswerBySessionId(req, res) {
    try {
      
      const { session_id } = req.params;
      const questions = await this.QuestionService.getAll(session_id);
      sendResponse(res, statusCodes.SUCCESS, questions);
    } catch (error) {
      logger.error('Get Questions Controller Error', error);
      sendResponse(res, statusCodes.SERVER_ERROR, { message: error.message });
    }
  }

}

export default QuestionController;