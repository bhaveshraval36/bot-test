import SessionService from './session.service.js';
import sendResponse from '../../core/common/utils/response.js';
import statusCodes from '../../core/common/utils/statusCodes.js';
import logger from '../../core/common/utils/logger.js';

/**
 * Controller for managing Session routes
 */
class SessionController {
  constructor() {
    this.SessionService = new SessionService();
  }

  /**
   * Creates a new session.
   *
   * @async
   * @function createSession
   * @param {Object} req - The request object.
   * @param {Object} req.body - The request body containing session details.
   * @param {Object} res - The response object.
   * @returns {Promise<void>} - A promise that resolves when the response is sent.
   * @throws {Error} - If an error occurs while creating the session.
   */
  async createSession(req, res) {
    let createSessionDto = req.body;
    try {
      const Session = await this.SessionService.createSession(createSessionDto);
      sendResponse(res, statusCodes.CREATED, Session);
    } catch (error) {
      logger.error('Create Session Controller Error', error);
      sendResponse(res, statusCodes.INVALID_REQUEST, { message: error.message });
    }
  }

  /**
   * Retrieves all sessions for a given user ID.
   *
   * @async
   * @function getSessionsByUserId
   * @param {Object} req - The request object.
   * @param {Object} req.params - The request parameters.
   * @param {string} req.params.user_id - The ID of the user whose sessions are to be retrieved.
   * @param {Object} res - The response object.
   * @returns {Promise<void>} - A promise that resolves when the response is sent.
   * @throws {Error} - If an error occurs while retrieving the sessions.
   */
  async getSessionsByUserId(req, res) {
    try {
      const { user_id } = req.params;
      const Sessions = await this.SessionService.findAll(user_id);
      sendResponse(res, statusCodes.SUCCESS, Sessions);
    } catch (error) {
      logger.error('Get Sessions Controller Error', error);
      sendResponse(res, statusCodes.SERVER_ERROR, { message: error.message });
    }
  }
}

export default SessionController;