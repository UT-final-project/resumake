import React, { useContext } from 'react';
import './navbar.css';
import { Link } from "react-router-dom";
import API from "../../utils/API";
import UserContext from "../../utils/UserContext";

function Navbar() {
    const { userLoggedIn, handleLogOut } = useContext(UserContext);

    console.log(`User Logged In ${userLoggedIn}`);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand navbar-header" to={"/"}>
                    <img src="https://raw.githubusercontent.com/UT-final-project/group1-final-project/develop/client/svg-images/ResumakeLogoTest.png" id="resumakelogo" /> <br />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link active navbar-link" aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/aboutus"} className="nav-link active navbar-link" aria-current="page">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link active navbar-link" aria-current="page">
                                Pricing
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li>
                            {!userLoggedIn ?
                                <Link to={"/login"} type="button" href="/" role="button" className="btn btn-meadow">
                                    Log In
                            </Link>
                                :
                                <Link to={"/login"} type="button" href="/" role="button" className="btn btn-meadow" onClick={handleLogOut}>
                                    Log Out
                        </Link>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
