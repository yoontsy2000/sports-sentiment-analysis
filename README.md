# Live Sports Sentiments
## See what fans are feeling about live sport events with detailed analytics.\You can also search custom tags and keywords to see other emotional sentiment scores.

## You will need to generate your own Twitter API keys.
Twitter uses OAuth 2.0. More will be explained later in this document.

# Resources:
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project uses documentations and other resources(templates, sample component code) for [Material UI](https://material-ui.com/getting-started/templates/).
This project uses [MongoDB](https://www.mongodb.com/). You are required to set up your own MongoDB.

Make sure that [Node](https://nodejs.org/en/) is installed.
You will need to use Express for middleware functions. You can find the documentations [here](https://expressjs.com/).

This project uses the following APIs:
- [Twitter API v2.0](https://developer.twitter.com/en/docs/twitter-api)
- [Watson Tone Analyzer](https://www.ibm.com/watson/services/tone-analyzer/)
- [iSports API](https://www.isportsapi.com/docs.html)

## Available Scripts

Make sure to download the packages in the prototype directory.
### `npm install`

## ENV File

You will need to 

`
TWITTER_API_KEY=<your key here>
TWITTER_API_SECRET_KEY=<your key here>
TWITTER_ACCESS_TOKEN=<your token here>
TWITTER_ACESSS_SECRET_TOKEN=<your token here>

WATSON_API_KEY=<your key here>
WATSON_API_URL=<your generated url here>

MONGO_URI=<your mongodb uri here>
`

After installing the necessary packages, in the prototype directory, you can run the application:
### `npm run dev` 
This will run both the client and the server. Make sure that you're running this command inside the `prototype` directory.

Some Windows user may face problems with running the command above, so instead run this:
### `npm run server`
### `npm run client`
Again, make sure that you're running this command inside the `prototype` directory.

This will run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
Access [http://localhost:5000](http://localhost:5000) to view the backend server.

The page will reload if you make edits.\ 
**HOWEVER, ANY CHANGES MADE TO THE SERVER WILL REQUIRE YOU TO RESTART THE SERVER.
You will also see any lint errors in the console.
