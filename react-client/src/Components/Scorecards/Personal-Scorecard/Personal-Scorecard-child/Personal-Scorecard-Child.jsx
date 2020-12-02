import React, {useState} from 'react'
import APIURL from '../../../../helpers/environment'

const ChildScorecard = (props) => {
    const [course, setCourse] = useState('');
    const [date, setDate] = useState('');
    const [conditions, setConditions] = useState('');
    const [courselength, setCourseLength] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [par1, setPar1] = useState('');
    const [par2, setPar2] = useState('');
    const [par3, setPar3] = useState('');
    const [par4, setPar4] = useState('');
    const [par5, setPar5] = useState('');
    const [par6, setPar6] = useState('');
    const [par7, setPar7] = useState('');
    const [par8, setPar8] = useState('');
    const [par9, setPar9] = useState('');
    const [par10, setPar10] = useState('');
    const [par11, setPar11] = useState('');
    const [par12, setPar12] = useState('');
    const [par13, setPar13] = useState('');
    const [par14, setPar14] = useState('');
    const [par15, setPar15] = useState('');
    const [par16, setPar16] = useState('');
    const [par17, setPar17] = useState('');
    const [par18, setPar18] = useState('');
    const [partotal, setParTotal] = useState('');
    const [hole1, setHole1] = useState('');
    const [hole2, setHole2] = useState('');
    const [hole3, setHole3] = useState('');
    const [hole4, setHole4] = useState('');
    const [hole5, setHole5] = useState('');
    const [hole6, setHole6] = useState('');
    const [hole7, setHole7] = useState('');
    const [hole8, setHole8] = useState('');
    const [hole9, setHole9] = useState('');
    const [hole10, setHole10] = useState('');
    const [hole11, setHole11] = useState('');
    const [hole12, setHole12] = useState('');
    const [hole13, setHole13] = useState('');
    const [hole14, setHole14] = useState('');
    const [hole15, setHole15] = useState('');
    const [hole16, setHole16] = useState('');
    const [hole17, setHole17] = useState('');
    const [hole18, setHole18] = useState('');
    const [holetotal, setHoleTotal] = useState('');

    const UpdateScorecard = (resultId) => {
        fetch(`${APIURL}/scorecard/${resultId}`, {
            method: 'PUT',
            body: JSON.stringify ({
                courseName: course,
                date: date,
                conditions: conditions,
                courseLength: courselength,
                difficultyRating: difficulty,
                h1Par: par1,
                h2Par: par2,
                h3Par:par3,
                h4Par: par4,
                h5Par: par5,
                h6Par: par6,
                h7Par: par7,
                h8Par: par8,
                h9Par: par9,
                h10Par: par10,
                h11Par: par11,
                h12Par: par12,
                h13Par: par13,
                h14Par: par14,
                h15Par: par15,
                h16Par: par16,
                h17Par: par17,
                h18Par: par18,
                totalPar: partotal,
                h1Score:hole1,
                h2Score:hole2,
                h3Score:hole3,
                h4Score:hole4,
                h5Score:hole5,
                h6Score:hole6,
                h7Score:hole7,
                h8Score:hole8,
                h9Score:hole9,
                h10Score:hole10,
                h11Score:hole11,
                h12Score:hole12,
                h13Score:hole13,
                h14Score:hole14,
                h15Score:hole15,
                h16Score:hole16,
                h17Score:hole17,
                h18Score:hole18,
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        })
        .then(() => props.fetchPScorecards())
    }

    return(
        
        props.results.map((result, index) =>{
            return(
                <div key={index}>
                    <h4>{result.courseName}</h4>
                    <h6>Difficulty: {result.difficultyRating}</h6>
                    <p>Length: {result.courseLength}</p>
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
                                <td>Total Par: {result.totalPar}</td>
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
                                <td>Total Score: {result.totalScore}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button >Edit</button>
                    <button onClick={() => props.delete(result.id)}>Delete</button>
                </div>
            )
        }
        )
    )
}

export default ChildScorecard