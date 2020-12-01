import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState ('');

    let handleSubmit = (event) => {
        event.preventDefault();
        // fetching from our server
        fetch("http://localhost:3000/user/register", {
            // Posting JSON - email, username, & password
            method: 'POST',
            body: JSON.stringify ({user: {email: email, username: username, password: password}}),
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        }).then (
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    return (
        <div>
            <h1>Register Below</h1>
            <Form onSubmit = {handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">E-mail</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email} />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)}  name="username" value={username} />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                </FormGroup>

                <Button type="submit">Login</Button>

            </Form>
        </div>
    )
}

export default Register;