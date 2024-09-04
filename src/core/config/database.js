import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { dbDatabase, dbHost, dbPassword, dbUsername } from '../common/constants/env.constants.js';


dotenv.config();

/**
 * Initialize Sequelize instance
 * @type {Sequelize}
 */
const sequelize = new Sequelize(dbDatabase, dbUsername, dbPassword, {
  host: dbHost,
  dialect: 'mysql',
  logging: false,
});

export default sequelize;
