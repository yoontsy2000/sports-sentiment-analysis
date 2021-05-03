// Middleware functions
const express = require('express');
const cors = require('cors');

// API functions
const Twitter = require('twitter');
const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

// Database
const mongoose = require("mongoose");

// Configuration
const config = require('dotenv/config');

const app = express();
const port = 5000;

app.use(cors())

// MONGODB

const MONGO_URI = "mongodb+srv://tsyoon:ntQqqEC72idd7nPu@cluster0.kvk58.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected successfully")
});

// TWITTER API

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

// WATSON API

const WATSON_API_KEY = process.env.WATSON_API_KEY;
const WATSON_API_URL = process.env.WATSON_API_URL;

console.log(WATSON_API_KEY)

const SAMPLE_TEXT = {
  "text": "Team, I know that times are tough! Product sales have been disappointing for the past three quarters. We have a competitive product, but we need to do a better job of selling it!"
}

const toneAnalyzer = new ToneAnalyzerV3({
  authenticator: new IamAuthenticator({ apikey: WATSON_API_KEY }),
  version: '2016-05-19',
  serviceUrl: WATSON_API_URL
});

app.get('/tone', (req, res) => {
  toneAnalyzer.tone(
    {
      toneInput: SAMPLE_TEXT.text,
      contentType: 'text/plain'
    })
    .then(response => {
      console.log(JSON.stringify(response.result, null, 2));
    })
    .catch(err => {
      console.log(err);
    });
})