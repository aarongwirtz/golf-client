import React, {useState, useEffect} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Create-Scorecard.css';
import APIURL from '../../../helpers/environment';

const CreateScorecard = (props) => {

    const [course, setCourse] = useState('');
    const [date, setDate] = useState(''  );
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



    const fetchResults =() => {
        fetch('http://localhost:3000/scorecard/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
         })
    }
    
         const handleSubmit = (event) => {
            fetchResults();
            event.preventDefault();
          }

 return (
     <div className="main">
        <div className="mainDiv">
            <p>Create Scorecard Component</p>
            <h1>hello keagan</h1>
        </div>
     </div>
 )  ; 
};

export default CreateScorecard;