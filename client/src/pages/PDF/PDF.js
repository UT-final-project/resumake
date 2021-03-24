import React from 'react';
import styled, { css } from 'styled-components';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

// styled-components applied to PDF content
// const Header = styled.h1`
// font-size: 56px;
// font-family:Georgia, 'Times New Roman', Times, serif;
// text-align: center;

// ${props =>
// props.primary && 
// css`
//     text-align: left;
//     font-size: 32px;
// `}
// `;

// const SubHeader = styled.h2`
// font-size: 24px;
// font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
// font-weight: 800;
// ${props =>
// props.light &&
// css`
//     font-size: 20px;
//     font-weight: 200;
// `}
// `;

// const ResumeContent = styled.p`
// font-size: 18px;
// font-family: Arial, Helvetica, sans-serif;
// color: white;
// `;

// PDF styling
const styles = StyleSheet.create({
    page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
    },
    section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
    }
});

// function capitalize(str) {
    //     return str.charAt(0).toUpperCase() + str.slice(1);
    // };

// The PDF file to be exported
const dlFile = (props) => {
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text> Test PDF
                    {/* <div className="container">
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
                    </div> */}
                </Text>
            </View>
        </Page>
    </Document>
};


function PDF(props) {

    return (
        <button type="button" id="pdf" className="btn add-btn"> 
                <PDFDownloadLink document={dlFile} fileName="somename.pdf" id="dl">
                    {({ blob, url, loading, error }) =>
                        loading ? "Loading document..." : <span className="fa-icon"><FontAwesomeIcon icon={faFilePdf}/> PDF</span>
                    }
                </PDFDownloadLink> 
        </button>
    );
};

export default PDF;
