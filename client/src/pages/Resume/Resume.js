import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './Resume.css';
import API from '../../utils/API';
import JobList from '../../components/Lists/JobList/JobList';
import EduList from '../../components/Lists/EducationList/EducationList';
import CertList from '../../components/Lists/CertificationList/CertificationList';
import SkillsList from '../../components/Lists/SkillsList/SkillsList';


function Resume(props) {
    // For security reasons state is constructed from API response to avoid exposing passwords
    // via React component analyzers
    const { email } = useParams();
    const [resume, setResume] = useState({});
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    

    // When this component mounts, request the user ID with the email matching email from useParams()
    // e.g. localhost:3000/resume/user@mail.com, then use that ID to request a matching resume
    // unique emails are used both for searchability, sharing links with others and to obscure user IDs
    useEffect(() => {
        console.log('useParams:',email);
        loadData(email);
    });

    const loadData = (userEmail) => {
        API.findUserByEmail(userEmail)
            .then(res => {
                if (res.length === 0) {
                    throw new Error("No users found!");
                };
                if (res.status === "error") {
                    throw new Error(res.data.message);
                };
                console.log('User matching email provided:', JSON.stringify(res));
                setId(res._id);
                setFirstName(res.firstname);
                setLastName(res.lastname);
            })
            .then(loadResume(id))
            .catch(err => console.log(err)); 
    };

    const loadResume = (userId) => {
        API.findResumeByAuthor(userId)
            .then(res => {
                if (res.length === 0) {
                    throw new Error("No resumes found!");
                };
                if (res.status === "error") {
                    throw new Error(res.data.message);
                };
                console.log('Resume matching user provided:', JSON.stringify(res));
                setResume(res);
            })
            .catch(err => console.log(err));
    };

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div className="container">
            {/* <h1 className="form-title">Review your Resume</h1>
            <hr/>
            <br/>
            <h1>{capitalize(firstName)} {capitalize(lastName)}</h1>
            {!resume.abstract.length && !resume.skills.length && !resume.employment.length 
            && !resume.education.length && !resume.certifications.length ? (
                <h3 id="noContent">No Resume content to display yet!</h3>
            ) : (<div/>)}
            {resume.abstract.length ? (
                <div className="card">
                    <div className="card-body">
                        <p>{resume.abstract}</p>
                    </div>
                </div>
            ) : (<div/>)}
            <br/>
            {resume.employment.length ? (
                <JobList employment={resume.employment}/>
            ) : (<div/>)}
            <br/>
            {resume.education.length ? (
                <EduList values={resume.education}/>
            ) : (<div/>)}
            <br/>
            {resume.certifications.length ? (
                <CertList values={resume.certifications}/>
            ) : (<div/>)}
            <br/>
            {resume.skills.length ? (
                <SkillsList values={resume.skills}/>
            ) : (<div/>)}
            <br/>
            <br/>
            <button type="button" className="btn add-btn">Download</button> */}
        </div>
    );
};

export default Resume;
