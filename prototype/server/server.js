// Middleware functions
const express = require('express');
const cors = require('cors');
const axios = require('axios');

// API functions
const users = require("./routes/api/users");
const twitter = require("./routes/api/twitter");
const watson = require("./routes/api/watson");
const sports = require("./routes/api/sports");

// Database
const mongoose = require("mongoose");
const passport = require("passport");

// Configuration
const config = require('dotenv/config');

const app = express();
const url = 'http://127.0.0.1:5000'
const port = 5000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded());

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/twitter", twitter)
app.use("/api/watson", watson)
app.use("/api/sports", sports)

const MONGO_URI = process.env.MONGO_URI
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected successfully")
});

app.listen(port, () => {
  console.log(`Currently running in localhost:${port}`);
})

app.get('/tone', (req, res) => {
  const query = req.query.search
  console.log('Query from')

  axios.get(`${url}/api/twitter/search`, {
    params: {
      search: query
    }
  })
  .then(response => {
    const tweets = response.data.statuses
    var parsedText = ""
    //parses all the 5 tweets into one text to run on the tone analyzer
    tweets.forEach((tweet) => {
      parsedText += tweet.text
    })

    axios.get(`${url}/api/watson/tone`, {
      params: {
        text: parsedText
      }
    //returns the emotion tone analyzer of the parsedText
    }).then(response => {
      res.send(response.data.document_tone.tone_categories[0])
    }).catch(error => {
      console.log(error)
    })
  })
  .catch(error => console.log(error))
})