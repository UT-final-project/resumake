import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './Resume.css';
import API from '../../utils/API';
import JobList from '../../components/Lists/JobList/JobList';
import EduList from '../../components/Lists/EducationList/EducationList';
import CertList from '../../components/Lists/CertificationList/CertificationList';
import SkillsList from '../../components/Lists/SkillsList/SkillsList';
import Pdf from "react-to-pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faCode, faRobot } from '@fortawesome/free-solid-svg-icons';
import styled, { css } from 'styled-components';

// styled-components applied to PDF content
const Header = styled.h1`
    font-size: 2.5rem;
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

const ref = React.createRef();

function Resume() {
    const [display, setDisplay] = useState('pretty');
    const [btnText, setBtnText] = useState('ATS');
    const [btnIcon, setBtnIcon] = useState(faCode);
    // For security reasons state is constructed from API response
    // to avoid exposing passwords via React component analyzers
    const [resume, setResume] = useState({
        abstract: '',
        employment: [],
        education: [],
        certifications: [],
        skills: []
    });
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
    }, [display, resume]);

    const loadData = async (userEmail) => {
        let usrId = await API.findUserByEmail(userEmail)
            .then(res => {
                if (res.length === 0) {
                    throw new Error("No users found!");
                };
                if (res.status === "error") {
                    throw new Error(res.data.message);
                };
                setFirstName(res.data.firstname);
                setLastName(res.data.lastname);
                return res.data._id;
            })
            .catch(err => console.log(err));
            loadResume(usrId);
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
                setResume(res.data);
            })
            .catch(err => console.log(err));
    };

    // Capitalize the first and last names
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    // Change display settings
    const changeDisplay = () => {
        if (display === 'pretty') {
            setDisplay('ATS version');
            setBtnText('ATS');
            setBtnIcon(faRobot);
        }
        else {
            setDisplay('pretty');
            setBtnText('Web');
            setBtnIcon(faCode);
        };
    };

    // PDF export config
    const options = {
        orientation: 'portrait',
        unit: 'in',
        format: [100,800]
    };

    return (
        <section className="container">
            {!resume ? (<div>Nothing to Show</div>) : (<div>
                <br/><br/>
                <div className="row d-flex justify-content-end">
                    <div className="col-8"/>
                    <div className="col d-flex justify-content-center">
                            <button type="button" id="download" className="btn back-btn" onClick={changeDisplay}>
                                <span className="fa-icon"><FontAwesomeIcon icon={btnIcon}/></span> {btnText}
                            </button>
                        </div>
                    <div className="col d-flex justify-content-center">
                        <Pdf targetRef={ref} filename={`${firstName}${lastName}-resume.pdf`} options={options}>
                            {({ toPdf }) => 
                                <button type="button" id="download" className="btn add-btn" onClick={toPdf}>
                                    <span className="fa-icon"><FontAwesomeIcon icon={faFilePdf}/></span> PDF
                                </button>}
                        </Pdf>
                    </div>
                </div>
                {display === 'pretty' ? (
                    // The web version of the resume
                    <div ref={ref}>
                        <h1>{capitalize(firstName)} {capitalize(lastName)}</h1>
                            <div className="card">
                                <div className="card-body">
                                    <p>{resume.abstract}</p>
                                </div>
                            </div>
                        <br/>
                        <JobList employment={resume.employment}/>
                        <EduList values={resume.education}/>
                        <CertList values={resume.certifications}/>
                        <SkillsList values={resume.skills}/>
                    </div>
                ) : (
                    // The ATS version of the Resume
                    <div ref={ref}>
                        <Header>
                            <p>{capitalize(firstName)} {capitalize(lastName)}</p>
                        </Header>
                        <ResumeContent>{resume.abstract}</ResumeContent>
                        <br/>
                        <Header primary>Education</Header>
                        <hr/>
                        {resume.education.map(school => {
                            return(
                                <section key={Math.random().toString(36).substr(2, 9)}>
                                    <SubHeader>{school.school}</SubHeader>
                                    <SubHeader light>{school.degree}</SubHeader>
                                    <SubHeader light>{school.startYear} - {school.endYear}</SubHeader>
                                </section>
                            );
                        })}
                        <br />
                        <Header primary>Experience</Header>
                        <hr />
                        {resume.employment.map((jobs) => {
                            return(
                                <section key={Math.random().toString(36).substr(2, 9)}>
                                    <SubHeader>{jobs.jobTitle} at {jobs.prevEmployer}</SubHeader>
                                    <SubHeader light>{jobs.startDateMonth} {jobs.startDateYear} - {jobs.endDateMonth} {jobs.endDateYear}</SubHeader>
                                    <SubHeader light>{jobs.jobDescription}</SubHeader>
                                </section>
                            )
                        })}
                        <br />
                        <Header primary>Certifications</Header>
                        <hr />
                            {resume.certifications.map((cert) => {
                                return(
                                    <section key={Math.random().toString(36).substr(2, 9)}>
                                        <SubHeader>{cert.certificate}</SubHeader>
                                        <SubHeader light>Awarded By: {cert.awardedBy}</SubHeader>
                                    </section>
                                )
                            })}
                        <br />
                        <Header primary>Skills</Header>
                        <hr />
                            {resume.skills.map((skill) => {
                                return(
                                    <section key={Math.random().toString(36).substr(2, 9)}>
                                        <SubHeader light>{skill}</SubHeader>
                                    </section>
                                )
                            })}
                    </div>
                )}
                <br/><br/>
            </div>)}
        </section>
    );
};

export default Resume;
