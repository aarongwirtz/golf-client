import React from 'react';
// import CreateScorecard from '../Create-Scorecard/Create-Scorecard';
import golfer from '../../../assets/golfer.jpg';
import '../Pre-Scorecard/Pre-Scorecard.css';

const PreScorecard = () => {

    // const handleClick = (event) => {
    //     event.preventdefault()
    //     return<CreateScorecard />
    // }
    return(
        <div>
            <h2>It looks like you haven't created any scorecards yet!</h2>
            <h3>Click here to create your first scorecard!</h3>
            <img src={golfer} alt="No Scorecards" />
            {/* <CreateScorecard /> */}
            {/* <button><Link to="scorecard/create">Create a Scorecard</Link></button> */}
            {/* <button onClick = {handleClick}>Create a Scorecard!</button> */}
        </div>
    )
}

export default PreScorecard;