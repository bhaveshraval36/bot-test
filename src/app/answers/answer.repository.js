import { where } from 'sequelize';
import answer from './answer.schema.js';

/**
 * Repository for managing Answer data
 */
class AnswerRepository {
  /**
   * Create a new Answer
   * @param {Object} AnswerDto - The Answer data transfer object
   * @returns {Promise<Answer>} The created Answer
   */
  async createAnswer(answerDto,  options = {}) {
    return answer.create(answerDto, options);
  }

  /**
   * Find all Answers 
   * @returns {Promise<Answer[]>} List of Answers
   */
  async findAll() {
    return answer.findAll({order: [['id', 'DESC']]});
  }
}

export default AnswerRepository;