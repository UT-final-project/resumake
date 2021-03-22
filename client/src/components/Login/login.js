import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import './login.css';
import { Link, Redirect } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    function handleLogin(e) {
        e.preventDefault();

        if (!email || !password) {
            return;
        }

        API.loginUser({
            email: email,
            password: password,
            withCredentials: true
        })
            .then((res) => {
                console.log(res.data);
                if (!res.data.email || !res.data.password) {
                    return
                }
                else {
                    console.log("Login Successful!");
                    API.isLoggedIn(res.data._id);
                    setRedirect(true);
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            {redirect ? <Redirect push to="/userhome" /> : <></>}
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
