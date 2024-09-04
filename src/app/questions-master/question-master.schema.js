import { DataTypes, Model } from 'sequelize';
import sequelize from '../../core/config/database.js';

/**
 * Questions Master Schema
 * @extends Model
 */
class QuestionsMaster extends Model {}

QuestionsMaster.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,  // Ensures auto-increment for ID
  },
  question: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'QuestionsMaster',
  tableName: 'questions_master',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

export default QuestionsMaster;
