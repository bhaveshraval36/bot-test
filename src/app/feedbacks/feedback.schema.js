import { DataTypes, Model } from 'sequelize';
import sequelize from '../../core/config/database.js';

/**
 * Feedback Schema
 * @extends Model
 */
class Feedback extends Model {}

Feedback.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,  // Ensures auto-increment for ID
  },
  answer_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'answers',
      key: 'id',
    },
  },
  is_helpful: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  reason_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'reasons_master',
      key: 'id',
    },
  },
  custom_reason: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Feedback',
  tableName: 'feedback',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

export default Feedback;
