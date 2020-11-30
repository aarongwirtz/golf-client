import React from 'react';
import './App.css';
import'bootstrap/dist/css/bootstrap.css';
//import Auth from './Components/Auth/Auth';
import CommunityScorecard from './Components/Scorecards/Community-Scorecard/Community-Scorecard';

function App() {
  return (
    <div className="App">
      {/* <Router>
          <Navbar />
      </Router> */}
        {/* <Auth /> */}
        <CommunityScorecard />
        {/* <CreateScorecard />
        <PersonalScorecard />
        <PreScorecard /> */}
    </div>
  );
}

export default App;