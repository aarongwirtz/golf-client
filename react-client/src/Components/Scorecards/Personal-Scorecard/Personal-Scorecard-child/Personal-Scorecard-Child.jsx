import React, {useState} from 'react'
import APIURL from '../../../../helpers/environment'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row, Form, Label, Input} from 'reactstrap';
import './Personal-Scorecard-Child.css';
const ChildScorecard = (props) => {

    const [id, setId] = useState(0)    

    // form states
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

    //Modal states
    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal);

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
                totalScore: holetotal
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        })
        .then(() => props.fetchPScorecards())
        .catch(err => console.log(err))
        
    }

    const handleClick = (resultId) => {
        toggle();
        setId(resultId);
    }

    return(
        
        props.results.map((result, index) =>{
            return(
                <div id="scoreresults" key={index}>
                    {/* <h4>{result.courseName}</h4>
                    <h6>Difficulty: {result.difficultyRating}</h6>
                    <p>Length: {result.courseLength}</p>
                    <p>Date: {result.date}</p>
                    <p>Weather Conditions: {result.conditions}</p>
                    <p>User: {result.userName}</p> */}
                                
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
                                <td className="totalpar">Totals</td>
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
                                <td className='totalpar'>{result.totalPar}</td>
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
                                <td className='totalscore'>{result.totalScore}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Button color="success" onClick={() => handleClick(result.id)}>Edit</Button>
                        <Modal isOpen={modal} toggle={toggle} id="updateModal">
                        <ModalHeader toggle={toggle}>Edit Scorecard</ModalHeader>
                        <ModalBody>
                        <Form id="form1" onSubmit={() => UpdateScorecard(id)}>
                    <Row id="row1">
                        <Col>
                            <Label for="CourseName">Course Name</Label>
                            <Input name="CourseName" type="text" onChange={(e) => setCourse(e.target.value)} />
                        </Col>
                        <Col>
                            <Label for="DatePlayed">Date Played</Label>
                            <Input name="DatePlayed" type="text"  onChange={(e) => setDate(e.target.value)}/>
                        </Col>
                        <Col>
                            <Label for="Conditions">Conditions</Label>
                            <Input name="Conditions" type="text" onChange={(e) => setConditions(e.target.value)}/>
                        </Col>
                        <Col>
                            <Label for="CourseLength">Course Length</Label>
                            <Input name="CourseLength" type="text" onChange={(e) => setCourseLength(e.target.value)}/>
                        </Col>
                        <Col>
                            <Label for="DifficultyRating">Difficulty Rating</Label>
                            <Input name="DifficultyRating" type="text" onChange={(e) => setDifficulty(e.target.value)}/>
                        </Col>
                    </Row>

                    <Row id="row2">
                        <Col>
                            <Label for="Par1">Par 1</Label>
                            <Input  name="Par1" type="text" onChange={(e) => setPar1(e.target.value)}/>
                        </Col>
                            
                        <Col>
                            <Label for="Par2">Par 2</Label>
                            <Input name="Par2" type="text" onChange={(e) => setPar2(e.target.value)}/>
                        </Col>
                            
                        <Col>
                            <Label for="Par3">Par 3</Label>
                            <Input name="Par3" type="text" onChange={(e) => setPar3(e.target.value)}/>
                        </Col>
                            
                        <Col>
                            <Label for="Par4">Par 4</Label>
                            <Input name="Par4" type="text" onChange={(e) => setPar4(e.target.value)}/>
                        </Col>
                            
                        <Col>
                            <Label for="Par5">Par 5</Label>
                            <Input name="Par5" type="text" onChange={(e) => setPar5(e.target.value)}/>
                        </Col>
                           
                        <Col>
                            <Label for="Par6">Par 6</Label>
                            <Input name="Par6" type="text" onChange={(e) => setPar6(e.target.value)}/>
                        </Col>
                           
                        <Col>
                            <Label for="Par7">Par 7</Label>
                            <Input name="Par7" type="text" onChange={(e) => setPar7(e.target.value)}/>
                        </Col>
                            
                        <Col>
                            <Label for="Par8">Par 8</Label>
                            <Input name="Par8" type="text" onChange={(e) => setPar8(e.target.value)}/>
                        </Col>
                           
                        <Col>
                            <Label for="Par9">Par 9</Label>
                            <Input name="Par9" type="text" onChange={(e) => setPar9(e.target.value)}/>
                        </Col>
                            
                        <Col>
                            <Label for="Par10">Par 10</Label>
                            <Input name="Par10" type="text" onChange={(e) => setPar10(e.target.value)}/>
                        </Col>
                            
                        <Col>
                            <Label for="Par11">Par 11</Label>
                            <Input name="Par11" type="text" onChange={(e) => setPar11(e.target.value)}/>
                        </Col>
                           
                        <Col>
                            <Label for="Par12">Par 12</Label>
                            <Input name="Par12" type="text" onChange={(e) => setPar12(e.target.value)}/>
                        </Col>
                            
                        <Col>
                            <Label for="Par13">Par 13</Label>
                            <Input name="Par13" type="text" onChange={(e) => setPar13(e.target.value)}/>
                        </Col>
                            
                        <Col>
                            <Label for="Par14">Par 14</Label>
                            <Input name="Par14" type="text" onChange={(e) => setPar14(e.target.value)}/>
                        </Col>
                            
                        <Col>
                            <Label for="Par15">Par 15</Label>
                            <Input name="Par15" type="text" onChange={(e) => setPar15(e.target.value)}/>
                        </Col>
                            
                        <Col>
                            <Label for="Par16">Par 16</Label>
                            <Input name="Par16" type="text" onChange={(e) => setPar16(e.target.value)}/>
                        </Col>
                            
                        <Col>
                            <Label for="Par17">Par 17</Label>
                            <Input name="Par17" type="text" onChange={(e) => setPar17(e.target.value)}/>
                        </Col>
                            
                        <Col>
                            <Label for="Par18">Par 18</Label>
                            <Input name="Par18" type="text" onChange={(e) => setPar18(e.target.value)}/>
                        </Col>
                        <Col>
                            <Label for="Par Total">Par Total</Label>
                            <Input name="Par Total" type="text" onChange={(e) => setParTotal(e.target.value)}/>
                        </Col>
                    </Row>

                    <Row id="row3">
                        <Col>
                            <Label for="Hole1">Hole 1</Label>
                            <Input name="Hole1" type="text" onChange={(e) => setHole1(e.target.value)}/>
                        </Col>
                            
                        <Col>
                            <Label for="Hole2">Hole 2</Label>
                            <Input name="Hole2" type="text" onChange={(e) => setHole2(e.target.value)}/>
                        </Col>
                            
                        <Col>
                            <Label for="Hole3">Hole 3</Label>
                            <Input name="Hole3" type="text" onChange={(e) => setHole3(e.target.value)}/>
                        </Col>
                            
                        <Col>
                            <Label for="Hole4">Hole 4</Label>
                            <Input name="Hole4" type="text" onChange={(e) => setHole4(e.target.value)}/>
                        </Col>
                            
                        <Col>
                            <Label for="Hole5">Hole 5</Label>
                            <Input name="Hole5" type="text" onChange={(e) => setHole5(e.target.value)}/>
                        </Col>
                           
                        <Col>
                            <Label for="Hole6">Hole 6</Label>
                            <Input name="Hole6" type="text" onChange={(e) => setHole6(e.target.value)}/>
                        </Col>
                           
                        <Col>
                            <Label for="Hole7">Hole 7</Label>
                            <Input name="Hole7" type="text" onChange={(e) => setHole7(e.target.value)}/>
                        </Col>
                            
                        <Col>
                            <Label for="Hole8">Hole 8</Label>
                            <Input name="Hole8" type="text" onChange={(e) => setHole8(e.target.value)}/>
                        </Col>
                           
                        <Col>
                            <Label for="Hole9">Hole 9</Label>
                            <Input name="Hole9" type="text" onChange={(e) => setHole9(e.target.value)}/>
                        </Col>
                            
                        <Col>
                            <Label for="Hole10">Hole 10</Label>
                            <Input name="Hole10" type="text"  onChange={(e) => setHole10(e.target.value)}/>
                        </Col>
                            
                        <Col>
                            <Label for="Hole11">Hole 11</Label>
                            <Input name="Hole11" type="text"  onChange={(e) => setHole11(e.target.value)}/>
                        </Col>
                           
                        <Col>
                            <Label for="Hole12">Hole 12</Label>
                            <Input name="Hole12" type="text"  onChange={(e) => setHole12(e.target.value)}/>
                        </Col>
                            
                        <Col>
                            <Label for="Hole13">Hole 13</Label>
                            <Input name="Hole13" type="text"  onChange={(e) => setHole13(e.target.value)}/>
                        </Col>
                            
                        <Col>
                            <Label for="Hole14">Hole 14</Label>
                            <Input name="Hole14" type="text"  onChange={(e) => setHole14(e.target.value)}/>
                        </Col>
                            
                        <Col>
                            <Label for="Hole15">Hole 15</Label>
                            <Input name="Hole15" type="text"  onChange={(e) => setHole15(e.target.value)}/>
                        </Col>
                            
                        <Col>
                            <Label for="Hole16">Hole 16</Label>
                            <Input name="Hole16" type="text"  onChange={(e) => setHole16(e.target.value)}/>
                        </Col>
                            
                        <Col>
                            <Label for="Hole17">Hole 17</Label>
                            <Input name="Hole17" type="text"  onChange={(e) => setHole17(e.target.value)}/>
                        </Col>
                            
                        <Col>
                            <Label for="Hole18">Hole 18</Label>
                            <Input name="Hole18" type="text"  onChange={(e) => setHole18(e.target.value)}/>
                        </Col>
                        <Col>
                            <Label for="Hole Total">Hole Total</Label>
                            <Input name="Hole Total" type="text" onChange={(e) => setHoleTotal(e.target.value)}/>
                        </Col>
                    </Row>
                    <Button color="primary" >Submit Update</Button>

                </Form>
                        </ModalBody>
                        <ModalFooter>
                            
                            <Button color="secondary" onClick={toggle}>Close Update Modal</Button>
                        </ModalFooter>
                    </Modal>
                    <Button color="danger" onClick={() => props.delete(result.id)}>Delete</Button>
                </div>
            )
        }
        )
    )
}

export default ChildScorecard;