import React from "react";
import "./about.css";

function AboutUs () {
    return (
        <div className="container fullabout">

            <div className="jumbotron text-center aboutus">
                <h1 class="display-4">Why Choose Us?</h1>
                <br/>
                <br/>
                <p class="lead">
                Resumake was created with our user in mind. We know that your time is important and that making a great impression is vital to landing the job of your dreams. That's where we come in! We've created a resume builder that will make it easy for you to have a PDF version generated and apply for as many jobs as possible.
                </p>
            </div>

            <div className="container row reasonscontainer">
                <div className="col-4 d-flex justify-content-around reasonscard">
                    <h2 className="reasons">1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit. </p>
                </div>
                <div className="col-4 d-flex justify-content-around reasonscard">
                    <h2 className="reasons">2</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit. </p>
                </div>
                <div className="col-4 d-flex justify-content-around reasonscard">
                    <h2 className="reasons">3</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit. </p>
                </div>
            </div>

            <div className="jumbotron text-center aboutus">
                <h1 class="display-4">Our Team</h1>
                <br/>
                <p class="lead">
                The people who made this application possible!
                </p>
            </div>

            <div className="container ourimages">
                <div className="card">
                    <img src="../../../svg-images/Dana.png"/>
                </div>
            </div>

        </div>
    );
}

export default AboutUs;