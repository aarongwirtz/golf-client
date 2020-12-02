import React from 'react';
import golfer from '../../../assets/golfer.jpg';
import '../Pre-Scorecard/Pre-Scorecard.css';

const PreScorecard = () => {

    return(
        <div id="preSC">
            <h2>It looks like you haven't created any scorecards yet!</h2>
            <h4>Click the Create New Scorecard link above to get started.</h4>
            <img id="golfer" src={golfer} alt="No Scorecards" />
        </div>
    )
}

export default PreScorecard;