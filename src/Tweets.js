import React, { useEffect, useState } from 'react';
import TweetCard from './TweetCard'
import axios from 'axios'

export default function Tweets() {

  const [tweets, setTweets] = useState([]);
  const url = 'http://127.0.0.1:5000/'

  useEffect(() => {
    getTweets();
  }, []);

  const getTweets = () => {
    axios.get(url)
    .then((res) => {
      const data = res.data.statuses;
      setTweets(data);
    })
    .catch(error => console.log(`Error: ${error}`));
  }

  return (
    <div>
      <h1>Displaying the top five tweets of #NBA</h1>
      {
        tweets && tweets.map(tweet => (
          <TweetCard name={tweet.user.name} profile={tweet.user.profile_image_url} status={tweet.text} />
        ))
      }
    </div>
  )
}