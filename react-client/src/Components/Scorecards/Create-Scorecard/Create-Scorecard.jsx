import React from 'react';
import './Create-Scorecard.css';
//import APIURL from '../../../helpers/environment';


const CreateScorecard = () => {
 return (
     <div className="main">
        <div className="mainDiv">

            <h1>Create Scorecard</h1>
            <form>
                
                <label htmlFor="">Course Name</label>
                <input value="Course Name" />
                <br />
                <input value="Date Played" />
                <input value="Conditions" />
                <input value="Course Length" />
                <input value="Dificulty Rating" />
                
                <input value="Par 1" />
                <input value="Par 2" />
                <input value="Par 3" />
                <input value="Par 4" />
                <input value="Par 5" />
                <input value="Par 6" />
                <input value="Par 7" />
                <input value="Par 8" />
                <input value="Par 9" />
                <input value="Par 10" />
                <input value="Par 11" />
                <input value="Par 12" />
                <input value="Par 13" />
                <input value="Par 14" />
                <input value="Par 15" />
                <input value="Par 16" />
                <input value="Par 17" />
                <input value="Par 18" />

                <input value="Hole 1 Score" />
                <input value="Hole 2 Score" />
                <input value="Hole 3 Score" />
                <input value="Hole 4 Score" />
                <input value="Hole 5 Score" />
                <input value="Hole 6 Score" />
                <input value="Hole 7 Score" />
                <input value="Hole 8 Score" />
                <input value="Hole 9 Score" />
                <input value="Hole 10 Score" />
                <input value="Hole 11 Score" />
                <input value="Hole 12 Score" />
                <input value="Hole 13 Score" />
                <input value="Hole 14 Score" />
                <input value="Hole 15 Score" />
                <input value="Hole 16 Score" />
                <input value="Hole 17 Score" />
                <input value="Hole 18 Score" />
            </form>

        </div>
     </div>
 )  ; 
};

export default CreateScorecard;