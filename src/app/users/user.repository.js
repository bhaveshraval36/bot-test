import User from './user.schema.js';

/**
 * Repository for managing User data
 */
class UserRepository {
  /**
   * Create a new user
   * @param {Object} user - The user data
   * @returns {Promise<User>} The created user
   */
  async createUser(user) {
    console.log("🚀 ~ UserRepository ~ createUser ~ user:", user)
    let existingUser = await User.findOne({ where: { google_id: user.google_id } });  
    console.log("🚀 ~ UserRepository ~ createUser ~ existingUser:", existingUser)
    if(!existingUser) {
      existingUser = await User.create(user);
      console.log("🚀 ~ UserRepository ~ createUser ~ existingUser:", existingUser)
    }
    return existingUser
  }

  /**
   * Find all users
   * @returns {Promise<User[]>} List of users
   */
  async findAll() {
    return User.findAll();
  }

   /**
   * Find one user by condition
   * @param {Object} condition - The condition to find the user
   * @returns {Promise<User>} The user that matches the condition
   */
   async findOne(condition) {
    return await User.findOne(condition);
  }
}

export default UserRepository;
