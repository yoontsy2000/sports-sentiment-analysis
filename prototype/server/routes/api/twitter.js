const express = require("express");
const router = express.Router();
const Twitter = require('twitter');
const config = require('dotenv/config');

const TWITTER_API_KEY = process.env.TWITTER_API_KEY;
const TWITTER_API_SECRET_KEY = process.env.TWITTER_API_SECRET_KEY;
const TWITTER_ACCESS_TOKEN = process.env.TWITTER_ACCESS_TOKEN;
const TWITTER_ACESSS_SECRET_TOKEN = process.env.TWITTER_ACESSS_SECRET_TOKEN;

const client = new Twitter({
  consumer_key: TWITTER_API_KEY,
  consumer_secret: TWITTER_API_SECRET_KEY,
  access_token_key: TWITTER_ACCESS_TOKEN,
  access_token_secret: TWITTER_ACESSS_SECRET_TOKEN
});

//Twitter API for finding the tweets with the tag that the use inputs.
//gives back the top 5 tweets of that specified tag

const search_tweets = (query) => new Promise((resolve, reject) => {
  client.get('search/tweets', {q: query, result_type: 'popular', count: 5}, function(error, tweets, response) {
    if (!error) {
      resolve(tweets);
    } else {
      reject("Returned with error:", error);
    }
 });
})

router.get('/test', (req, res) => {
  res.send("Hello!");
})

//Twitter search bar 
//It will search whatever is in query into Twitter and return the tweets as results

router.get('/search', (req, res) => {
  const query = req.query.search
  console.log(query)
  search_tweets(query).then(tweets => {
    res.send(tweets);
  }).catch(err => console.log("Error:", err))
});


module.exports = router;