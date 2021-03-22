import React, { useState } from 'react';
import './home.css'
import API from "../../utils/API";
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");

    // Function to create user on submit form
    function handleFormSubmit(e) {
        e.preventDefault();
        //// For now I'm just consloe logging this ////
        //// But would like to give a response if invalid info is entered ////
        //// And if successfull maybe redirect to the next page ////
        let errormessage = document.getElementById('error');
        if (!email) {
            errormessage.innerHTML= 'Please enter an Email Address!';
            return
        } else if (!firstName || !lastName) {
            errormessage.innerHTML= 'Please enter your First and Last name!';
            return
        } else if (!password) {
            errormessage.innerHTML= 'Please enter a Password!';
            return
        } else if (password !== verifyPassword) {
            errormessage.innerHTML= 'Passwords do not match!';
            return
        } else {
            API.createUser({
                email: email,
                firstname: firstName,
                lastname: lastName,
                password: password
            })
                .then(res => {
                    console.log({ res });
                    console.log("User Successfully Created");
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <h1 className="primary-title">Used by Professionals</h1>
                    <p className="home-intro">Want to put your best foot forward and impress employers? Our resume helper can help to create a professional and sleek Resume as well as a Webpage within minutes. Try it out by creating an account with us!</p>
                    <img src="https://raw.githubusercontent.com/UT-final-project/group1-final-project/34b34d8a8d8484e2bb38e13ab52ff5ce1d4e6e16/client/svg-images/undraw_online_resume_re_ru7s.svg" alt="online-resume" className="online-resume-img" />
                </div>
                <div className="col-md-5">
                    <form className="card signup-card">
                        <div className="card-header signup-header">
                            Sign Up
                        </div>
                        <div className="card-body">
                            <div className="input-group flex-nowrap signup-input">
                                <input type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    onChange={event => setEmail(event.target.value)}
                                    autocomplete="email"
                                />
                            </div>
                            <div className="input-group flex-nowrap signup-input">
                                <input type="text"
                                    className="form-control"
                                    placeholder="First Name"
                                    onChange={event => setFirstName(event.target.value)}
                                    autocomplete="first name"
                                />
                            </div>
                            <div className="input-group flex-nowrap signup-input">
                                <input type="text"
                                    className="form-control"
                                    placeholder="Last Name"
                                    onChange={event => setLastName(event.target.value)}
                                    autocomplete="last name"
                                />
                            </div>
                            <div className="input-group flex-nowrap signup-input">
                                <input type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    onChange={event => setPassword(event.target.value)}
                                    autocomplete="password"
                                />
                            </div>
                            <div className="input-group flex-nowrap signup-input">
                                <input type="password"
                                    className="form-control"
                                    placeholder="Verify Password"
                                    onChange={event => setVerifyPassword(event.target.value)}
                                    autocomplete="password confirm"
                                />
                            </div>
                            <p id="error"></p>
                            <button type="button" className="btn signup-btn" onClick={handleFormSubmit}>Sign Up</button>
                            <p className="signup-redirect">Or you can 
                            <Link to={"/login"}>
                                <span> Log In</span>
                            </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <br />
            <br />
            <div className="row resume-create-section">
                <div className="col-md-6">
                    <h1 className="primary-title">Create a Resume</h1>
                    <h4 className="secondary-title">Build With Ease</h4>
                    <p className="home-intro">With a few simple questions, you’ll be able to fill out your Employment History, Education History, Skills, and show off your projects where we compile it into a sleek Resume and a webpage.</p>
                    <h4 className="secondary-title">Templates</h4>
                    <p className="home-intro">Want a Resume to show off your personality? You’ll be able to choose from a variety of templates featuring different color schemes and styles that will help you to stand out from the rest. </p>
                    <h4 className="secondary-title">Saves Time</h4>
                    <p className="home-intro">Are you applying for a job manually? We can help reduce the amount of time it takes to type everything by also giving the option to have a text file created. This way all you’ll have to do is Copy and Paste, saving you loads of time.</p>
                </div>
                <div className="col-md-6">
                    <img src="https://raw.githubusercontent.com/UT-final-project/group1-final-project/develop/client/svg-images/undraw_Code_thinking_re_gka2.svg" alt="thinking" className="thinking-img" />
                </div>
            </div>
            <br />
            <br />
            <div className="row web-portfolio-section">
                <div className="col-md-6">
                    <img src="https://raw.githubusercontent.com/UT-final-project/group1-final-project/develop/client/svg-images/undraw_Updated_resume_re_q1or.svg" alt="web-portfolio" className="web-portfolio-img" />
                </div>
                <div className="col-md-6">
                    <h1 className="primary-title">Web Portfolio</h1>
                    <p className="home-intro">Having a web portfolio helps to show off your skills! Being able to direct someone to a webpage that they can access when they need your help can open new doors and opportunities for you! It’s a great tool to use for Networking and highlighting your work!</p>
                </div>
            </div>
        </div>
    )
}

export default Login;
