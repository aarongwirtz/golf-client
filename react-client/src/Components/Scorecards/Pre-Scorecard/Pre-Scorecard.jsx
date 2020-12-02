import React from 'react';
<<<<<<< HEAD
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
=======
import CreateScorecard from '../Create-Scorecard/Create-Scorecard'



const PreScorecard = () => {

    const handleClick = () => {
      
    }

 return (
     <div className="main">
        <div className="mainDiv">
            <p>Pre Scorecard Component</p>
            <button>Click me for new card</button>
>>>>>>> e41ccd976584be58c596df9a067a90dad40812c6
        </div>
    )
}

export default PreScorecard;