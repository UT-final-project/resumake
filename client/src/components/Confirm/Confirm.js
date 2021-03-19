import React from 'react';
import '../UserForm/userForm.css';

function Confirm(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="form-title">Confirm</h1>
                    <p className="form-paragraph">Please review your data to make sure everything is correct. If there's anything that needs correcting, use the back button to navigate to the form that needs to be changed.</p>
                    <h2 className="form-paragraph">Your Abstract/Summary</h2>
                        <p className="form-paragraph">{props.abstractValue}</p>
                    <h2 className="form-paragraph">Your Work History</h2>
                        <h4 className="form-title">Job Title</h4>
                        <p className="form-paragraph">{props.workValue.jobTitle}</p>
                        <h4 className="form-title">Description</h4>
                        <p className="form-paragraph">{props.workValue.jobDescription}</p>
                        <h4 className="form-title">Employer</h4>
                        <p className="form-paragraph">{props.workValue.prevEmployer}</p>
                        <h4 className="form-title">Dates Worked</h4>
                        <p className="form-paragraph">{props.workValue.startDateMonth}, {props.workValue.startDateYear} to {props.workValue.endDateMonth}, {props.workValue.endDateYear}</p>
                    <h2 className="form-paragraph">Education</h2>
                        <h4 className="form-title">Degree</h4>
                        <p className="form-paragraph">{props.edValue.degree}</p>
                        <h4 className="form-title">School</h4>
                        <p className="form-paragraph">{props.edValue.school}</p>
                        <h4 className="form-title">Years Attended</h4>
                        <p className="form-paragraph">{props.edValue.startYear} - {props.edValue.endYear}</p>
                    <h2 className="form-paragraph">Certifications</h2>
                        <h4 className="form-title">Certification Title</h4>
                        <p className="form-paragraph">{props.certValue.certificate}</p>
                        <h4 className="form-title">Awaraded By</h4>
                        <p className="form-paragraph">{props.certValue.awardedBy}</p>
                    <h2 className="form-paragraph">Skills</h2>
                        <p className="form-paragraph">{props.skillsValue}</p>
                    <button type="button" className="btn back-btn" onClick={props.prevStep}>Back</button>
                    <button type="button" className="btn submit-btn" onClick={props.handleSubmit}>Save</button>
                </div>
            </div>
        </div>
    )
};

export default Confirm;
