const express = require("express");
const router = express.Router();
const axios = require('axios');

const SPORTS_API_KEY = process.env.SPORTS_API_KEY;
const SPORTS_API_URL = process.env.SPORTS_API_URL;

const liveSports = () => new Promise((resolve, reject) => {
    axios.get(`${SPORTS_API_URL}/sport/football/livescores?api_key=${SPORTS_API_KEY}`)
    .then(response => {
        console.log(response.data)

        return response.data;
    })
})

router.get('/live', (req, res) => {
    liveSports().then(response => {
        res.send(response);
    })
})
module.exports = router;
