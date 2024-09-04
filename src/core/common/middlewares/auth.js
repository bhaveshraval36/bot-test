import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import UserService from '../../../app/users/user.service.js';

const userService = new UserService();

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

passport.use(new JwtStrategy(opts, async (jwtPayload, done) => {
  try {
    const user = await userService.findById(jwtPayload.id);
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(error, false);
  }
}));

const initializePassport = (app) => {
  app.use(passport.initialize());
};

export const authenticate = passport.authenticate('jwt', { session: false });

export default initializePassport;
