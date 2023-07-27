const express = require('express');
const router = express.Router();
const verifyRoute = require('../services/jwt.Service');
const {
  registerUser,
  logInUser,
  logOutUser,
  followUser,
  unfollowUser,
} = require('../controller/user');

// routes
router.route('/register').post(registerUser);
router.route('/login').post(logInUser);
router.route('/logout').post(verifyRoute, logOutUser);

// Follow a user
router.route('/follow/:userId').post(followUser);

// Unfollow a user
router.route('/unfollow/:userId').post(unfollowUser);

module.exports = router;
