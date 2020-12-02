import React, {useState, useEffect} from 'react';
import PreScorecard from '../Pre-Scorecard/Pre-Scorecard';
import ChildScorecard from './Personal-Scorecard-child/Personal-Scorecard-Child'
import APIURL from '../../../helpers/environment';


const PersonalScorecard = (props) => {
    const[results, setResults] = useState([]);
    // const[id, setId] = useState(0);
    
    const fetchPScorecards = () => {

    fetch(`${APIURL}/scorecard/mine`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': props.token
        }
    })
    .then(res => res.json())
    .then(data => {
        if(data.length === 0){
            console.log('data length was 0')
            setResults(0)
        } else {
            setResults(data)
        }
        console.log(data)
    })
    .catch(err => console.log(err))}
    
    useEffect(() => {
        fetchPScorecards()
    }, [])
    
    const DeleteScorecard = (result) => {
        fetch(`${APIURL}/scorecard/${result}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        })
        .then(() => fetchPScorecards())
    }

    const TestFunction = (variable) => {

        console.log("testing onClick"+variable)
    }

    const viewConductor = () => {
        if (results === 0){
            return <PreScorecard />
        } else {
            return <ChildScorecard results={results} delete={DeleteScorecard} Test={TestFunction}/>
        }
    }
    
    

    return (
        <div className="main">
            <div className="mainDiv">
                {viewConductor()}
            </div>
        </div>
    ); 
};

export default PersonalScorecard;