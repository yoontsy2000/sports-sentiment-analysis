const express = require("express");
const router = express.Router();
const axios = require('axios');

const SPORTS_API_KEY = process.env.SPORTS_API_KEY;
const SPORTS_API_URL = process.env.SPORTS_API_URL;

// Leagues:
// 13014 - UEFA Champions
// 14431 - CONCACAF Champions
// 1325 - Portugal 1st League
// 18446 - USL First Division

var preferedLeagues = new Array("13014","14431","1325","18446","133411");


const liveSports = () => new Promise((resolve, reject) => {
    axios.get(`${SPORTS_API_URL}/sport/football/livescores?api_key=${SPORTS_API_KEY}`)
    .then(response => {
        var filt = response.data.data.filter(function(element){
            return preferedLeagues.includes(element.leagueId);
        });

        console.log(filt);
        return response.data;
    })

})

router.get('/live', (req, res) => {
    liveSports().then(response => {
        res.send(response);
    })
})
module.exports = router;
