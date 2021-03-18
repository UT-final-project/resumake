import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import './login.css';
import { Link } from "react-router-dom";

function Login() {
    const [username, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    function handleLogin(e) {
        e.preventDefault();
        console.log(e);

        API.loginUser({ username, password })
            .then(res => {
                console.log({ res });
                if (res.data.loggedIn) {
                    setLoggedIn(true);
                }
                console.log("Login Successful!")
                window.location.href = "/userhome"
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="card login-card">
                <div className="card-header login-header">
                    Log In
            </div>
                <div className="card-body">
                    <div className="input-group flex-nowrap login-input">
                        <input type="text" className="form-control" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="input-group flex-nowrap login-input">
                        <input type="password" className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button type="button" className="btn login-btn" onClick={handleLogin}>Log In</button>
                    <p className="signup-redirect">Or you can 
                    <Link to={"/"}>
                        <a href="#"> Sign Up</a>
                    </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;
