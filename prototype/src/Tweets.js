import React, { useEffect, useState } from 'react';
import TweetCard from './TweetCard'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/TextField';

import axios from 'axios'

export default function Tweets() {

  const [tweets, setTweets] = useState([]);
  const [query, setQuery] = useState("");
  const url = 'http://127.0.0.1:5000/'

  // useEffect(() => {
  //   getTweets();
  // }, []);

  const getTweets = () => {
    console.log(`Sending query: ${query} to post request`)
    axios.get(url, {params: {
      search: query
    }})
    .then((res) => {
      const data = res.data.statuses;
      setTweets(data);
    })
    .catch(error => console.log(`Error: ${error}`));
  }

  const searchTweets = (event) => {
    event.preventDefault();
    console.log('Pressed')
    getTweets();
  }

  return (
    <div>
      <h1>Displaying the top five tweets of query</h1>
      <form onSubmit={searchTweets}>
        <label>Search:
          <input type="text" value={query} onChange={e => setQuery(e.target.value)}></input>
        </label>
        <input type="submit" value="Submit"/>
      </form>
      {
        tweets && tweets.map(tweet => (
          <TweetCard name={tweet.user.name} profile={tweet.user.profile_image_url} status={tweet.text} />
        ))
      }
    </div>
  )
}