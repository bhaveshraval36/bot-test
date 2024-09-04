import QuestionMaster from './question-master.schema.js';

/**
 * Repository for managing QuestionMaster data
 */
class QuestionMasterRepository {

  /**
   * Find all QuestionMasters
   * @returns {Promise<QuestionMaster[]>} List of QuestionMasters
   */
  async findAll() {
    return QuestionMaster.findAll({order: [['id', 'DESC']]});
  }
}

export default QuestionMasterRepository;