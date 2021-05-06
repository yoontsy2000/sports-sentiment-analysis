import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Tweets from './Tweets'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'

function App() {

  const [isAuthenticated, hasAuthenticated] = useState(false);
  const [email, getEmail] = useState('');
  
  if (!isAuthenticated) {
    return <Login hasAuthenticated={hasAuthenticated} getEmail={getEmail}/>
  } else {
    if (email) {
      return <Dashboard email={email}/>
    }
  }

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path={["/"]}>
            <Dashboard/>
          </Route>
        </Switch>  
      </BrowserRouter>   
      {/* <Tweets/> */}
    </div>
  );
}

export default App;
