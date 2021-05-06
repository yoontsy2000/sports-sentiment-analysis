const express = require("express");
const router = express.Router();
const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
const config = require('dotenv/config');

const WATSON_API_KEY = process.env.WATSON_API_KEY;
const WATSON_API_URL = process.env.WATSON_API_URL;

const SAMPLE_TEXT = {
  "text": "Team, I know that times are tough! Product sales have been disappointing for the past three quarters. We have a competitive product, but we need to do a better job of selling it!"
}

const toneAnalyzer = new ToneAnalyzerV3({
  authenticator: new IamAuthenticator({ apikey: WATSON_API_KEY }),
  version: '2016-05-19',
  serviceUrl: WATSON_API_URL
});


//Watson API function for inputting a text that would give us the tone categories
//and the scores for each tone categories. 
router.get('/tone', (req, res) => {
  const query = req.query.text
  toneAnalyzer.tone(
    {
      toneInput: query,
      contentType: 'text/plain'
    })
    .then(response => {
      res.send(JSON.stringify(response.result, null, 2));
    })
    .catch(err => {
      console.log(err);
    });
})


module.exports = router;