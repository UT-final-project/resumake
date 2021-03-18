import React from 'react';
import '../UserForm/userForm.css';

function Confirm(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="form-title">Confirm</h1>
                    <h2 className="form-paragraph">Your Abstract/Summary</h2>
                        <p className="form-paragraph">{props.abstractValue}</p>
                    <h2 className="form-paragraph">Your Work History</h2>
                        <p className="form-paragraph">{props.workValue.prevEmployer}</p>
                        <p className="form-paragraph">{props.workValue.jobTitle}</p>
                        <p className="form-paragraph">{props.workValue.jobDescription}</p>
                        <p className="form-paragraph">{props.workValue.startDateMonth}</p>
                        <p className="form-paragraph">{props.workValue.startDateYear}</p>
                        <p className="form-paragraph">{props.workValue.endDateMonth}</p>
                        <p className="form-paragraph">{props.workValue.endDateYear}</p>
                    <h2 className="form-paragraph">Education</h2>
                        <p className="form-paragraph">{props.edValue.degree}</p>
                        <p className="form-paragraph">{props.edValue.school}</p>
                        <p className="form-paragraph">{props.edValue.startYear}</p>
                        <p className="form-paragraph">{props.edValue.endYear}</p>
                    <h2 className="form-paragraph">Certifications</h2>
                        <p className="form-paragraph">{props.certValue.certificate}</p>
                        <p className="form-paragraph">{props.certValue.awardedBy}</p>
                    <h2 className="form-paragraph">Skills</h2>
                        <p className="form-paragraph">{props.skillsValue}</p>
                    <button type="button" className="btn back-btn" onClick={props.prevStep}>Back</button>
                    <button type="button" className="btn continue-btn" onClick={props.nextStep}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Confirm;