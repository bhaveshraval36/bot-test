import Question from './question.schema.js';
import Answer from '../answers/answer.schema.js';

// Define the association after both models have been initialized
Question.hasMany(Answer, { as: 'answers', foreignKey: 'question_id' });
Answer.belongsTo(Question, { as: 'question', foreignKey: 'question_id' });

export { Question, Answer };