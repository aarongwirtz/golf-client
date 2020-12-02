import React from 'react';
// import CreateScorecard from '../Create-Scorecard/Create-Scorecard';
import golfer from '../../../assets/golfer.jpg';
import '../Pre-Scorecard/Pre-Scorecard.css';

const PreScorecard = () => {

    return(
        <div id="preSC">
            <h2>It looks like you haven't created any scorecards yet!</h2>
            <h4>Click the Create New Scorecard link above to get started.</h4>
            <img id="golfer" src={golfer} alt="No Scorecards" />
            {/* <CreateScorecard /> */}
            {/* <button><Link to="scorecard/create">Create a Scorecard</Link></button> */}
            {/* <button onClick = {handleClick}>Create a Scorecard!</button> */}
        </div>
    )
}

export default PreScorecard;