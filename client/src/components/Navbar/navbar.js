import React from 'react';
import './navbar.css';
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand navbar-header" href="#">ResuMake</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={"/"}>
                                <a className="nav-link active navbar-link" aria-current="page" href="/">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-link" href="#">Pricing</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li>
                            <Link to={"/login"}>
                                <a type="button" href="/" role="button" class="btn btn-meadow">Log In</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
