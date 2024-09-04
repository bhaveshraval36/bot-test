import { DataTypes, Model } from 'sequelize';
import sequelize from '../../core/config/database.js';

/**
 * Session Schema
 * @extends Model
 */
class Session extends Model {}

Session.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  session_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Session',
  tableName: 'sessions',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

export default Session;
