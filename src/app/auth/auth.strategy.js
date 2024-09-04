import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import jwt from 'jsonwebtoken';
import UserRepository from '../users/user.repository.js';
import { backendBaseUrl, callBackUrl, googleClientId, googleClientSecret, jwtSecret } from '../../core/common/constants/env.constants.js';

// Define your OAuth2 credentials
const clientID = googleClientId;
const clientSecret = googleClientSecret;
const callbackURL = callBackUrl;
const jwtSecretData = jwtSecret;

const userRepository = new UserRepository();

/**
 * Configure the Google OAuth2 strategy
 * @param {string} clientID - Google OAuth2 client ID
 * @param {string} clientSecret - Google OAuth2 client secret
 * @param {string} callbackURL - Google OAuth2 callback URL
 */
passport.use(new GoogleStrategy({
    clientID: clientID,
    clientSecret: clientSecret,
    callbackURL: `${backendBaseUrl}${callbackURL}`
  },
  /**
   * Google OAuth2 strategy callback
   * @param {string} accessToken - Access token
   * @param {string} refreshToken - Refresh token
   * @param {object} profile - User profile
   * @param {function} done - Callback function
   */
  async (accessToken, refreshToken, profile, done) => {
    let userData = {
      google_id: profile?._json?.sub,
      email: profile?._json?.email,
      name: profile?._json?.name,
      picture: profile?._json?.picture,
      provider: profile?.provider
    };
    userData = (await userRepository.createUser(userData)).dataValues;
    const token = jwt.sign({ id: userData?.id }, jwtSecretData);
    userData.token = token;
    return done(null, userData);
  }
));

/**
 * Configure the JWT strategy
 * @param {object} opts - JWT strategy options
 * @param {function} done - Callback function
 */
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret
};

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
  userRepository.findOne({ where: { id: jwt_payload.id } }, function(err, user) {
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
}));

/**
 * Serialize user into the sessions
 * @param {object} user - User object
 * @param {function} done - Callback function
 */
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

/**
 * Deserialize user from the sessions
 * @param {string} id - User ID
 * @param {function} done - Callback function
 */
passport.deserializeUser(function(id, done) {
  done(null, id);
});

export default passport;