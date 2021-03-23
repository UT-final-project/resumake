import React, {useState, useEffect} from 'react';
import API from '../../utils/API';
import AbstractForm from '../AbstractForm/AbstractForm';
import WorkForm from '../WorkForm/WorkForm';
import EducationForm from '../EducationForm/EducationForm';
import CertificateForm from '../CertificateForm/CertificateForm';
import SkillsForm from '../SkillsForm/SkillsForm';
import Confirm from '../Confirm/Confirm';

function UserForm(){
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
    const [education, setEducation] = useState([
        {
            degree: '',
            school: '',
            startYear: '',
            endYear: '',
        }
    ]);
    const [certifications, setCertifications] = useState([
        {
            certificate: '',
            awardedBy: ''
        }
    ]);
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
    },[employment, eduHistory])

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

    const addEdu = () => {
        setEduHistory((employment) => [...employment, education]);
        setEducation({
            degree: '',
            school: '',
            startYear: '',
            endYear: '',
        });
    };

    // Functions to keep track of which step, or form, the user is at
    const nextStep = () => {
        setStep(step + 1);
    }
    const prevStep = () => {
        setStep(step - 1);
    }

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

    // Function for the Submit button to post resume data
    function handleResumeSubmit(event){
        event.preventDefault();
        API.createResume({
            resumeName: 'Sample Resume',
            abstract: abstract,
            employment: employment,
            education: eduHistory,
            certifications: certifications,
            skills: skills
        });
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
                />
            )
        case 5:
            return(
                <SkillsForm 
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange={handleSkillsSubmit}
                value={skills}
                />
            )
        case 6:
            return(
                <Confirm
                abstractValue={abstract}
                workValue={employment}
                edValue={education}
                certValue={certifications}
                skillsValue={skills}
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