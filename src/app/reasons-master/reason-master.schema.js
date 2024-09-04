import { DataTypes, Model } from 'sequelize';
import sequelize from '../../core/config/database.js';

/**
 * Reasons Master Schema
 * @extends Model
 */
class ReasonMaster extends Model {}

ReasonMaster.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,  // Ensures auto-increment for ID
  },
  reason: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'ReasonMaster',
  tableName: 'reasons_master',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

export default ReasonMaster;
