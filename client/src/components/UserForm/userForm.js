import React, {useState, useEffect} from 'react';
import AbstractForm from '../AbstractForm/AbstractForm';
import WorkForm from '../WorkForm/WorkForm';
import EducationForm from '../EducationForm/EducationForm';
import CertificateForm from '../CertificateForm/CertificateForm';
import SkillsForm from '../SkillsForm/SkillsForm';
import Confirm from '../Confirm/Confirm';

function UserForm(){
    const [step, setStep] = useState(1);
    const [abstract, setAbstract] = useState('');
    const [workHistory, setWorkHistory] = useState({
        prevEmployer: '',
        jobTitle: '',
        jobDescription: '',
        startDateMonth: '',
        startDateYear: '',
        endDateYear: '',
        endDateMonth: ''
    });
    const [education, setEducation] = useState({
        degree: '',
        school: '',
        startYear: '',
        endYear: '',
    });
    const [certifications, setCertifications] = useState({
        certificate: '',
        awardedBy: ''
    });
    const [skills, setSkills] = useState();

    const [resume, setResume] = useState({
        author: '',
        resumeName: '',
        abstract: abstract,
        employment: workHistory,
        education: education,
        certifications: certifications,
        skills: skills
    });

    // Functions to keep track of which step, or form, the user is at
    const nextStep = () => {
        setStep(step + 1)
    };
    const prevStep = () => {
        setStep(step - 1)
    };

    // Posts new resume to the DB
    const handleSubmit = (event) => {
        setResume(event.target.value)
        // API.getList()
        //     .then(res => {
        //         if (res.data.length === 0) {
        //         throw new Error("No results found.");
        //         }
        //         if (res.data.status === "error") {
        //         throw new Error(res.data.message);
        //         }
        //     })
        //     .catch(err => console.log(err));
    };

    // Functions to handle state changes depending on user input
    function handleAbstractSubmit(event){
        setAbstract(event.target.value)
    };
    function handleWorkSubmit(event){
        const { name, value } = event.target;
        setWorkHistory({...workHistory, [name]: value})
    };
    function handleEducationSubmit(event){
        const { name, value } = event.target;
        setEducation({...education, [name]: value})
    };
    function handleCertSubmit(event){
        const { name, value } = event.target;
        setCertifications({...certifications, [name]: value})
    };
    function handleSkillsSubmit(event){
        setSkills(event.target.value)
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
                handleChange={handleWorkSubmit}
                values={workHistory}
                />
            )
        case 3:
            return(
                <EducationForm 
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange={handleEducationSubmit}
                values={education}
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
                resume={resume}
                prevStep={prevStep}
                handleSubmit={handleSubmit}
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