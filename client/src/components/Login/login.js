import React, {useState, useEffect} from 'react';
import './login.css'

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(
    <div>
        <div className="card login-card">
            <div className="card-header login-header">
                Signup
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
