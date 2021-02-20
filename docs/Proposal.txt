Team members: Alvaro Carrascosa, Tae Sung Yoon, Yanyang Wang, Shuohe Ren, Mark Nam


Idea 1: Live Sports Event Opinion Categorizer

  - Description: A web app that shows users a list of live sports events all of which contain updated live popular opinions categorized by positive or negative for each team.
  - Detailed description:
    - This app allows users to pick from different live sports events from different categories,
      and displays analyzed tweets categorized by teams and by positive or negative.
    - It also displays a metric to measure the amount of positive versus negative comments regarding each team.
    - It compares that metric to previous events to assess wether the team is outperforming or underperforming expectations.
    
  - Database:
    - We are using a user database to keep track of user's account 
    - We are using a database to keep track of past events and their resulting measure of positive vs negative comments for comparison purposes
    
  - Datasets via API:
    - iSports API will be used to retrieve live sports events.
    - Twitter's API will be used to retrieve tweets related to current sports events such as by using hashtags
    - IBM's Watson API will be used to analyze the sentiment and more of such tweets
    
  - OAuth:
    - Twitter's API will be used to help users log in.
    
  - Decoupled Structure:
    - Javascript will be used for programming the frontend
    - Python will be used to handle the backend, specifically through DJANGO's framework


Idea 2: Music generator based on weather and location

  - Description: A web app that creates a playlist for users based on their location, weather and movement.
  - Detailed description:
    - This app generates a playlist based on user's likes but most importantly their location, weather and activity
    - Such activity can be categorized as: Stopped, Walking, Running or Driving
    - Weather and location will also be used to influence the generation of such playlist
  
  - Database:
    - We are using a user database to keep track of user's account
  
  - Datasets via API:
    - Spotify's API will be used to retrieve users music preference as well as to generate the playlist
    - Google's API will be used for geolocalization, weather and movement detection.
  
  - OAuth:
    - Google's OAuth system will be used for logging in as well as for retrieving location, weather and movement.
  
  - Decoupled Strucuture:
    - Javascript will be used for managing the frontend 
    - DJANGO's framework will be used for data processing and backend implementation
    
    
    
