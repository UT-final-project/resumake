import React, {useState, useEffect} from 'react';
import API from '../../utils/API';
import AbstractForm from '../AbstractForm/AbstractForm';
import WorkForm from '../WorkForm/WorkForm';
import EducationForm from '../EducationForm/EducationForm';
import CertificateForm from '../CertificateForm/CertificateForm';
import SkillsForm from '../SkillsForm/SkillsForm';
import Confirm from '../Confirm/Confirm';

function UserForm({ user, getUser, userLoggedIn }){
    const [step, setStep] = useState(1);
    const [abstract, setAbstract] = useState('');
    const [employment, setEmployment] = useState([]);
    const [job, setJob] = useState({
        id: '',
        prevEmployer: '',
        jobTitle: '',
        jobDescription: '',
        startDateMonth: '',
        startDateYear: '',
        endDateMonth: '',
        endDateYear: ''
    });
    const [eduHistory, setEduHistory] = useState([]);
    const [education, setEducation] = useState({
        degree: '',
        school: '',
        startYear: '',
        endYear: '',
    });
    const [certHistory, setCertHistory] = useState([]);
    const [certifications, setCertifications] = useState({
        certificate: '',
        awardedBy: ''
    });
    const [skillList, setSkillList] = useState([]);
    const [skills, setSkills] = useState('');

    useEffect(() => {
        setJob({
            id: '',
            prevEmployer: '',
            jobTitle: '',
            jobDescription: '',
            startDateMonth: '',
            startDateYear: '',
            endDateMonth: '',
            endDateYear: ''
        });
        setEducation({
            degree: '',
            school: '',
            startYear: '',
            endYear: '',
        });
        setCertifications({
            certificate: '',
            awardedBy: ''
        });
        setSkills('');
        console.log(`User Logged In ${userLoggedIn}`);
        if (userLoggedIn) {
            getUser(user);
        }
    },[employment, eduHistory, certHistory, skillList, userLoggedIn])

    // Adds job to employment array and clears job state for new inputs
    const addJob = () => {
        setEmployment((employment) => [...employment, job]);
        setJob({
            id: '',
            prevEmployer: '',
            jobTitle: '',
            jobDescription: '',
            startDateMonth: '',
            startDateYear: '',
            endDateMonth: '',
            endDateYear: ''
        });
    };

    // Adds education to eduHistory array and clears education state for new inputs
    const addEdu = () => {
        setEduHistory((school) => [...school, education]);
        setEducation({
            degree: '',
            school: '',
            startYear: '',
            endYear: '',
        });
    };

    // Adds certification to certHistory array and clears certification state for new inputs
    const addCert = () => {
        setCertHistory((cert) => [...cert, certifications]);
        setCertifications({
            certificate: '',
            awardedBy: ''
        });
    };

    // Adds skills to skillList array and clears skills state for new inputs
    const addSkill = () => {
        setSkillList((skill) => [...skill, skills]);
        setSkills('');
    };

    // Functions to keep track of which step, or form, the user is at
    const nextStep = () => {
        setStep(step + 1);
    };
    const prevStep = () => {
        setStep(step - 1);
    };

    // Functions to handle change states depending on user input
    function handleAbstractSubmit(event){
        setAbstract(event.target.value);
    };
    function handleJobSubmit(event){
        const { name, value } = event.target;
        setJob({...job, [name]: value, id: Math.random().toString(36).substr(2, 9)});
    };
    function handleEducationSubmit(event){
        const { name, value } = event.target;
        setEducation({...education, [name]: value, id: Math.random().toString(36).substr(2, 9)});
    };
    function handleCertSubmit(event){
        const { name, value } = event.target;
        setCertifications({...certifications, [name]: value, id: Math.random().toString(36).substr(2, 9)});
    };
    function handleSkillsSubmit(event){
        setSkills(event.target.value);
    };

    function capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Function for the Submit button to post resume data
    function handleResumeSubmit(event){
        event.preventDefault();
        console.log('abstract', abstract);
        console.log('employment', employment);
        console.log('education', eduHistory);
        console.log('certifications', certHistory);
        console.log('skills', skillList);
        API.createResume({
            author: 1,
            resumeName: 'Sample Resume',
            firstName: capitalize(user.firstname),
            lastName: capitalize(user.lastname),
            abstract: abstract,
            employment: employment,
            education: eduHistory,
            certifications: certHistory,
            skills: skillList
        }).then(res => {
            console.log(res);
            console.log("/////////////// Resume Successfully Created! ///////////////");
        }).catch(err => console.error(err));
    };

    switch(step) {
        case 1:
            return(
                <AbstractForm
                nextStep={nextStep}
                handleChange={handleAbstractSubmit}
                value={abstract}
                />
            )
        case 2:
            return(
                <WorkForm 
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange={handleJobSubmit}
                values={job}
                employment={employment}
                addJob={addJob}
                />
            )
        case 3:
            return(
                <EducationForm 
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange={handleEducationSubmit}
                values={education}
                eduHistory={eduHistory}
                addEdu={addEdu}
                />
            )
        case 4:
            return(
                <CertificateForm 
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange={handleCertSubmit}
                values={certifications}
                certHistory={certHistory}
                addCert={addCert}
                />
            )
        case 5:
            return(
                <SkillsForm 
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange={handleSkillsSubmit}
                values={skills}
                skillList={skillList}
                addSkill={addSkill}
                />
            )
        case 6:
            return(
                <Confirm
                user={user}
                summary={abstract}
                skillList={skillList}
                employment={employment}
                eduHistory={eduHistory}
                certHistory={certHistory}
                prevStep={prevStep}
                submitResume={handleResumeSubmit}
                />
            )
        default:
            return(
                <AbstractForm
                nextStep={nextStep}
                handleChange={handleAbstractSubmit}
                value={abstract}
                />
            )
    }
}

export default UserForm;