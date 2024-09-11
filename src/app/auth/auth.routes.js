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
    // Set auth token in cookie
   // res.cookie('authUser', req.user, {
    //  sameSite: 'None',  // Allows cross-site cookies
   //   secure: true,      // Ensures the cookie is sent only over HTTPS
    //  domain: frontendBaseUrl // Set the domain to cover both frontend and backend   
   // });
	  //
	 const isSecure = req.secure || req.headers['x-forwarded-proto'] === 'https';

    res.cookie('authUser', req.user, {
      httpOnly: true,    // Ensure the cookie is not accessible via JS
      secure: isSecure,     // Set to true if using HTTPS
      sameSite: 'None',   // Set for cross-site requests if needed
    });
    res.body=req.user
    // Redirect to dashboard
    res.redirect(`${frontendBaseUrl}${redirectPath}`);
  }
);

export default router;
