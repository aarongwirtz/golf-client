import React from 'react';
import golfer from '../../../assets/golfer.jpg';
import '../Pre-Scorecard/Pre-Scorecard.css'

const PreScorecard = () => {

    return (
        <div>
            <h4>You haven't created any Scorecards yet!</h4>
            <p>Click the Create New Scorecard link above to get started.</p>
            <img id="golfer" src={golfer} alt="No Scorecards" />
        </div>
    )
};

export default PreScorecard;