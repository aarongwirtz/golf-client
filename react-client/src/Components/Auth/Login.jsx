import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from '../../helpers/environment';
import './Auth.css';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState ('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // fetching from our server
        fetch(`${APIURL}/user/login`, {
            // Posting JSON - email, username, & password
            method: 'POST',
            body: JSON.stringify ({user: {username: username, password: password}}),
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        }).then (
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>Returning User Login</h2>
            <Form onSubmit={handleSubmit}>

                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                </FormGroup>

                <Button size="lg" color="primary" type="submit">Login</Button>

            </Form>
        </div>
    )
}

export default Login;