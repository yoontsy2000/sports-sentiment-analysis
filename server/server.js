const express = require('express');
const Twitter = require('twitter');
const config = require('dotenv/config');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors())

const API_KEY = process.env.API_KEY;
const API_SECRET_KEY = process.env.API_SECRET_KEY;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const ACESSS_SECRET_TOKEN = process.env.ACESSS_SECRET_TOKEN;
const SPORTS_KEY = process.env.SPORTS_KEY;
const SPORTS_URL = process.env.SPORTS_URL;

const client = new Twitter({
  consumer_key: API_KEY,
  consumer_secret: API_SECRET_KEY,
  access_token_key: ACCESS_TOKEN,
  access_token_secret: ACESSS_SECRET_TOKEN
});
 
const params = {screen_name: 'nodejs', count: 1, exclude_replies: true};

const get_user_timeline = new Promise((resolve, reject) => {
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      resolve(tweets);
    } else {
      reject("Returned with error:", error);
    }
  });
});

const search_tweets = new Promise((resolve, reject) => {
  client.get('search/tweets', {q: '#NBA', result_type: 'popular', count: 5}, function(error, tweets, response) {
    if (!error) {
      resolve(tweets);
    } else {
      reject("Returned with error:", error);
    }
 });
})

app.get('/', (req, res) => {
  const params = {screen_name: 'nodejs'};
  console.log("Visited.")
  search_tweets.then(tweets => {
    res.send(tweets);
  })
});

app.listen(port, () => {
  console.log(`Currently running in localhost:${port}`);
})