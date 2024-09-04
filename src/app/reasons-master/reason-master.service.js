import ReasonMasterRepository from './reason-master.repository.js';
import logger from '../../core/common/utils/logger.js';

/**
 * Service for managing ReasonMaster operations
 */
class ReasonMasterService {
  constructor() {
    this.ReasonMasterRepository = new ReasonMasterRepository();
  }

  /**
   * Find all ReasonMasters
   * @returns {Promise<ReasonMaster[]>} List of ReasonMasters
   * @throws {Error} - If an error occurs while retrieving the ReasonMasters
   */
  async findAll() {
    try {
      return this.ReasonMasterRepository.findAll();
    } catch (error) {
      logger.error('Find All ReasonMasters Error', error);
      throw error;
    }
  }
}

export default ReasonMasterService;