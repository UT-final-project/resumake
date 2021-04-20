import React, { useState } from 'react';
import './Confirm.css';
import JobList from '../Lists/JobList/JobList';
import EduList from '../Lists/EducationList/EducationList';
import CertList from '../Lists/CertificationList/CertificationList';
import SkillsList from '../Lists/SkillsList/SkillsList';
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Confirm(props) {
    const [redirect, setRedirect] = useState(false);

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    function handleRedirect(e) {
        e.preventDefault();
        setRedirect(true);        
    };

    return (
        <div className="container">
            <h1 className="form-title">Review your Resume</h1>
            <hr/>
            <br/>
            <h1>{capitalize(props.user.firstname)} {capitalize(props.user.lastname)}</h1>
            {!props.summary.length && !props.skillList.length && !props.employment.length 
            && !props.eduHistory.length && !props.certHistory.length ? (
                <h3 id="noContent">No Resume content to display yet!</h3>
            ) : (<div/>)}
            {props.summary.length ? (
                <div className="card">
                    <div className="card-body">
                        <p>{props.summary}</p>
                    </div>
                </div>
            ) : (<div/>)}
            <br/>
            {props.employment.length ? (
                <JobList 
                employment={props.employment}
                />
            ) : (<div/>)}
            <br/>
            {props.eduHistory.length ? (
                <EduList 
                values={props.eduHistory}
                />
            ) : (<div/>)}
            <br/>
            {props.certHistory.length ? (
                <CertList 
                values={props.certHistory}
                />
            ) : (<div/>)}
            <br/>
            {props.skillList.length ? (
                <SkillsList values={props.skillList}/>
            ) : (<div/>)}
            <br/>
            <br/>
            {redirect ? <Redirect push to="/userhome" /> : <></>}

            {/* Modal starts here */}
            <div className="modal fade" id="submitModal" tabIndex="-1" aria-labelledby="submitModal" aria-hidden="true" onClick={handleRedirect}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Resume Submitted</h5>
                            <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close"><span className="fa-icon"><FontAwesomeIcon icon={faTimes} /></span></button>
                        </div>
                        <div className="modal-body">
                            <p>You can view and edit your resume from your home page.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn userhomebtn" data-bs-dismiss="modal">Ok</button>
                            {/* <button type="button" class="btn btn-primary">Ok</button> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal ends here */}
            <br />
            <button type="button" className="btn back-btn" onClick={props.prevStep}>Back</button>
            <button type="button" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#submitModal" onClick={props.submitResume}>Submit</button>
        </div>
    );
};

export default Confirm;
