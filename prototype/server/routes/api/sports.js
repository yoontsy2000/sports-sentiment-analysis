const express = require("express");
const router = express.Router();
const axios = require('axios');

const SPORTS_API_KEY = process.env.SPORTS_API_KEY;
const SPORTS_API_URL = process.env.SPORTS_API_URL;

// Leagues:
// 13014 - UEFA Champions League
// 14431 - CONCACAF Champions League
// 1325 - Portugal 1st League
// 18446 - USL First Division

var preferedLeagues = new Array(
    "13014","14431","1325","18446","133411");

var activeStatuses = new Array(
    1,2,3,4,5);


const liveSports = () => new Promise((resolve, reject) => {
    axios.get(`${SPORTS_API_URL}/sport/football/livescores?api_key=${SPORTS_API_KEY}`)
    .then(response => {

        var filteredResponse = response.data.data.filter(function(element){
            return preferedLeagues.includes(element.leagueId) && activeStatuses.includes(element.status);
        });
        console.log(filteredResponse);
        return filteredResponse;
    })

})

router.get('/live', (req, res) => {
    liveSports().then(response => {
        res.send(response);
    })
})

module.exports = router;
