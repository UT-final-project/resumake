import React, {useState, useEffect} from 'react';
import './home.css'

function Login() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassowrd, setVerifyPassword] = useState("");

    return(
    <div className="container">
        <div className="row">
            <div className="col-md-7">
                <h1 className="primary-title">Used by Professionals</h1>
                <p className="home-intro">Show off your skills with our Resume Builder, TRESemmé! Build and maintain your professional online presence with us by completing one of our forms. Here, you can seemlessly make a resume in minutes as well as make a dynamic web portfolio!</p>
                <img src="https://raw.githubusercontent.com/UT-final-project/group1-final-project/34b34d8a8d8484e2bb38e13ab52ff5ce1d4e6e16/client/svg-images/undraw_online_resume_re_ru7s.svg" alt="online-resume" className="online-resume-img"/>
            </div>
            <div className="col-md-5">
            <div className="card signup-card">
                <div className="card-header signup-header">
                    Sign Up
                </div>
                <div className="card-body">
                    <div className="input-group flex-nowrap signup-input">
                        <input type="text" 
                        className="form-control" 
                        placeholder="Email" 
                        onChange={event =>setEmail(event.target.value)}
                        />
                    </div>
                    <div className="input-group flex-nowrap signup-input">
                        <input type="text" 
                        className="form-control" 
                        placeholder="First Name" 
                        onChange={event =>setFirstName(event.target.value)}
                        />
                    </div>
                    <div className="input-group flex-nowrap signup-input">
                        <input type="text" 
                        className="form-control" 
                        placeholder="Last Name" 
                        onChange={event =>setLastName(event.target.value)}
                        />
                    </div>
                    <div className="input-group flex-nowrap signup-input">
                        <input type="password" 
                        className="form-control" 
                        placeholder="Password" 
                        onChange={event =>setPassword(event.target.value)}
                        />
                    </div>
                    <div className="input-group flex-nowrap signup-input">
                        <input type="password" 
                        className="form-control" 
                        placeholder="Verify Password"
                        onChange={event =>setVerifyPassword(event.target.value)}
                        />
                    </div>
                    <button type="button" className="btn signup-btn">Sign Up</button>
                    <p className="signup-redirect">Or you can <a href="#">Log In</a></p>
                </div>
            </div>
            </div>
        </div>
        <br />
        <br />
        <div className="row resume-create-section">
            <div className="col-md-6">
                <h1 className="primary-title">Create a Resume</h1>
                <h4 className="secondary-title">Build With Ease</h4>
                <p className="home-intro">Our comprehensive questionnaire helps you fill out your resume in an effective way. What was otherwise a difficult process is now made easy.</p>
                <h4 className="secondary-title">Templates</h4>
                <p className="home-intro">Choose from a variety of templates here at TRESemmé! We offer a wide selection of styles and color-matching to help you stand out from the crowd.</p>
                <h4 className="secondary-title">Customize</h4>
                <p className="home-intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat laudantium eaque laborum cum natus nobis, minima ullam atque ab dicta, doloremque itaque eos alias consequatur fugit expedita adipisci nostrum laboriosam?</p>
            </div>
            <div className="col-md-6">
                <img src="https://raw.githubusercontent.com/UT-final-project/group1-final-project/develop/client/svg-images/undraw_Code_thinking_re_gka2.svg" alt="thinking" className="thinking-img"/>    
            </div>
        </div>
        <br />
        <br />
        <div className="row web-portfolio-section">
            <div className="col-md-6">
                <img src="https://raw.githubusercontent.com/UT-final-project/group1-final-project/develop/client/svg-images/undraw_Updated_resume_re_q1or.svg" alt="web-portfolio" className="web-portfolio-img"/> 
            </div>
            <div className="col-md-6">
            <h1 className="primary-title">Web Portfolio</h1>
                <p className="home-intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sequi nesciunt vitae reiciendis. Minus, odio suscipit. Explicabo nobis sint eius architecto, laboriosam harum, beatae ut, laborum quos quo nam! Eaque?
                Magnam aliquid nisi ullam, eaque facilis iure beatae unde ab expedita excepturi alias, necessitatibus recusandae, obcaecati voluptatibus? Veniam, blanditiis similique rem, omnis commodi laboriosam nihil dolorum minima sed aspernatur fugiat?
                Repudiandae quis consectetur ad, inventore nesciunt nemo culpa. Nulla tenetur harum minima ipsum, eum quo iste fugit odio autem! Explicabo ipsa, numquam praesentium cupiditate harum soluta cum est dolorum? Soluta!
                Placeat non esse incidunt veritatis inventore hic, quod cum soluta quas doloremque natus aperiam tenetur reiciendis ipsum ex? Ipsam tempore laborum quaerat repellendus exercitationem delectus reprehenderit ratione ab repudiandae maiores!</p>   
            </div>
        </div>
    </div>
    )
}

export default Login;
