import React, { useState , useEffect} from 'react';
import APIURL from '../../../helpers/environment';
import '../Community-Scorecard/Community-Scorecard.css';


const CommunityScorecard = (props) => {
    const [results, setResults] = useState([]);
    
    useEffect (()=> {
            fetch(`${APIURL}/scorecard/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': props.token
    
                }
            })

                .then(res => res.json())
                .then(data => {
                    setResults(data);
                    console.log(data);
                })
                .catch(err => console.log(err));
    }, [])
        return (
            <div className="main">
                <div className="mainDiv">
                    <h1>Community Scorecards</h1>
                    {results.map((result, index) => {
                        return(
                            <div id="scoreresults" key={index}>
                                <ul className="scorelist">
                                    <li className="course">{result.courseName}</li>
                                </ul>
                                <ul>
                                    <li className="title">Difficulty:</li>
                                    <li className="difficulty">{result.difficultyRating}</li>
                                    <li className="title">Date:</li>
                                    <li className="date">{result.date}</li>
                                </ul>
                                <ul>
                                    <li className="title">Conditions:</li>
                                    <li className="condition">{result.conditions}</li>
                                    <li className="title">UserName:</li>
                                    <li className="username">{result.userName}</li>
                                </ul>
                                <table>
                                <tbody>
                                <tr>
                                    <th>Hole</th>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
                                    <td>9</td>
                                    <td>10</td>
                                    <td>11</td>
                                    <td>12</td>
                                    <td>13</td>
                                    <td>14</td>
                                    <td>15</td>
                                    <td>16</td>
                                    <td>17</td>
                                    <td>18</td>
                                </tr>
                                <tr>
                                    <th>Par</th>
                                    <td>{result.h1Par}</td>
                                    <td>{result.h2Par}</td>
                                    <td>{result.h3Par}</td>
                                    <td>{result.h4Par}</td>
                                    <td>{result.h5Par}</td>
                                    <td>{result.h6Par}</td>
                                    <td>{result.h7Par}</td>
                                    <td>{result.h8Par}</td>
                                    <td>{result.h9Par}</td>
                                    <td>{result.h10Par}</td>
                                    <td>{result.h11Par}</td>
                                    <td>{result.h12Par}</td>
                                    <td>{result.h13Par}</td>
                                    <td>{result.h14Par}</td>
                                    <td>{result.h15Par}</td>
                                    <td>{result.h16Par}</td>
                                    <td>{result.h17Par}</td>
                                    <td>{result.h18Par}</td>
                                </tr>
                                <tr>
                                    <th>Score</th>
                                    <td>{result.h1Score}</td>
                                    <td>{result.h2Score}</td>
                                    <td>{result.h3Score}</td>
                                    <td>{result.h4Score}</td>
                                    <td>{result.h5Score}</td>
                                    <td>{result.h6Score}</td>
                                    <td>{result.h7Score}</td>
                                    <td>{result.h8Score}</td>
                                    <td>{result.h9Score}</td>
                                    <td>{result.h10Score}</td>
                                    <td>{result.h11Score}</td>
                                    <td>{result.h12Score}</td>
                                    <td>{result.h13Score}</td>
                                    <td>{result.h14Score}</td>
                                    <td>{result.h15Score}</td>
                                    <td>{result.h16Score}</td>
                                    <td>{result.h17Score}</td>
                                    <td>{result.h18Score}</td>
                                </tr>
                            </tbody>
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