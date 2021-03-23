import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import './login.css';
import { Link, Redirect } from "react-router-dom";

function Login({ handleUserState }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    // const [errorMessage, setErrorMessage] = useState("");

    function handleLogin(e) {
        e.preventDefault();

        let errorMessage = document.querySelector(".error");

        if (!email) {
            errorMessage.innerHTML = "Please enter a valid Email Address";
        } else if (!password) {
            errorMessage.innerHTML = "Please ender a valid Password";
        } else {
            API.loginUser({
                email: email,
                password: password,
                withCredentials: true
            })
                .then((res) => {
                    let loggedInUser = res.data.userObj;
                    if (!loggedInUser) {
                        errorMessage.innerHTML = "Please enter a valid Email Address and Password";
                        return;
                    } else {
                        handleUserState(loggedInUser._id);
                        setRedirect(true);
                    }
                })
                .catch(err => console.log(err));
        }
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
                    <p class="error"></p>
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
