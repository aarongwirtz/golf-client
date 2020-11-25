import React from 'react';
import './App.css';
import'bootstrap/dist/css/bootstrap.css';
import Auth from './components/Auth/Auth';
import CommunityScorecard from './components/Scorecards/Community-Scorecard/Community-Scorecard';
import CreateScorecard from './components/Scorecards/Create-Scorecard/Create-Scorecard';
import PersonalScorecard from './components/Scorecards/Personal-Scorecard/Personal-Scorecard';
import PreScorecard from './components/Scorecards/Pre-Scorecard/Pre-Scorecard';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Router>
          <Navbar />
      </Router> */}
        <Auth />
        {/* <CommunityScorecard />
        <CreateScorecard />
        <PersonalScorecard />
        <PreScorecard /> */}
    </div>
  );
}

export default App;