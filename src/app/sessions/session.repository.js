import { where } from 'sequelize';
import Session from './session.schema.js';

/**
 * Repository for managing Session data
 */
class SessionRepository {
  /**
   * Create a new Session
   * @param {Object} sessionDto - The Session data transfer object
   * @returns {Promise<Session>} The created Session
   */
  async createSession(sessionDto) {
    return Session.create(sessionDto);
  }

  /**
   * Find all Sessions by UserId
   * @param {number} userId - The ID of the user whose sessions are to be retrieved
   * @returns {Promise<Session[]>} List of Sessions
   */
  async findAll(userId) {
    return Session.findAll({
      where: { user_id: userId },
      order: [["created_at", 'DESC']]
    });
  }
}

export default SessionRepository;