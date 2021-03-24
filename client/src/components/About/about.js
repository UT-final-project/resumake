import React from "react";
import "./about.css";

function AboutUs () {
    return (
        <div className="container fullabout">

            <div className="text-center aboutus">
                <h1 class="display-4">Why Choose Us?</h1>
                <br/>
                <br/>
                <p class="d">
                Resumake was created with our user in mind. We know that your time is important and that making a great impression is vital to landing the job of your dreams. That's where we come in! We've created a resume builder that will make it easy for you to have a PDF version generated and apply for as many jobs as possible.
                </p>
            </div>

            <div className="container row reasonscontainer">
                <div className="col-md-4 d-flex justify-content-around reasonscard">
                    <h2 className="reasons">1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit. </p>
                </div>
                <div className="col-md-4 d-flex justify-content-around reasonscard">
                    <h2 className="reasons">2</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit. </p>
                </div>
                <div className="col-md-4 d-flex justify-content-around reasonscard">
                    <h2 className="reasons">3</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit. </p>
                </div>
            </div>

            <div className="text-center aboutus">
                <h1 class="display-4">Our Team</h1>
                <br/>
                <p class="lead">
                The people who made Resumake possible!
                </p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="container ourcontainer col-sm-2">
                        <img src="https://raw.githubusercontent.com/UT-final-project/group1-final-project/develop/client/svg-images/Trevor.png" className="ourphotos"/>
                        <div className="middle">
                            <div className="text">
                                <a href="https://trevorsmithbanjo.github.io/#/" target="blank">
                                    <div className="text">Trevor's Profile</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container ourcontainer  col-sm-2">
                        <a href="#"><img src="https://raw.githubusercontent.com/UT-final-project/group1-final-project/develop/client/svg-images/Stephen.png" className="ourphotos"/></a>
                        <div className="middle">
                            <div className="text">
                                <a href="https://stephenlprice.github.io/portfolio/" target="blank">
                                    <div className="text">Stephen's Profile</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container ourcontainer col-sm-2">
                        <a href="#"><img src="https://raw.githubusercontent.com/UT-final-project/group1-final-project/develop/client/svg-images/Jake.png" className="ourphotos"/></a>
                        <div className="middle">
                        <div className="text">
                                <a href="https://jwhendershott.github.io/responsiveness-portfolio/" target="blank">
                                    <div className="text">Jake's Profile</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container ourcontainer col-sm-2">
                        <a href="#"><img src="https://raw.githubusercontent.com/UT-final-project/group1-final-project/develop/client/svg-images/Carlos.png" className="ourphotos"/></a>
                        <div className="middle">
                        <div className="text">
                                <a href="https://charliecan2.github.io/" target="blank">
                                    <div className="text">Carlos' Profile</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container ourcontainer col-sm-2">
                        <a href="#"><img src="https://raw.githubusercontent.com/UT-final-project/group1-final-project/develop/client/svg-images/Dana.png" className="ourphotos"/></a>
                        <div className="middle">
                        <div className="text">
                                <a href="https://danacorona.github.io/" target="blank">
                                    <div className="text">Dana's Profile</div>
                                </a>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>

            <br/>
            <br/>
            <br/>

        </div>
    );
}

export default AboutUs;