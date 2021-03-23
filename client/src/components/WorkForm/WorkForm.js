import React from 'react';
import JobList from '../Lists/JobList/JobList';
import _ from "lodash";
import '../UserForm/userForm.css'

function WorkForm(props){
    const current = new Date();
    // lodash to generate 50 years worth of options in descending order
    const years = _.orderBy(_.range(current.getFullYear() - 50, current.getFullYear()+1), null, 'desc');
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="form-title">Work History</h1>
                    <hr />
                    <form id="work-form">
                        <div className="form-group">
                            <div>
                                <label htmlFor="prevEmployerInput" className="txtInput-heading">Previous Employer</label>
                                <input type="text" className="form-control" id="prevEmployerInput" placeholder="ex. Google LLC" name="prevEmployer" value={props.values.prevEmployer} onChange={props.handleChange}/>
                                <label htmlFor="jobTitleInput" className="txtInput-heading">Job Title</label>
                                <input type="text" className="form-control" id="jobTitleInput" placeholder="ex. Software Engineer" name="jobTitle" value={props.values.jobTitle} onChange={props.handleChange}/>
                                <label htmlFor="jobDescriptionInput" className="txtInput-heading">Job Description</label>
                                <textarea className="form-control" id="jobDescriptionInput" rows="3" onChange={props.handleChange} name="jobDescription" value={props.values.jobDescription}/>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <label htmlFor="startDateSelect" className="txtInput-heading">Start Date (mm/yyyy)</label>
                                        <select className="form-control month-dropdown" id="startDateSelect" name="startDateMonth" value={props.values.startDateMonth} onChange={props.handleChange}>
                                            <option>- Month -</option>
                                            {months.map(month => { 
                                                return (
                                                    <option key={Math.random().toString(36).substr(2, 9)}>{month}</option>
                                                );
                                            })}
                                        </select>
                                        <select className="form-control month-dropdown" id="startDateSelect" name="startDateYear" value={props.values.startDateYear} onChange={props.handleChange}>
                                            <option>- Year -</option>
                                            {years.map(year => { 
                                                return (
                                                    <option key={Math.random().toString(36).substr(2, 9)}>{year}</option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-sm-3">
                                        <label htmlFor="startDateSelect" className="txtInput-heading">End Date (mm/yyyy)</label>
                                        <select className="form-control month-dropdown" id="startDateSelect" name="endDateMonth" value={props.values.endDateMonth} onChange={props.handleChange}>
                                            <option>- Month -</option>
                                            {months.map(month => { 
                                                return (
                                                    <option key={Math.random().toString(36).substr(2, 9)}>{month}</option>
                                                );
                                            })}
                                        </select>
                                        <select className="form-control month-dropdown" id="startDateSelect" name="endDateYear" value={props.values.endDateYear} onChange={props.handleChange}>
                                            <option>- Year -</option>
                                            {years.map(year => { 
                                                return (
                                                    <option key={Math.random().toString(36).substr(2, 9)}>{year}</option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <button type="button" className="btn add-btn" onClick={props.addJob}>+ Add Another Job</button>
                            <br/>
                            <button type="button" className="btn back-btn" onClick={props.prevStep}>Back</button>
                            <button type="button" className="btn continue-btn" onClick={props.nextStep}>Continue</button>
                            {props.employment.length ? (
                                <section>
                                    <div>
                                        <h1 className="form-title">Preview</h1>
                                        <hr/>
                                        <br/>
                                    </div>
                                    <JobList employment={props.employment}/>
                                </section>
                            ):( <div/>)}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WorkForm;
