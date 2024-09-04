import jwt from 'jsonwebtoken';
import UserService from './user.service.js';
import sendResponse from '../../core/common/utils/response.js';
import statusCodes from '../../core/common/utils/statusCodes.js';
import logger from '../../core/common/utils/logger.js';
import { jwtSecret } from '../../core/common/constants/env.constants.js';

/**
 * Controller for managing User routes
 */
class UserController {
  constructor() {
    this.userService = new UserService();
  }

/**
   * Create a new user
   * @param {import('express').Request} req - The request object
   * @param {import('express').Response} res - The response object
   */
async createUser(req, res) {
  let createUserDto = req.body;
  try {
    const user = await this.userService.createUser(createUserDto);
    sendResponse(res, statusCodes.CREATED, user);
  } catch (error) {
    logger.error('Create User Controller Error', error);
    sendResponse(res, statusCodes.INVALID_REQUEST, { message: error.message });
  }
}



/**
   * Create a new user
   * @param {import('express').Request} req - The request object
   * @param {import('express').Response} res - The response object
   */
async getAllUser(req, res) {
  try {
    const user = await this.userService.findAll();
    sendResponse(res, statusCodes.SUCCESS, user);
  } catch (error) {
    logger.error('Create User Controller Error', error);
    sendResponse(res, statusCodes.INVALID_REQUEST, { message: error.message });
  }
}


/**
   * Create a new user
   * @param {import('express').Request} req - The request object
   * @param {import('express').Response} res - The response object
   */
async getUserById(req, res) {
  try {
    const { user_id } = req.params;
    const user = await this.userService.getUserById(user_id);
    sendResponse(res, statusCodes.SUCCESS, user);
  } catch (error) {
    logger.error('Create User Controller Error', error);
    sendResponse(res, statusCodes.INVALID_REQUEST, { message: error.message });
  }
}


/**
 * Authenticate a user and generate a JWT token
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 */
async login(req, res) {
  const { email, password } = req.body;
  try {
    // const { user, token } = await this.userService.login(email, password);
    // for now added will remove this 
    if(email == 'admin' && password == 'admin') {
      const token = jwt.sign({ id: 1 }, jwtSecret);
      console.log("🚀 ~ UserController ~ login ~ token:", token)
      return sendResponse(res, statusCodes.SUCCESS, {  token });
    }
    sendResponse(res, statusCodes.UNAUTHORIZED);
  } catch (error) {
    logger.error('Login Controller Error', error);
    sendResponse(res, statusCodes.UNAUTHORIZED, { message: error.message });
  }
}

/**
 * Get all users
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 */
async getUsers(req, res) {
  try {
    const users = await this.userService.findAll();
    sendResponse(res, statusCodes.SUCCESS, users);
  } catch (error) {
    logger.error('Get Users Controller Error', error);
    sendResponse(res, statusCodes.SERVER_ERROR, { message: error.message });
  }
}
}

export default UserController;