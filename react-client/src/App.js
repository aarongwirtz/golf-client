import React, { useState, useEffect } from 'react';
import './App.css';
import'bootstrap/dist/css/bootstrap.css';
import Auth from './Components/Auth/Auth';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {


  // letting the token get a value upon login
  const [sessionToken, setSessionToken] = useState('');
  
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
    setSessionToken('');
  }

  return (
    <div className="App">
      <Router>
          <Navbar token={sessionToken}/>
      </Router>
        <Auth updateToken={updateToken}/>
    </div>
  );
}

export default App;