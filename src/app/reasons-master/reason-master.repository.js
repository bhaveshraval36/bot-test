import ReasonMaster from './reason-master.schema.js';

/**
 * Repository for managing ReasonMaster data
 */
class ReasonMasterRepository {

  /**
   * Find all ReasonMasters
   * @returns {Promise<ReasonMaster[]>} List of ReasonMasters
   */
  async findAll() {
    return ReasonMaster.findAll({order: [['id', 'DESC']]});
  }
}

export default ReasonMasterRepository;