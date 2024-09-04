import { DataTypes, Model } from 'sequelize';
import sequelize from '../../core/config/database.js';
import Answer from '../answers/answer.schema.js'; // Ensure the correct path to the Answer model

class OverallFeedback extends Model {}

OverallFeedback.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  feedback: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'overallFeedback',
  tableName: 'overall_feedbacks',
  timestamps: false,
});

export default OverallFeedback;