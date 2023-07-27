// routes/tweetRoutes.js

const express = require('express');
const router = express.Router();
const verifyRoute = require('../services/jwt.Service');
const {
  createTweet,
  getTweets,
  getSingleTweet,
  updateTweet,
  deleteTweet,
} = require('../controller/tweet');

// Create a new tweet
// router.post('/tweets', tweetController.createTweet);
router.route('/create').post(verifyRoute, createTweet);

// Get all tweets
// router.get('/tweets', tweetController.getTweets);
router.route('/find').get(getTweets);

//Get single tweet with id
router.route('/find/:id').get(getSingleTweet);
// router.get('/:id', UserController.findOne);

// Update single tweet with id
router.route('/update/:id').patch(verifyRoute, updateTweet);

// Delete single tweet with id
router.route('/delete/:id').delete(verifyRoute, deleteTweet);

module.exports = router;
