import { DataTypes, Model } from 'sequelize';
import sequelize from '../../core/config/database.js';

/**
 * User Schema
 * @extends Model
 */
class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  google_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  picture: {
    type: DataTypes.STRING,
    allowNull: true,
  }, 
   provider: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

export default User;
