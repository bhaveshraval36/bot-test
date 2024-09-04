import { DataTypes, Model } from 'sequelize';
import sequelize from '../../core/config/database.js';
import Question from '../questions/question.schema.js'; // Ensure the correct path to the Question model

class Answer extends Model {}

Answer.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  question_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'questions',
      key: 'id',
    },
  },
  session_id: {
    type: DataTypes.STRING,
    allowNull: true,
    references: {
      model: 'sessions',
      key: 'session_id',
    },
  },
  answer: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  metadata: {
    type: DataTypes.TEXT, // PostgreSQL
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Answer',
  tableName: 'answers',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

// // Define the association after both models have been initialized
// Answer.belongsTo(Question, { as: 'question', foreignKey: 'question_id' });

export default Answer;