import sequelize from "../../core/config/database.js"; // Adjust the path as needed
import QuestionRepository from "./question.repository.js";
import AnswerRepository from "../answers/answer.repository.js";
import logger from "../../core/common/utils/logger.js";
import AxiosServer from "../../core/common/utils/axios.js"; // Adjust the path as needed
import { aiApiUrl } from "../../core/common/constants/env.constants.js";
import { where } from "sequelize";
import { Answer, Question } from "./associations.js";

const axiosServer = new AxiosServer(`${aiApiUrl}`);

/**
 * Service for managing Question operations
 */
class QuestionService {
  constructor() {
    this.QuestionRepository = new QuestionRepository();
    this.AnswerRepository = new AnswerRepository();
  }

  /**
   * Create a new Question
   * @param {Object} createQuestionDto - The Question data transfer object
   * @returns {Promise<Question>} The created Question
   * @throws {Error} - If an error occurs while creating the Question
   */
  async createQuestion(createQuestionDto) {
    const transaction = await sequelize.transaction();
    try {
      console.log("coming here ================>", createQuestionDto);

      // Make the external API call
      const response = await axiosServer.post(
        "/predict",
        { question: createQuestionDto?.question, source: createQuestionDto?.source },
        {
          "Content-Type": "multipart/form-data", // Example of setting Content-Type dynamically
        }
      );
      console.log(
        "🚀 ~ QuestionService ~ createQuestion ~ response:",
        response
      );

      // Create the question in the repository within the transaction
      const Question = await this.QuestionRepository.createQuestion(
        createQuestionDto,
        { transaction }
      );
      console.log(
        "🚀 ~ QuestionService ~ createQuestion ~ Question:",
        Question
      );

      let answerData = {
        question_id: Question?.dataValues?.id,
        session_id: Question?.dataValues?.session_id,
        answer: response?.answer,
        metadata: response?.relevant_excerpts,
      }

      // Create the question in the repository within the transaction
      const answer = await this.AnswerRepository.createAnswer(
        answerData,
        { transaction }
      );
      console.log(
        "🚀 ~ QuestionService ~ createQuestion ~ Question:",
        answer
      );

      // Commit the transaction
      await transaction.commit();

      return {question: Question.dataValues, answer: answer.dataValues};
    } catch (error) {
      // Rollback the transaction in case of error
      await transaction.rollback();
      logger.error("Create Question Error", error);
      throw error;
    }
  }

  /**
   * Find all Questions
   * @returns {Promise<Question[]>} List of Questions
   * @throws {Error} - If an error occurs while retrieving the Questions
   */
  async findAll() {
    try {
      return this.QuestionRepository.findAll();
    } catch (error) {
      logger.error("Find All Questions Error", error);
      throw error;
    }
  }

    /**
   * Find all Questions and Answer by session id 
   * @returns {Promise<Question[]>} List of Questions
   * @throws {Error} - If an error occurs while retrieving the Questions
   */
    async getAll(session_id) {
      try {
        return await Question.findAll({
          where: {
            session_id: session_id,
          },
          include: [{
            model: Answer, // Assuming Answer is the model for the answers table
            as: 'answers', // Alias for the association
            required: false, // If you want to include questions even if they don't have answers
          }],
          order: [['created_at', 'DESC']],
        });
      } catch (error) {
        logger.error("Find All Questions and Answers Error", error);
        throw error;
      }
    }

  
}

export default QuestionService;
