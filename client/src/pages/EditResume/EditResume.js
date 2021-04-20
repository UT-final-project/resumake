import React, { useState, useEffect, useContext } from 'react';
import API from '../../utils/API';
import AbstractForm from '../../components/AbstractForm/AbstractForm';
import WorkForm from '../../components/WorkForm/WorkForm';
import EducationForm from '../../components/EducationForm/EducationForm';
import CertificateForm from '../../components/CertificateForm/CertificateForm';
import SkillsForm from '../../components/SkillsForm/SkillsForm';
import Confirm from '../../components/Confirm/Confirm';
import UserContext from "../../utils/UserContext";

function UserForm({ getUser }) {
    const { user, userLoggedIn } = useContext(UserContext);
    const [userResume, setUserResume] = useState();
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
    const [skills, setSkills] = useState({
        skill: ''
    });

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
        setSkills({
            skill: ''
        });

        // console.log(`User Logged In ${userLoggedIn}`);
        // if (userLoggedIn) {
        //     getUser(user);
        // };
    }, [employment, eduHistory, certHistory, skillList, userLoggedIn])

    useEffect(() => {
        if (!user) {
            return;
        } else {
            setUserResume(user.resumes[0]);
        }
    }, [user]);

    useEffect(() => {
        if (!userResume) {
            return;
        } else {
            console.log(userResume);


            console.log(userResume.education);
            console.log(userResume.certifications);
            console.log(userResume._id);

            setAbstract(userResume.abstract);
            if (!userResume.employment) {
                setEmployment([])
            } else {
                setEmployment(userResume.employment);
            }
            if (!userResume.education[0]) {
                setEducation([]);
            } else {
                setEduHistory(userResume.education);
            }
            if (!userResume.certifications[0]) {
                setCertHistory([]);
            } else {
                setCertHistory(userResume.certifications);
            }
            if (!userResume.skills) {
                setSkills([]);
            } else {
                setSkillList(userResume.skills);
            }

        }
    }, [userResume]);

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
        setSkills({
            skill: ''
        });
    };

    // Removes job from employment array
    const removeJob = async (id) => {
        let filteredJobs = await employment.filter(jobs => {
            if (jobs.id != id){
                return jobs
            }
        });
        setEmployment(filteredJobs);
    }
    // Removes education field from eduHistory array
    const removeEd = async (id) => {
        let filteredEd = await eduHistory.filter(education => {
            if (education.id != id){
                return education
            }
        });
        setEduHistory(filteredEd);
    }

    // Removes certification from certHistory array
    const removeCert = async (id) => {
        let filteredCert = await certHistory.filter(certifications => {
            if (certifications.id != id){
                return certifications
            }
        });
        setCertHistory(filteredCert);
    }

    const removeSkill = async (id) => {
        let filteredSkill = await skillList.filter(skill => {
            if (skill.id != id) {
                return skill
            }
        })
        setSkillList(filteredSkill);
    }

    // Functions to keep track of which step, or form, the user is at
    const nextStep = () => {
        setStep(step + 1);
    };
    const prevStep = () => {
        setStep(step - 1);
    };

    // Functions to handle change states depending on user input
    function handleAbstractSubmit(event) {
        setAbstract(event.target.value);
    };
    function handleJobSubmit(event) {
        const { name, value } = event.target;
        setJob({ ...job, [name]: value, id: Math.random().toString(36).substr(2, 9) });
    };
    function handleEducationSubmit(event) {
        const { name, value } = event.target;
        setEducation({ ...education, [name]: value, id: Math.random().toString(36).substr(2, 9) });
    };
    function handleCertSubmit(event) {
        const { name, value } = event.target;
        setCertifications({ ...certifications, [name]: value, id: Math.random().toString(36).substr(2, 9) });
    };
    function handleSkillsSubmit(event) {
        const { name, value } = event.target;
        setSkills({ ...skills, [name]: value, id: Math.random().toString(36).substr(2, 9) })
    };

    // Function that capitalizes our user's first & last name
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    // Function for the Submit button to post resume data
    function handleResumeSubmit(event) {
        event.preventDefault();
        // API.createResume({
        //     author: user._id,
        //     firstName: capitalize(user.firstname),
        //     lastName: capitalize(user.lastname),
        //     abstract: abstract,
        //     employment: employment,
        //     education: eduHistory,
        //     certifications: certHistory,
        //     skills: skillList
        // }).then(res => {
        //     console.log(res);
        //     console.log("/////////////// Resume Successfully Created! ///////////////");
        // }).catch(err => console.error(err));
        API.updateResume(userResume._id, {
            author: user._id,
            firstName: capitalize(user.firstname),
            lastName: capitalize(user.lastname),
            abstract: abstract,
            employment: employment,
            education: eduHistory,
            certifications: certHistory,
            skills: skillList
        }).then(res => {
            console.log(res);
            console.log("/////////////// Resume Successfully Updated! ///////////////");
        }).catch(err => console.error(err));
    };

    switch (step) {
        case 1:
            return (
                <AbstractForm
                    nextStep={nextStep}
                    handleChange={handleAbstractSubmit}
                    value={abstract}
                />
            );
        case 2:
            return (
                <WorkForm
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleJobSubmit}
                    values={job}
                    employment={employment}
                    addJob={addJob}
                    removeJob={removeJob}
                />
            );
        case 3:
            return (
                <EducationForm
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleEducationSubmit}
                    values={education}
                    eduHistory={eduHistory}
                    addEdu={addEdu}
                    removeEd={removeEd}
                />
            );
        case 4:
            return (
                <CertificateForm
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleCertSubmit}
                    values={certifications}
                    certHistory={certHistory}
                    addCert={addCert}
                    removeCert={removeCert}
                />
            );
        case 5:
            return (
                <SkillsForm
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleSkillsSubmit}
                    values={skills}
                    skillList={skillList}
                    addSkill={addSkill}
                    removeSkill={removeSkill}
                />
            );
        case 6:
            return (
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
            );
        default:
            return (
                <AbstractForm
                    nextStep={nextStep}
                    handleChange={handleAbstractSubmit}
                    value={abstract}
                />
            );
    };
};

export default UserForm;