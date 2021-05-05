import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Tweets from './Tweets'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>  
      </Router>   
      {/* <Tweets/> */}
    </div>
  );
}

export default App;
