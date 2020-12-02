import React from 'react';
// import golfer from '../assets/golfer';
import CreateScorecard from '../Create-Scorecard/Create-Scorecard';

const PreScorecard = () => {

    const handleClick = (event) => {
        event.preventdefault()
        return<CreateScorecard />
    }
    return(
        <div>
            <h2>It looks like you haven't created any scorecards yet!</h2>
            {/* <img src={golfer} alt="No Scorecards" /> */}
            {/* <button><Link to="scorecard/create">Create a Scorecard</Link></button> */}
            {/* <button onClick = {handleClick}>Create a Scorecard!</button> */}
            <CreateScorecard />
        </div>
    )
}

export default PreScorecard;