import SessionRepository from './session.repository.js';
import logger from '../../core/common/utils/logger.js';

/**
 * Service for managing Session operations
 */
class SessionService {
  constructor() {
    this.SessionRepository = new SessionRepository();
  }

  /**
   * Create a new Session
   * @param {Object} createSessionDto - The Session data transfer object
   * @returns {Promise<Session>} The created Session
   * @throws {Error} - If an error occurs while creating the session
   */
  async createSession(createSessionDto) {
    try {
      const Session = await this.SessionRepository.createSession(createSessionDto);
      return Session;
    } catch (error) {
      logger.error('Create Session Error', error);
      throw error;
    }
  }

  /**
   * Find all Sessions by UserId
   * @param {number} user_id - The ID of the user whose sessions are to be retrieved
   * @returns {Promise<Session[]>} List of Sessions
   * @throws {Error} - If an error occurs while retrieving the sessions
   */
  async findAll(user_id) {
    try {
      return this.SessionRepository.findAll(user_id);
    } catch (error) {
      logger.error('Find All Sessions Error', error);
      throw error;
    }
  }
}

export default SessionService;