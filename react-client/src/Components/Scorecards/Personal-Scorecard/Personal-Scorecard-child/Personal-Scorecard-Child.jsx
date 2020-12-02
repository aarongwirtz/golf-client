import React from 'react'

const ChildScorecard = (props) => {
    console.log(props)
    return(
        
        props.results.map((result, index) =>{
            return(
                <div key={index}>
                    <h4>{result.courseName}</h4>
                    <h6>Difficulty: {result.difficultyRating}</h6>
                    <p>Date: {result.date}</p>
                    <p>Weather Conditions: {result.conditions}</p>
                    <p>User: {result.userName}</p>
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
                    <button>Edit</button>
                    <button onClick={props.deleteScorecard}>Delete</button>
                </div>
            )
        }
        )
    )
}

export default ChildScorecard