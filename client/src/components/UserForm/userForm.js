import React, {useState, useEffect} from 'react';
import AbstractForm from '../AbstractForm/AbstractForm';
import WorkForm from '../WorkForm/WorkForm';
import EducationForm from '../EducationForm/EducationForm';
import CertificateForm from '../CertificateForm/CertificateForm';
import SkillsForm from '../SkillsForm/SkillsForm';
import ProjectsForm from '../ProjectsForm/ProjectsForm';
import ProfLinksForm from '../ProfLinksForm/ProfLinksForm';

function UserForm(){
    const [step, setStep] = useState(1);
    const [abstract, setAbstract] = useState('');
    const [workHistory, setWorkHistory] = useState({
        prevEmployer: '',
        date: '',
        jobTitle: '',
        jobDescription: ''
    })
    const [education, setEducation] = useState({
        degree: '',
        fieldOfStudy: '',
        years: 0,
        certfications: ''
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
    const handleAbstractSubmit = event => {
        setAbstract(event.target.value)
    }
    const handleWorkSubmit = input => event => {
        setWorkHistory({[input]: event.target.value})
    }

    switch(step) {
        case 1:
            return(
                <AbstractForm
                nextStep={nextStep}
                handleChange={handleAbstractSubmit}
                />
            )
        case 2:
            return(
                <WorkForm 
                nextStep={nextStep}
                prevStep={prevStep}
                />
            )
        case 3:
            return(
                <EducationForm 
                nextStep={nextStep}
                prevStep={prevStep}
                />
            )
        case 4:
            return(
                <CertificateForm 
                nextStep={nextStep}
                prevStep={prevStep}
                />
            )
        case 5:
            return(
                <SkillsForm 
                nextStep={nextStep}
                prevStep={prevStep}
                />
            )
        case 6:
            return(
                <ProjectsForm 
                nextStep={nextStep}
                prevStep={prevStep}
                />
            )
        case 7:
            return(
                <ProfLinksForm />
            )
    }
}

export default UserForm;