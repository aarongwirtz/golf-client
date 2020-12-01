import React, {useState, useEffect} from 'react';
import PreScorecard from '../Pre-Scorecard/Pre-Scorecard';
import ChildScorecard from './Personal-Scorecard-child/Personal-Scorecard-Child'

const PersonalScorecard = (props) => {
    const[username, setUsername] = useState('testBoy');
    const[results, setResults] = useState([])

    useEffect(() => {
        

        fetch(`http://localhost:3000/scorecard/mine`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        })
        .then(res => res.json())
        .then(data => {
            setResults(data)
            console.log(data)
        })
        .catch(err => console.log(err))
    }, [])
    
    const viewConductor = () => {
        console.log(results)
        return results !== [] ?  <ChildScorecard results={results} /> : <PreScorecard />
    }
    
    

 return (
     <div className="main">
        <div className="mainDiv">
            {viewConductor()}
        </div>
     </div>
 )  ; 
};

export default PersonalScorecard;