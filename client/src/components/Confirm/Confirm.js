import React, { useState } from 'react';
import './Confirm.css';
import JobList from '../Lists/JobList/JobList';
import EduList from '../Lists/EducationList/EducationList';
import CertList from '../Lists/CertificationList/CertificationList';
import SkillsList from '../Lists/SkillsList/SkillsList';

function Confirm(props) {

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
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
                <JobList employment={props.employment}/>
            ) : (<div/>)}
            <br/>
            {props.eduHistory.length ? (
                <EduList values={props.eduHistory}/>
            ) : (<div/>)}
            <br/>
            {props.certHistory.length ? (
                <CertList values={props.certHistory}/>
            ) : (<div/>)}
            <br/>
            {props.skillList.length ? (
                <SkillsList values={props.skillList}/>
            ) : (<div/>)}
            <br/>
            <br/>
            <button type="button" className="btn back-btn" onClick={props.prevStep}>Back</button>
            <button type="button" className="btn add-btn" onClick={props.submitResume}>Submit</button>
        </div>
    );
};

export default Confirm;
