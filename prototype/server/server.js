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


const client = new Twitter({
  consumer_key: API_KEY,
  consumer_secret: API_SECRET_KEY,
  access_token_key: ACCESS_TOKEN,
  access_token_secret: ACESSS_SECRET_TOKEN
});

// const get_user_timeline = new Promise((resolve, reject) => {
//   client.get('statuses/user_timeline', params, function(error, tweets, response) {
//     if (!error) {
//       resolve(tweets);
//     } else {
//       reject("Returned with error:", error);
//     }
//   });
// });

const search_tweets = (query) => new Promise((resolve, reject) => {
  client.get('search/tweets', {q: query, result_type: 'popular', count: 5}, function(error, tweets, response) {
    if (!error) {
      resolve(tweets);
    } else {
      reject("Returned with error:", error);
    }
 });
})

app.get('/', (req, res) => {
  const query = req.query.search
  console.log(query)
  search_tweets(query).then(tweets => {
    res.send(tweets);
  }).catch(err => console.log("Error:", err))
});

app.listen(port, () => {
  console.log(`Currently running in localhost:${port}`);
})