import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './Resume.css';
import styled, { css } from 'styled-components';
import API from '../../utils/API';

function Resume(props) {
    const [resume, setResume] = useState({});
    const [id, setId] = useState({});
    const {email} = useParams();

    // When this component mounts, request the user ID with the email matching email from useParams()
    // e.g. localhost:3000/resume/user@mail.com, then use that ID to request a matching resume
    // unique emails are used both for searchability, sharing links with others and to obscure user IDs
    useEffect(() => {
        getUser(email).then(() => {
            loadResume(id);
        });
    });

    const getUser = (userEmail) => {
        API.findUserByEmail(userEmail)
            .then(res => {
                if (res.length === 0) {
                    throw new Error("No users found!");
                };
                if (res.status === "error") {
                    throw new Error(res.data.message);
                };
                setId(res._id);
            })
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
                setResume(res);
            })
            .catch(err => console.log(err));
    };

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div className="container">
            <br/>
            <Header>{capitalize(props.user.firstname)} {capitalize(props.user.lastname)}</Header>
            {!props.summary.length && !props.skillList.length && !props.employment.length 
            && !props.eduHistory.length && !props.certHistory.length ? (
                <h3 id="noContent">No Resume content to display yet!</h3>
            ) : (<div/>)}
            <Header primary>Summary</Header>
            <hr/>
            {props.summary.length ? (
                <ResumeContent>{props.summary}</ResumeContent>
            ) : (<div/>)}
            <br/>
            <Header primary>Education</Header>
            <hr/>
            {props.eduHistory.length ? (
                props.eduHistory.map(school => {
                    return(
                        <section>
                            <SubHeader>{school.school}</SubHeader>
                            <SubHeader light>{school.degree}</SubHeader>
                            <SubHeader light>{school.startYear} - {school.endYear}</SubHeader>
                        </section>
                    )
                })
            ) : (<div />)}
            <br />
            <Header primary>Experience</Header>
            <hr />
            {props.employment.length ? (
                props.employment.map((jobs) => {
                    return(
                        <section>
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
            {props.skillList.length ? (
                props.skillList.map((skill) => {
                    return(
                        <section>
                            <SubHeader light>{skill}</SubHeader>
                        </section>
                    )
                })
            ) : (<div />)}
            <br />
            <Header primary>Certifications</Header>
            <hr />
            {props.certHistory.length ? (
                props.certHistory.map((cert) => {
                    return(
                        <section>
                            <SubHeader>{cert.certificate}</SubHeader>
                            <SubHeader light>Awarded By: {cert.awardedBy}</SubHeader>
                        </section>
                    )
                })
            ) : (<div />)}
            <br/>
            <button type="button" className="btn back-btn" onClick={props.prevStep}>Back</button>
            <button type="button" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#submitModal" onClick={props.submitResume}>Submit</button>
        </div>
    );
};

// js styles
const Header = styled.h1`
    font-size: 56px;
    font-family:Georgia, 'Times New Roman', Times, serif;
    text-align: center;

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

export default Resume;
