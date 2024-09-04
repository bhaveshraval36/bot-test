import overallFeedbackRepository from "./overall-feedback.repository.js";
import logger from "../../core/common/utils/logger.js";
import { aiApiUrl } from "../../core/common/constants/env.constants.js";
// import {  overallFeedback } from "./associations.js";

// const axiosServer = new AxiosServer(`${aiApiUrl}`);

/**
 * Service for managing overallFeedback operations
 */
class overallFeedbackService {
  constructor() {
    this.overallFeedbackRepository = new overallFeedbackRepository();
  }

  /**
   * Create a new overallFeedback
   * @param {Object} createoverallFeedbackDto - The overallFeedback data transfer object
   * @returns {Promise<overallFeedback>} The created overallFeedback
   * @throws {Error} - If an error occurs while creating the overallFeedback
   */
  async createOverallFeedback(createOverallFeedbackDto) {
    try {
      // Create the overallFeedback in the repository within the transaction
      const overallFeedback = await this.overallFeedbackRepository.createOverallFeedback(
        createOverallFeedbackDto
      );
     
      return overallFeedback
    } catch (error) { 
      logger.error("Create overallFeedback Error", error);
      throw error;
    }
  }

    /**
   * Find all overallFeedbacks and Answer by user id 
   * @returns {Promise<overallFeedback[]>} List of overallFeedbacks
   * @throws {Error} - If an error occurs while retrieving the overallFeedbacks
   */
    async getAll(user_id) {
      try {
        return await this.overallFeedbackRepository.getallByUserId({
          where: {
            user_id: user_id,
          },
          order: [['created_at', 'DESC']],
        });
      } catch (error) {
        logger.error("Find All overallFeedbacks and Answers Error", error);
        throw error;
      }
    }

  
}

export default overallFeedbackService;
