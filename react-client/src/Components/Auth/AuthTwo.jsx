import React from 'react';

const AuthTwo = () => {
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
                <h3>Sign Up</h3>
                <form>
                    <label>Username</label>
                    <br />
                    <input type="text"></input>
                    <br />
                    <br />
                    <label>Password</label>
                    <br />
                    <input type="text"></input>
                </form>
            </div>
        </div>
     </div>
 ); 
};

export default AuthTwo;