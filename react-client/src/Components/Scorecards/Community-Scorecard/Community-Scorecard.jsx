import React, { useState , useEffect} from 'react';

const CommunityScorecard = (props) => {
    const [results, setResults] = useState([]);

    useEffect (()=> {
            fetch('http://localhost:3000/scorecard/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': props.token
            }
        })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setResults(data);
                })
                .catch(err => console.log(err));
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