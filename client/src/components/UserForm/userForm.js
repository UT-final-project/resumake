import React, {useState, useEffect} from 'react';
import AbstractForm from '../AbstractForm/AbstractForm';
import WorkForm from '../WorkForm/WorkForm';
import EducationForm from '../EducationForm/EducationForm';
import CertificateForm from '../CertificateForm/CertificateForm';
import SkillsForm from '../SkillsForm/SkillsForm';
import ProjectsForm from '../ProjectsForm/ProjectsForm';
import ProfLinksForm from '../ProfLinksForm/ProfLinksForm';
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
        endDateYear: ''
    })
    const [education, setEducation] = useState({
        degree: '',
        school: '',
        startYear: '',
        endYear: '',
    })
    const [certifications, setCertifications] = useState({
        certificate: '',
        awardedBy: ''
    })
    const [skills, setSkills] = useState('');
    const [projects, setProjects] = useState({
        title: '',
        description: ''
    })
    const [links, setLink] = useState({
        linkedIn: '',
        website: ''
    })

    // Functions to keep track of which step, or form, the user is at
    const nextStep = () => {
        setStep(step + 1)
    }
    const prevStep = () => {
        setStep(step - 1)
    }

    // Functions to handle change states depending on user input
    function handleAbstractSubmit(event){
        setAbstract(event.target.value)
    }
    function handleWorkSubmit(event){
        const { name, value } = event.target;
        setWorkHistory({...workHistory, [name]: value})
    }
    function handleEducationSubmit(event){
        const { name, value } = event.target;
        setEducation({...education, [name]: value})
    }
    function handleCertSubmit(event){
        const { name, value } = event.target;
        setCertifications({...certifications, [name]: value})
    }
    function handleSkillsSubmit(event){
        setSkills(event.target.value)
    }

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
                abstractValue={abstract}
                workValue={workHistory}
                edValue={education}
                certValue={certifications}
                skillsValue={skills}
                nextStep={nextStep}
                prevStep={prevStep}
                />
            )
    }
}

export default UserForm;