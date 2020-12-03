import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Register from './Register';
import Login from './Login';
import logo from '../../assets/tgLogo.png';

const Auth = (props) => {
    return (
        <div className="authContainer">
        <Container>
            <img src={logo} />
            <div className="welcomeDiv">
            <h1>Welcome to TeamGolf!</h1>
            <p>An online golf score tracker for you and your community. Log In or Sign up Below :</p>
            </div>
            <Row>
                <Col md="6" className="login-col">
                    <Login updateToken={props.updateToken}/>
                </Col>
                <Col md="6">
                    <Register updateToken={props.updateToken}/>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Auth;