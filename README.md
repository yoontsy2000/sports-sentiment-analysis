# Live Sports Sentiments
## See what fans are feeling about live sport events with detailed analytics. You can also search custom tags and keywords to see other emotional sentiment scores.

## You will need to generate your own Twitter API keys.
Twitter uses OAuth 2.0. More will be explained later in this document.

# Resources:
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).</br>
This project uses documentations and other resources(templates, sample component code) for [Material UI](https://material-ui.com/getting-started/templates/).</br>
This project uses [MongoDB](https://www.mongodb.com/). You are required to set up your own MongoDB.</br>

Make sure that [Node](https://nodejs.org/en/) is installed.</br>
You will need to use Express for middleware functions. You can find the documentations [here](https://expressjs.com/).

This project uses the following APIs:
- [Twitter API v2.0](https://developer.twitter.com/en/docs/twitter-api)
- [Watson Tone Analyzer](https://www.ibm.com/watson/services/tone-analyzer/)
- [iSports API](https://www.isportsapi.com/docs.html)

**Here are some articles and resources that we used as references to implement certain functions:**
- [Build A Login/Auth App with MERN Stack](https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669)
- [Material UI Dashboard Template](material-ui.com/getting-started/templates/)
- [Material UI Registration Template](https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-up)
- [ChartJS](https://www.chartjs.org/docs/latest/)

## Available Scripts

Make sure to download the packages in the prototype directory.
### `npm install`

## ENV File

You will need to generate a dotenv file (.env) and place it in the protoype folder.

    TWITTER_API_KEY=<your key here>
    TWITTER_API_SECRET_KEY=<your key here>
    TWITTER_ACCESS_TOKEN=<your token here>
    TWITTER_ACESSS_SECRET_TOKEN=<your token here>

    WATSON_API_KEY=<your key here>
    WATSON_API_URL=<your generated url here>

    SPORTS_API_KEY=<your key here>
    SPORTS_API_URL=<your url here>

    MONGO_URI=<your mongodb uri here>


After installing the necessary packages, in the prototype directory, you can run the application:
### `npm run dev` </br>
This will run both the client and the server. Make sure that you're running this command inside the `prototype` directory.

Some Windows user may face problems with running the command above, so instead run this:
### `npm run server` </br>
### `npm run client`
Again, make sure that you're running this command inside the `prototype` directory.

This will run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. </br>
Access [http://localhost:5000](http://localhost:5000) to view the backend server. </br>

The page will reload if you make edits.\ </br>
**HOWEVER, ANY CHANGES MADE TO THE SERVER WILL REQUIRE YOU TO RESTART THE SERVER.**</br>
You will also see any lint errors in the console.
