import feedback from './feedback.schema.js';

/**
 * Repository for managing Feedback data
 */
class FeedbackRepository {
  /**
   * Create a new Feedback
   * @param {Object} FeedbackDto - The Feedback data transfer object
   * @returns {Promise<feedback>} The created Feedback
   */
  async createFeedback(feedbackDto) {
    return feedback.create(feedbackDto);
  }

  /**
   * Find all Feedbacks 
   * @returns {Promise<Feedback[]>} List of Feedbacks
   */
  async findAll() {
    return feedback.findAll({order: [['id', 'DESC']]});
  }
}

export default FeedbackRepository;