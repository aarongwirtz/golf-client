import React, { useState , useEffect} from 'react';
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button
//   } from 'reactstrap';



const CommunityScorecard = () => {
    const [results, setResults] = useState([]);

    useEffect (()=> {
   // const fetchResults = () => {
            fetch('http://localhost:3000/scorecard/', {
                //mode: 'no-cors',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImlhdCI6MTYwNjc2MTc5NSwiZXhwIjoxNjA2ODQ4MTk1fQ.ZyvQCUJAMdtEQXKImfTtDnHJCnVLOwgfuGQPuUFZeVY'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setResults(data);
                })
                
                .catch(err => console.log(err));
       // }
    }, [])
        return (
            <div className="main">
                <div className="mainDiv">
                    <h1>Community Scorecards</h1>
                    {results.map((result, index) => {
                        return(
                            <div key={index}>
                                <h5>{result.courseName}</h5>
                                <h6>{result.difficultyRating}</h6>
                                <p>{result.date}</p>
                                <p>{result.conditions}</p>
                                <table>
                                    
                                </table>
                             </div>
                        )
                    }
                    )}
                    {/* <button onClick={(e) => fetchResults()}>Run Fetch</button> */}
                </div>
            </div>
        );
    };
    export default CommunityScorecard;