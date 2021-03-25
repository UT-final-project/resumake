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
                Don’t you wish there was an easier way to make a resume and share it? That’s why we created Resu-Make, a resume builder application that helps you create your resume with ease. To get started create an account, fill out our form, and you’ll have access to your resume as a PDF file and as a web page for ease of access. Here's what makes us special:

                </p>
            </div>

            <div className="container row reasonscontainer">
                <div className="col-md-4 d-flex justify-content-around reasonscard">
                    <h2 className="reasons">1</h2>
                    <p>Not only will you be able to have a PDF generated with your employment history, we also create a webpage that employers can view! Stand out from the crowd!</p>
                </div>
                <div className="col-md-4 d-flex justify-content-around reasonscard">
                    <h2 className="reasons">2</h2>
                    <p>Have to manually enter your employment history? Save time with our generator by using our text version to copy and paste! Allowing more time to apply for jobs!</p>
                </div>
                <div className="col-md-4 d-flex justify-content-around reasonscard">
                    <h2 className="reasons">3</h2>
                    <p>We've got some great features that we are planning on adding to this application! Make sure to stick around for these updates as we work on templates and styling for you!</p>
                </div>
            </div>

            <div className="text-center aboutus">
                <h1 class="display-4">Our Team</h1>
                <br/>
                <p class="lead">
                The people who made Resu-make possible!
                </p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="container ourcontainer col-sm-2">
                        <a href="https://trevorsmithbanjo.github.io/#/"><img alt="trevor" src="https://raw.githubusercontent.com/UT-final-project/group1-final-project/develop/client/svg-images/Trevor.png" className="ourphotos"/></a>
                        <div className="middle">
                            <div className="text">
                                <a href="https://trevorsmithbanjo.github.io/#/" target="blank">
                                    <div className="text">Trevor's Profile</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container ourcontainer  col-sm-2">
                        <a href="https://stephenlprice.github.io/portfolio/"><img alt="stephen" src="https://raw.githubusercontent.com/UT-final-project/group1-final-project/develop/client/svg-images/Stephen.png" className="ourphotos"/></a>
                        <div className="middle">
                            <div className="text">
                                <a href="https://stephenlprice.github.io/portfolio/" target="blank">
                                    <div className="text">Stephen's Profile</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container ourcontainer col-sm-2">
                        <a href="https://jwhendershott.github.io/responsiveness-portfolio/"><img alt="jake" src="https://raw.githubusercontent.com/UT-final-project/group1-final-project/develop/client/svg-images/Jake.png" className="ourphotos"/></a>
                        <div className="middle">
                        <div className="text">
                                <a href="https://jwhendershott.github.io/responsiveness-portfolio/" target="blank">
                                    <div className="text">Jake's Profile</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container ourcontainer col-sm-2">
                        <a href="https://charliecan2-react-portfolio.herokuapp.com/"><img alt="carlos" src="https://raw.githubusercontent.com/UT-final-project/group1-final-project/develop/client/svg-images/Carlos.png" className="ourphotos"/></a>
                        <div className="middle">
                        <div className="text">
                                <a href="https://charliecan2-react-portfolio.herokuapp.com/" target="blank">
                                    <div className="text">Carlos' Profile</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container ourcontainer col-sm-2">
                        <a href="https://danacorona.github.io/"><img alt="dana" src="https://raw.githubusercontent.com/UT-final-project/group1-final-project/develop/client/svg-images/Dana.png" className="ourphotos"/></a>
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