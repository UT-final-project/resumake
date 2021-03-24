import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './Resume.css';
import API from '../../utils/API';
import JobList from '../../components/Lists/JobList/JobList';
import EduList from '../../components/Lists/EducationList/EducationList';
import CertList from '../../components/Lists/CertificationList/CertificationList';
import SkillsList from '../../components/Lists/SkillsList/SkillsList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';


function Resume() {
    // For security reasons state is constructed from API response
    // to avoid exposing passwords via React component analyzers
    const { email } = useParams();
    const [resume, setResume] = useState({
        abstract: '',
        employment: [],
        education: [],
        certifications: [],
        skills: []
    });
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    // When this component mounts, request the user ID with the email matching email from useParams()
    // e.g. localhost:3000/resume/user@mail.com, then use that ID to request a matching resume
    // unique emails are used both for searchability, sharing links with others and to obscure user IDs
    useEffect(() => {
        loadData(email);
    },[]);

    const loadData = (userEmail) => {
        API.findUserByEmail(userEmail)
            .then(res => {
                if (res.length === 0) {
                    throw new Error("No users found!");
                };
                if (res.status === "error") {
                    throw new Error(res.data.message);
                };
                setId(res.data._id);
                setFirstName(res.data.firstname);
                setLastName(res.data.lastname);
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
                setResume(res.data[0]);
            })
            .catch(err => console.log(err));
    };

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div className="container">
            <br/><br/>
            <div className="row">
                <div className="col-8">
                    <h1>{capitalize(firstName)} {capitalize(lastName)}</h1>
                </div>
                <div className="col-4 d-flex justify-content-end">
                    <button type="button" id="download" className="btn add-btn"><span className="fa-icon"><FontAwesomeIcon icon={faFilePdf}/></span> PDF</button>
                </div>
            </div>
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
            {resume.education.length ? (
                <EduList values={resume.education}/>
            ) : (<div/>)}
            {resume.certifications.length ? (
                <CertList values={resume.certifications}/>
            ) : (<div/>)}
            {resume.skills.length ? (
                <SkillsList values={resume.skills}/>
            ) : (<div/>)}
            <br/><br/>
        </div>
    );
};

export default Resume;
