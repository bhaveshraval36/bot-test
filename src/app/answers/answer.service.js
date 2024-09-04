import sequelize from '../../core/config/database.js'; // Adjust the path as needed
import answerRepository from './answer.repository.js';
import logger from '../../core/common/utils/logger.js';
import AxiosServer from '../../core/common/utils/axios.js'; // Adjust the path as needed
import { aiApiUrl } from '../../core/common/constants/env.constants.js';

const axiosServer = new AxiosServer(`${aiApiUrl}`);


/**
 * Service for managing Answer operations
 */
class AnswerService {
  constructor() {
    this.AnswerRepository = new answerRepository();
  }

}

export default AnswerService;