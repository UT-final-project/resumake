import React from 'react';
import './login.css'

function Login() {
    return(
    <div>
        <h1 className="home-title">Resume Builder</h1>
        <p className="home-intro">Show off your skills with our Resume Builder!</p>
        <div className="card login-card">
            <div className="card-header login-header">
                Login
            </div>
            <div className="card-body">
                <div className="input-group flex-nowrap login-input">
                    <input type="text" className="form-control" placeholder="Username" />
                </div>
                <div className="input-group flex-nowrap login-input">
                    <input type="text" className="form-control" placeholder="Password" />
                </div>
                <button type="button" className="btn login-btn">Log In</button>
                <p className="signup-redirect">Or you can <a href="#">signup</a></p>
            </div>
            </div>
        </div>
    )
}

export default Login;