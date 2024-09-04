import { where } from 'sequelize';
import overallFeedback from './overall-feedback.schema.js';

/**
 * Repository for managing overallFeedback data
 */
class overallFeedbackRepository {
  /**
   * Create a new overallFeedback
   * @param {Object} overallFeedbackDto - The overallFeedback data transfer object
   * @returns {Promise<overallFeedback>} The created overallFeedback
   */
  async createOverallFeedback(overallFeedbackDto,  options = {}) {
    return overallFeedback.create(overallFeedbackDto, options);
  }

  /**
   * Find all overallFeedbacks 
   * @returns {Promise<overallFeedback[]>} List of overallFeedbacks
   */
  async getallByUserId(condition) {
    return overallFeedback.findAll(condition);
  }
}

export default overallFeedbackRepository;