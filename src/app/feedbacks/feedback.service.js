import feedbackRepository from './feedback.repository.js';
import logger from '../../core/common/utils/logger.js';

/**
 * Service for managing Feedback operations
 */
class FeedbackService {
  constructor() {
    this.feedbackRepository = new feedbackRepository();
  }

  /**
   * Create a new Feedback
   * @param {Object} createFeedbackDto - The Feedback data transfer object
   * @returns {Promise<Feedback>} The created Feedback
   * @throws {Error} - If an error occurs while creating the Feedback
   */
  async createFeedback(createFeedbackDto) {
    try {
      const feedback = await this.feedbackRepository.createFeedback(createFeedbackDto);
      return feedback;
    } catch (error) {
      logger.error('Create Feedback Error', error);
      throw error;
    }
  }

  /**
   * Find all Feedbacks
   * @returns {Promise<Feedback[]>} List of Feedbacks
   * @throws {Error} - If an error occurs while retrieving the Feedbacks
   */
  async findAll() {
    try {
      return this.feedbackRepository.findAll();
    } catch (error) {
      logger.error('Find All Feedbacks Error', error);
      throw error;
    }
  }
}

export default FeedbackService;