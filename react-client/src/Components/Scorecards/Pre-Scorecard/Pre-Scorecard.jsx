import React from 'react';
// import golfer from '../assets/golfer';
import CreateScorecard from '../Create-Scorecard/Create-Scorecard';
import {BrowserRouter as Router} from 'react-router-dom';


function PreScorecard () {

    return (
        <div>
            <h2>It looks like you haven't created any scorecards yet!</h2>

            {/* <img src={golfer} alt="No Scorecards" /> */}

            <Router>
            <button onClick={ (e) => <CreateScorecard /> }>Create a Scorecard!</button>
            </Router>
        </div>
    )
};

export default PreScorecard;