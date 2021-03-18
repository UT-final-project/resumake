import React, {useState, useEffect} from 'react';
import './userhome.css';
function Userhome() {

    return (
        // Whole Container
        <div className ="container col-md-12">
            <div className="row">
                <div className ="col-md-12">
                    <h1 className="welcometext">Hi, James!</h1>
                    <br/>
                    <br/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <h2>Your Resume</h2>
                    <img src="https://raw.githubusercontent.com/UT-final-project/group1-final-project/b6ffc1b8d66a71b17e8bdcb6221ea519585026db/client/svg-images/undraw_Resume_re_hkth.svg" alt="resume" className="userhomeimg"/>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col-md-6"><button type="button" className="btn userhomebtn editresume-btn">Edit Resume</button></div>
                        <div className="col-md-6"><button type="button" className="btn userhomebtn download-btn">Download Resume</button></div>
                    </div>
                </div>
                <div className="col-md-4">
                    <h2>Choose a Template</h2>
                    <img src="https://raw.githubusercontent.com/UT-final-project/group1-final-project/f92e4abd48b13d8ffda7c872601d867ff3d34c39/client/svg-images/undraw_Reviewed_docs_re_9lmr.svg" alt="templates" className="userhomeimg"/>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col-md-12"><button type="button" className="btn userhomebtn edittemplate-btn">Edit Template</button></div>
                    </div>
                </div>
                <div className="col-md-4">
                    <h2>Your Webpage</h2>
                    <img src="https://raw.githubusercontent.com/UT-final-project/group1-final-project/f92e4abd48b13d8ffda7c872601d867ff3d34c39/client/svg-images/undraw_Personal_site_re_c4bp.svg" alt="webpage" className="userhomeimg"/>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col-md-12"><button type="button" className="btn userhomebtn viewwebpage-btn">View Webpage</button></div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Userhome;