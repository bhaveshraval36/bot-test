import { where } from 'sequelize';
import Question from './question.schema.js';

/**
 * Repository for managing Question data
 */
class QuestionRepository {
  /**
   * Create a new Question
   * @param {Object} QuestionDto - The Question data transfer object
   * @returns {Promise<Question>} The created Question
   */
  async createQuestion(QuestionDto,  options = {}) {
    return Question.create(QuestionDto, options);
  }

  /**
   * Find all Questions 
   * @returns {Promise<Question[]>} List of Questions
   */
  async findAll() {
    return Question.findAll({order: [['id', 'DESC']]});
  }
}

export default QuestionRepository;