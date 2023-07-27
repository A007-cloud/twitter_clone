// controllers/tweetController.js

const Tweet = require('../models/tweet');
const { StatusCodes } = require('http-status-codes');
// Controller to create a new tweet
const createTweet = async (req, res) => {
  try {
    // create a new user
    const tweet = new Tweet({
      content: req.body.content,
      author: req.body.author,
    });
    const postTweet = await tweet.save();
    res.status(StatusCodes.CREATED).json({
      success: true,
      content: postTweet.content,
      authorID: postTweet.author,
    });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'Internal server error' });
  }
};

// Controller to get all tweets
const getTweets = async (req, res) => {
  try {
    const tweets = await Tweet.find().populate('author');
    res.json(tweets);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

//Controller to get tweets
const getSingleTweet = async (req, res) => {
  try {
    const tweet = await Tweet.findById(req.params.id).populate('author');
    res.status(200).json({
      success: true,
      data: tweet,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateTweet = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Data to update can not be empty!',
    });
  }
  const id = req.params.id;
  await Tweet.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `User not found.`,
        });
      } else {
        res.json({ data: data, message: 'User updated successfully.' });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

const deleteTweet = async (req, res) => {
  await Tweet.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `User not found.`,
        });
      } else {
        res.send({
          message: 'User deleted successfully!',
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

module.exports = {
  createTweet,
  getTweets,
  getSingleTweet,
  updateTweet,
  deleteTweet,
};
