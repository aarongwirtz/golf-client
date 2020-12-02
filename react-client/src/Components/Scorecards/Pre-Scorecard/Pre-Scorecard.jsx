import React from 'react';
import golfer from '../../../assets/golfer.jpg';
import './Pre-Scorecard.css'

const PreScorecard = () => {

    return (
        <div>
            <h2>It looks like you haven't created any scorecards yet!</h2>
            <p>Hello</p>
            <img id="golfer" src={golfer} alt="No Scorecards" />

        </div>
    )
};

export default PreScorecard;