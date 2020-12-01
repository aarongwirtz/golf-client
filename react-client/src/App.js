import React, {useState, useEffect} from 'react';
import './App.css';
import'bootstrap/dist/css/bootstrap.css';
// import Auth from './Components/Auth/Auth';
// import CommunityScorecard from './Components/Scorecards/Community-Scorecard/Community-Scorecard';
// import CreateScorecard from './Components/Scorecards/Create-Scorecard/Create-Scorecard';
import PersonalScorecard from './Components/Scorecards/Personal-Scorecard/Personal-Scorecard';
// import PreScorecard from './Components/Scorecards/Pre-Scorecard/Pre-Scorecard';
// import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {

  const [token, setToken] = useState('')

  useEffect(() => {
    if(localStorage.getItem('token')){
      setToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
    console.log(token);
  }

  return (
    <div className="App">
      {/* <Router>
          <Navbar />
      </Router> */}
        {/* <Auth /> */}
        
        {/* <CommunityScorecard />
        <CreateScorecard /> */}
        <PersonalScorecard />
        {/* <PreScorecard /> */}
    </div>
  );
}

export default App;