import React from 'react';
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button
//   } from 'reactstrap';



const CommunityScorecard = () => {

    const fetchResults = () => {

        fetch('http://localhost:3000/scorecard/', {
            //mode: 'no-cors',
            method: 'GET',
            headers:  {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImlhdCI6MTYwNjc2MTc5NSwiZXhwIjoxNjA2ODQ4MTk1fQ.ZyvQCUJAMdtEQXKImfTtDnHJCnVLOwgfuGQPuUFZeVY'
                   
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => console.log(err));
    };

 return (
     <div className="main">
        <div className="mainDiv">
            <h1>Community Scorecards</h1>
            <button onClick={(e) => fetchResults()}>Run Fetch</button>
            {/* <div>
                <h2>Scorecard</h2>
                <h3>@johnnygolf</h3>
                <h4>Course Name</h4>
                <h4>Date Played</h4>
                <h4>Conditions</h4>
                <h4>Course Length</h4>
                <h4>Difficulty Rating</h4>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Second Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Johnny</td>
                            <td>Golf</td>
                            <td>@johnnygolf</td>
                        </tr>
                    </tbody>
                </Table>
            </div> */}
        </div>
     </div>
 )  ; 
};

export default CommunityScorecard;