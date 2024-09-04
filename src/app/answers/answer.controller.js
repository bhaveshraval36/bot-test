import answerService from './answer.service.js';

/**
 * Controller for managing Answer routes
 */
class AnswerController {
  constructor() {
    this.answerService = new answerService();
  }

}

export default AnswerController;