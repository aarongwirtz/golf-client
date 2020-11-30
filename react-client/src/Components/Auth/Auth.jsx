import React from 'react';

const Auth = () => {

    const fetchResults = () => {
        let url = `http://localhost:3000/user/login`

        const proxyurl = "https://crossorigin.me/"

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                user:{
                    username: 'testBoy',
                    password: 'test'
                }
            }
        })
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
            <h1>Welcome To Team Golf</h1>
            <h1>Sign Up or Log In</h1>
            <div id="signUp">
                <h3>Sign Up</h3>
                <form>
                    <label>Username</label>
                    <br />
                    <input type="text"></input>
                    <br />
                    <br />
                    <label>Email</label>
                    <br />
                    <input type="text"></input>
                    <br />
                    <br />
                    <label>Password</label>
                    <br />
                    <input type="text"></input>
                </form>
            </div>
            <div id="signIn">
                <h3>Log in</h3>
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <br />
                    <input type="text"></input>
                    <br />
                    <br />
                    <label>Password</label>
                    <br />
                    <input type="text"></input>
                <button type='submit'>Login test</button>
                </form>
            </div>
        </div>
     </div>
 ); 
};

export default Auth;