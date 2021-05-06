const express = require("express");
const router = express.Router();
const Twitter = require('twitter');
const config = require('dotenv/config');

const API_KEY = process.env.API_KEY;
const API_SECRET_KEY = process.env.API_SECRET_KEY;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const ACESSS_SECRET_TOKEN = process.env.ACESSS_SECRET_TOKEN;

const client = new Twitter({
  consumer_key: API_KEY,
  consumer_secret: API_SECRET_KEY,
  access_token_key: ACCESS_TOKEN,
  access_token_secret: ACESSS_SECRET_TOKEN
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