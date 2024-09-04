import QuestionMasterRepository from './question-master.repository.js';
import logger from '../../core/common/utils/logger.js';

/**
 * Service for managing QuestionMaster operations
 */
class QuestionMasterService {
  constructor() {
    this.QuestionMasterRepository = new QuestionMasterRepository();
  }

  /**
   * Find all QuestionMasters
   * @returns {Promise<QuestionMaster[]>} List of QuestionMasters
   * @throws {Error} - If an error occurs while retrieving the QuestionMasters
   */
  async findAll() {
    try {
      return this.QuestionMasterRepository.findAll();
    } catch (error) {
      logger.error('Find All QuestionMasters Error', error);
      throw error;
    }
  }
}

export default QuestionMasterService;