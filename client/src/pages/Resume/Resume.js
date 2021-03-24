import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './Resume.css';
import API from '../../utils/API';
import JobList from '../../components/Lists/JobList/JobList';
import EduList from '../../components/Lists/EducationList/EducationList';
import CertList from '../../components/Lists/CertificationList/CertificationList';
import SkillsList from '../../components/Lists/SkillsList/SkillsList';
import Pdf from "react-to-pdf";
import PDF from '../PDF/PDF';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faCode, faRobot } from '@fortawesome/free-solid-svg-icons';
import styled, { css } from 'styled-components';

// styled-components applied to PDF content
const Header = styled.h1`
    font-size: 56px;
    font-family:Georgia, 'Times New Roman', Times, serif;
    text-align: left;
    ${props =>
    props.primary && 
    css`
        text-align: left;
        font-size: 32px;
    `}
`;

const SubHeader = styled.h2`
    font-size: 24px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 800;
    ${props =>
    props.light &&
    css`
        font-size: 20px;
        font-weight: 200;
    `}
`;

const ResumeContent = styled.p`
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
`;

function Resume() {
    const [display, setDisplay] = useState('pretty');
    // For security reasons state is constructed from API response
    // to avoid exposing passwords via React component analyzers
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
    const { email } = useParams();

    // When this component mounts, request the user ID with the email matching email from useParams()
    // e.g. localhost:3000/resume/user@mail.com, then use that ID to request a matching resume
    // unique emails are used both for searchability, sharing links with others and to obscure user IDs
    useEffect(() => {
        loadData(email);
    },[]);

    useEffect(() => {
    }, [display]);

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

    // Capitalize the first and last names
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const changeDisplay = () => {
        display === 'pretty' ? setDisplay('ATS version') : setDisplay('pretty');
    };

    // PDF export config
    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [4,2]
    };

    const dl = () => {

    };

    return (
        <section className="container">
            <br/><br/>
            {display === 'pretty' ? (
                <div>
                    <div className="row">
                        <div className="col-8">
                            <h1>{capitalize(firstName)} {capitalize(lastName)}</h1>
                        </div>
                        <div className="col-2 d-flex justify-content-end">
                                <button type="button" id="download" className="btn back-btn" onClick={changeDisplay}>
                                    <span className="fa-icon"><FontAwesomeIcon icon={faRobot}/></span> ATS
                                </button>
                            </div>
                        <div className="col-2 d-flex justify-content-end">
                            <button type="button" id="download" className="btn add-btn" onClick={dl}>
                                <span className="fa-icon"><FontAwesomeIcon icon={faFilePdf}/></span> PDF
                            </button>
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
                </div>
            ) : (
                <div>
                    <Header>
                        <div className="row">
                            <div className="col-8">
                                <h1>{capitalize(firstName)} {capitalize(lastName)}</h1>
                            </div>
                            <div className="col-2 d-flex justify-content-end">
                                <button type="button" id="download" className="btn back-btn" onClick={changeDisplay}>
                                    <span className="fa-icon"><FontAwesomeIcon icon={faCode}/></span> Web
                                </button>
                            </div>
                            <div className="col-2 d-flex justify-content-end">
                                <button type="button" id="download" className="btn add-btn" onClick={dl}>
                                    <span className="fa-icon"><FontAwesomeIcon icon={faFilePdf}/></span> PDF
                                </button>
                                <ReactToPdf targetRef={ref} filename="div-blue.pdf" options={options} x={.5} y={.5} scale={0.8}>
                                    {({toPdf}) => (
                                        <button onClick={toPdf}>Generate pdf</button>
                                    )}
                                </ReactToPdf>
                            </div>
                        </div>
                    </Header>
                    {!resume.abstract.length && !resume.skills.length && !resume.employment.length 
                    && !resume.education.length && !resume.certifications.length ? (
                        <h3 id="noContent">No Resume content to display yet!</h3>
                    ) : (<div/>)}
                    <Header primary>Summary</Header>
                    <hr/>
                    {resume.abstract.length ? (
                        <ResumeContent>{resume.abstract}</ResumeContent>
                    ) : (<div/>)}
                    <br/>
                    <Header primary>Education</Header>
                    <hr/>
                    {resume.education.length ? (
                        resume.education.map(school => {
                            return(
                                <section key={Math.random().toString(36).substr(2, 9)}>
                                    <SubHeader>{school.school}</SubHeader>
                                    <SubHeader light>{school.degree}</SubHeader>
                                    <SubHeader light>{school.startYear} - {school.endYear}</SubHeader>
                                </section>
                            );
                        })
                    ) : (<div />)}
                    <br />
                    <Header primary>Experience</Header>
                    <hr />
                    {resume.employment.length ? (
                        resume.employment.map((jobs) => {
                            return(
                                <section key={Math.random().toString(36).substr(2, 9)}>
                                    <SubHeader>{jobs.jobTitle} at {jobs.prevEmployer}</SubHeader>
                                    <SubHeader light>{jobs.startDateMonth} {jobs.startDateYear} - {jobs.endDateMonth} {jobs.endDateYear}</SubHeader>
                                    <SubHeader light>{jobs.jobDescription}</SubHeader>
                                </section>
                            )
                        })
                    ) : (<div />)}
                    <br />
                    <Header primary>Skills</Header>
                    <hr />
                    {resume.skills.length ? (
                        resume.skills.map((skill) => {
                            return(
                                <section key={Math.random().toString(36).substr(2, 9)}>
                                    <SubHeader light>{skill}</SubHeader>
                                </section>
                            )
                        })
                    ) : (<div />)}
                    <br />
                    <Header primary>Certifications</Header>
                    <hr />
                    {resume.certifications.length ? (
                        resume.certifications.map((cert) => {
                            return(
                                <section key={Math.random().toString(36).substr(2, 9)}>
                                    <SubHeader>{cert.certificate}</SubHeader>
                                    <SubHeader light>Awarded By: {cert.awardedBy}</SubHeader>
                                </section>
                            )
                        })
                    ) : (<div />)}
                </div>
            )}
            <br/><br/>
        </section>
    );
};

export default Resume;
