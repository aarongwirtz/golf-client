import React, {useState} from 'react';


const PersonalScorecard = () => {
    const [userName, setUserName] = useState('');
    const [results, setResults] = useState([])

    const fetchResults = () => {
        let url = `http://localhost:3000/scorecard/${userName}`

        setUserName('testBoy');
        console.log(userName)
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchResults();
    }

 return (
     <div className="main">
        <div className="mainDiv">
            <p>Personal Scorecard Component</p>
            <button onClick={handleSubmit} >Search testBoy Scores</button>
        </div>
     </div>
 )  ; 
};

export default PersonalScorecard;