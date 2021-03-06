import React, { useState, useEffect } from 'react';
import './App.css';
import'bootstrap/dist/css/bootstrap.css';
import Auth from './Components/Auth/Auth';
import Navbar from './Components/Navbar/Navbar';
import PersonalScorecard from './Components/Scorecards/Personal-Scorecard/Personal-Scorecard'
import PreScorecard from './Components/Scorecards/Pre-Scorecard/Pre-Scorecard'
import {BrowserRouter as Router} from 'react-router-dom';
import CreateScorecard from '../src/Components/Scorecards/Create-Scorecard/Create-Scorecard';


function App() {


  // letting the token get a value upon login
  const [sessionToken, setSessionToken] = useState(undefined);
  
  //method meant to change view based on if there is a session token
  const viewConductor = () => {
    return sessionToken === undefined ?  <Auth updateToken={updateToken}/> : <Navbar token={sessionToken} clickLogout={clearToken}/>
  }


  // updating the token if the browser has stored one
  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])
  
  // storing the token after API call
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }


  const clearToken = () => {
    localStorage.clear();
    setSessionToken(undefined);
  }

  return (
    <div className="App">
      
      <Router>
        {viewConductor()} 
      </Router>

    </div>
  );
}

export default App;