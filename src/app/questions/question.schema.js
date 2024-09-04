import { DataTypes, Model } from 'sequelize';
import sequelize from '../../core/config/database.js';
import Answer from '../answers/answer.schema.js'; // Ensure the correct path to the Answer model

class Question extends Model {}

Question.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  session_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  question: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  source: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'Question',
  tableName: 'questions',
  timestamps: false,
});

// // Define the association after both models have been initialized
// Question.hasMany(Answer, { as: 'answers', foreignKey: 'question_id' });

export default Question;