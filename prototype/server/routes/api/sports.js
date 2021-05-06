const express = require("express");
const router = express.Router();
const axios = require('axios');
const User = require("../../models/User");
const { Model } = require("mongoose");
const TeamPreferences = require("../../models/TeamPreferences");


const SPORTS_API_KEY = process.env.SPORTS_API_KEY;
const SPORTS_API_URL = process.env.SPORTS_API_URL;

// Leagues:
// 13014 - UEFA Champions League
// 14431 - CONCACAF Champions League
// 1325 - Portugal 1st League
// 18446 - USL First Division

//Array fo prefered leagues to be used when filtering all games
var preferedLeagues = new Array(
    "13014","14431","1325","18446","133411");
//Array to filter by game status : 1-5 Game is LIVE
var activeStatuses = new Array(
    1,2,3,4,5);


/*
 * Returns a filtered list of important live games
 */
const liveSports = () => new Promise((resolve, reject) => {
    //Uses axios to do an API request 
    axios.get(`${SPORTS_API_URL}/sport/football/livescores?api_key=${SPORTS_API_KEY}`)
    .then(response => {

        //Filter the data by checking status and leagueId
        var filteredResponse = response.data.data.filter(function(element){
            return preferedLeagues.includes(element.leagueId) && activeStatuses.includes(element.status);
        });

        return filteredResponse;
    })

})

/*
 * Router call that returns a filtered array of game objects
 */
router.get('/live', (req, res) => {
    liveSports().then(response => {
        res.send("TEST");
    })
})

router.get('/favs', (req, res) => {
    const email = req.query.email
    getPreferedTeams(email).then(response => {
        res.send(response.data);
    }).catch(error => console.log(error))
})

/*
 * Returns the favorite teams of an email -- NOT TESTED
 */
const getPreferedTeams = (userEmail) => new Promise((resolve, reject) => {
    TeamPreferences.findOne({ email: userEmail }).then(user => {
        return user.teams;
    })
})


module.exports = router;
