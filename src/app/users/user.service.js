import UserRepository from './user.repository.js';
import bcrypt from 'bcrypt';
import logger from '../../core/common/utils/logger.js';
import jwt from 'jsonwebtoken';

/**
 * Service for managing User operations
 */
class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  /**
   * Create a new user
   * @param {Object} createUserDto - The user data transfer object
   * @returns {Promise<User>} The created user
   */
  async createUser(createUserDto) {
    try {
      // const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
      const user = await this.userRepository.createUser({ ...createUserDto});
      return user;
    } catch (error) {
      logger.error('Create User Error', error);
      throw error;
    }
  }

  /**
   * Authenticate a user and generate a JWT token
   * @param {string} email - The user's email
   * @param {string} password - The user's password
   * @returns {Promise<Object>} The authenticated user and token
   */
  async login(email, password) {
    const user = await this.userRepository.findByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid email or password');
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { user, token };
  }

  /**
   * Find all users
   * @returns {Promise<User[]>} List of users
   */
  async findAll() {
    try {
      return await this.userRepository.findAll();
    } catch (error) {
      logger.error('Find All Users Error', error);
      throw error;
    }
  }


    /**
   * Find User By Id 
   * @returns {Promise<User[]>} List of users
   */
    async getUserById(id) {
      try {
        return await this.userRepository.findOne({ where: { id } });
      } catch (error) {
        logger.error('Find All Users Error', error);
        throw error;
      }
    }
}

export default UserService;
