const express = require('express');

module.exports = (passport) => {
    const router = express.Router();

    // =============================================================================
    // AUTHENTICATE
    // =============================================================================

    // local
    // router.post('/login') // process the login form
    // router.post('/signup') // process the signup/register form

    // facebook
    // router.get('/auth/facebook') // send to facebook for authentication
    // router.get('/auth/facebook/callback') // handle the callback after user is authenticated

    // twitter
    // router.get('/auth/twitter') // send to twitter for authentication
    // router.get('/auth/twitter/callback') // handle the callback after user is authenticated

    // google
    // router.get('/auth/google') // send to google for authentication
    // router.get('/auth/google/callback') // handle the callback after user is authenticated

    // =============================================================================
    // AUTHORIZE
    // =============================================================================

    // local
    // router.post('/connect/local') // process the local connection form

    // facebook
    // router.get('/connect/facebook') // send to facebook for authentication
    // router.get('/connect/facebook/callback') // handle the callback after user is authorized

    // twitter
    // router.get('/connect/twitter') // send to twitter for authentication
    // router.get('/connect/twitter/callback') // handle the callback after user is authorized

    // google
    // router.get('/connect/google') // send to google for authentication
    // router.get('/connect/google/callback') // handle the callback after user is authorized

    // =============================================================================
    // UNLINK ACCOUNTS
    // =============================================================================

    // local
    // router.get('/unlink/local') // unlink the local account

    // facebook
    // router.get('/unlink/facebook') // unlink the facebook account

    // twitter
    // router.get('/unlink/twitter') // unlink the twitter account

    // google
    // router.get('/unlink/google') // unlink the google account

    return router;
};

// middleware to ensure that the user is logged in
function isLoggedIn(req, res, next) {
    // check is user is authenticated
    if (req.isAuthenticated()) {
        return next();
    }
    // otherwise redirect to home page
    res.redirect('/');
}