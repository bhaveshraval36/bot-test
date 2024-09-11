import { Router } from 'express';
import passport from './auth.strategy.js';
import './auth.strategy.js';
import { frontendBaseUrl, redirectPath } from '../../core/common/constants/env.constants.js';

const router = Router();

/**
 * @route GET /auth/google
 * @desc Initiates Google OAuth2 authentication process
 * @access Public
 */
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

/**
 * @route GET /auth/google/callback
 * @desc Google OAuth2 callback route
 * @access Public
 * @returns Redirects to the dashboard with an auth token cookie
 */
router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    const isSecure = process.env.NODE_ENV === 'production';
    res.cookie('authUser', req.user, {
      httpOnly: true,
      secure: isSecure,
      sameSite: isSecure ? 'none' : 'lax',
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      path: '/',
    });

    // Redirect to dashboard
    res.redirect(`${frontendBaseUrl}${redirectPath}`);
  }
);

export default router;